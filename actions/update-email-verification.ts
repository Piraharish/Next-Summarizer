"use server";

import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const verifyAndUpdateEmail = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) return { error: "Token does not exist!" };

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: "This token has expired!" };

  // Update the user's email directly from the token
  await db.user.update({
    where: { id: existingToken.userId as string },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  // Delete the verification token
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });

  return { success: "Email verification and update successful!" };
};
