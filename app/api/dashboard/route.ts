import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const totalContacts = await prisma.contact.count();

    const pendingContacts = await prisma.contact.count({
      where: {
        status: "Pending",
      },
    });

    const resolvedContacts = await prisma.contact.count({
      where: {
        status: {
          in: ["Resolved", "Done", "Completed"],
        },
      },
    });

    const recentContacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return NextResponse.json({
      totalContacts,
      pendingContacts,
      resolvedContacts,
      recentContacts,
    });
  } catch (_error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}