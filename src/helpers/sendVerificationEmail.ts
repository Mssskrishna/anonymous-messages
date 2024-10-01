import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/Verificationemail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "anonymous verification code",
      react: VerificationEmail({username,otp:verifyCode}),
    });
    return { success: true, message: "Verification code sent" };
  } catch (emailError) {
    console.error("error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
