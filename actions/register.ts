"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { generateActivationEmail } from "@/lib/emailTemplates/activation";
import { sendMail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcryptjs";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  const url = `${process.env.BASE_URL}/auth/new-verification?token=${verificationToken.token}`;

  const body = generateActivationEmail(validatedFields.data.name, url);
  await sendMail({
    to: validatedFields.data.email,
    subject: "Sum AI Account Activation",
    body,
  });
  return { success: "Confirmation email sent!" };
};
