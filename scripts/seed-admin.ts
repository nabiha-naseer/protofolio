import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import { prisma } from "../lib/prisma";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function seedAdmin() {
  const email = "admin@example.com";
  const password = "Admin@12345";
  const name = "Admin";

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  if (error) {
    console.error("Supabase Error:", error.message);
    return;
  }

  await prisma.profile.upsert({
    where: {
      email,
    },
    update: {},
    create: {
      authUserId: data.user.id,
      name,
      email,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin user created successfully!");
  console.log("Email:", email);
  console.log("Password:", password);
}

seedAdmin()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });