// lib/email.ts
import nodemailer from 'nodemailer';
import { ApiResponse } from "@/types/ApiResponse";

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password
  },
});

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    // Create HTML email content (replacing your React component)
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verification Code</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">TruefeedBack</h1>
        </div>
        
        <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #333; margin-bottom: 20px;">Hello ${username}!</h2>
          
          <p style="font-size: 16px; margin-bottom: 20px;">
            Thank you for signing up with TruefeedBack. To complete your registration, please use the verification code below:
          </p>
          
          <div style="background: white; border: 2px dashed #667eea; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #667eea; letter-spacing: 5px; font-family: 'Courier New', monospace;">
              ${verifyCode}
            </div>
          </div>
          
          <p style="font-size: 14px; color: #666; margin-bottom: 20px;">
            This verification code will expire in <strong>1 hour</strong>. If you didn't create an account with us, please ignore this email.
          </p>
          
          <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
            <p style="font-size: 12px; color: #999; text-align: center;">
              This is an automated message from TruefeedBack. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: {
        name: 'TruefeedBack',
        address: process.env.EMAIL_USER!
      },
      to: email,
      subject: "TruefeedBack Message | Verification Code",
      html: htmlContent,
      // Optional: Add plain text version
      text: `Hello ${username}!\n\nYour verification code is: ${verifyCode}\n\nThis code will expire in 1 hour.\n\nBest regards,\nTruefeedBack Team`
    };

    await transporter.sendMail(mailOptions);
    
    return { 
      success: true, 
      message: "Verification email sent successfully" 
    };
  } catch (emailError) {
    console.log("Error sending verification email", emailError);
    return { 
      success: false, 
      message: "Failed to send verification email" 
    };
  }
}