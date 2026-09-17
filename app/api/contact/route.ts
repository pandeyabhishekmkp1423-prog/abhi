import { NextResponse } from "next/server";

// Basic sanitization function to strip HTML tags and prevent XSS
function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")
    .trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name: rawName,
      email: rawEmail,
      organization: rawOrganization,
      projectType: rawProjectType,
      message: rawMessage,
      honeypot
    } = body;

    // 1. Anti-spam honeypot check: If filled, silently reject or pretend success
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // 2. Validate input existence
    if (!rawName || !rawEmail || !rawMessage) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // 3. Sanitize inputs
    const name = sanitize(String(rawName));
    const email = sanitize(String(rawEmail)).toLowerCase();
    const organization = rawOrganization ? sanitize(String(rawOrganization)) : "";
    const projectType = rawProjectType ? sanitize(String(rawProjectType)) : "General Inquiry";
    const message = sanitize(String(rawMessage));

    // 4. Server-side format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, error: "Name must be between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (message.length < 15 || message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must be between 15 and 5000 characters." },
        { status: 400 }
      );
    }

    // 5. Secure Email Dispatch (via environment variables if configured)
    // E.g., RESEND_API_KEY or SMTP configuration
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "contact@abhishekpandey.dev";

    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: "Portfolio Inquiry <onboarding@resend.dev>",
            to: [recipientEmail],
            reply_to: email,
            subject: `[Portfolio Inquiry] ${projectType} - ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "N/A"}\nProject Type: ${projectType}\n\nMessage:\n${message}`
          })
        });

        if (!emailResponse.ok) {
          console.error("Resend API error:", await emailResponse.text());
        }
      } catch (err) {
        console.error("Failed to dispatch email via Resend:", err);
      }
    } else {
      // In development or when env var is not set, log safely
      console.log("------------------------------------------");
      console.log("Incoming Portfolio Inquiry (No RESEND_API_KEY configured):");
      console.log(`From: ${name} <${email}>`);
      console.log(`Organization: ${organization || "N/A"}`);
      console.log(`Project Type: ${projectType}`);
      console.log(`Message: ${message}`);
      console.log("------------------------------------------");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you. Your inquiry has been received. I will review your requirements and respond shortly."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while processing your request." },
      { status: 500 }
    );
  }
}
