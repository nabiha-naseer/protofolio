import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(contacts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch contacts." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // 1. Save to Prisma
    const contact = await prisma.contact.create({
      data: { name, email, subject, message, status: "Pending" },
    });

    // 2. Send Email via Resend
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev", // Use your verified domain if you have one
        to: "nabihafatima6667@gmail.com",
        subject: `New Portfolio Contact: ${subject}`,
        html: `
          <h1>New Message Received</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error("Email failed to send:", emailError);
      // We don't return an error here because the contact was saved to DB successfully
    }

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create contact." }, { status: 500 });
  }
}