import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// DELETE CONTACT
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.contact.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete contact.",
      },
      {
        status: 500,
      }
    );
  }
}

// UPDATE STATUS
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { status } = await request.json();
    const { id } = await params;

    const contact = await prisma.contact.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.error("Update Error:", error);

    return NextResponse.json(
      {
        error: "Failed to update contact status.",
      },
      {
        status: 500,
      }
    );
  }
}