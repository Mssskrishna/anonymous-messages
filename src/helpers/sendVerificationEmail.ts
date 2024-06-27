import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/Verificationemail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    
    return { success: true, message: "Verification code sent" };
  } catch (emailError) {
    console.error("error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
