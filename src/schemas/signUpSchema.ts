import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(20, "Username is no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]/, "Username should not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid message" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
