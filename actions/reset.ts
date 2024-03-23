"use server";

import { getUserByEmail } from "@/data/user";
import { generateResetPasswordEmail } from "@/lib/emailTemplates/resetPass";
import { sendMail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schema";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid email" };

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) return { error: "No user found" };

  const passwordResetToken = await generatePasswordResetToken(email);

  const url = `${process.env.BASE_URL}/auth/new-password?token=${passwordResetToken.token}`;

  const body = generateResetPasswordEmail(existingUser.name as string, url);
  await sendMail({
    to: validatedFields.data.email,
    subject: "Sum AI Password Reset",
    body,
  });

  return { success: "Reset email sent!" };
};
