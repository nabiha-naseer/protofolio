"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  LayoutDashboard,
  Mail,
  LogOut,
  Shield,
  User,
} from "lucide-react";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        setEmail(user.email);
      }
    }

    getUser();
  }, []);

  async function handleLogout() {
    setLoggingOut(true);

    await supabase.auth.signOut();

    router.push("/login");
  }

  return (
    <aside className="w-72 min-h-screen bg-card border-r border-border flex flex-col shadow-xl z-10">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3 mb-5">
          <Shield className="w-9 h-9 text-primary" />
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              Admin Panel
            </h2>
            <p className="text-xs text-muted-foreground">
              Portfolio Dashboard
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-muted/50 border border-border/50 rounded-xl p-3">
          <div className="bg-primary/10 text-primary rounded-full p-2">
            <User size={18} />
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold text-foreground">
              Administrator
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {email || "Loading..."}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-6 space-y-3">
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all font-medium ${
            pathname === "/dashboard"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/dashboard/contacts"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all font-medium ${
            pathname === "/dashboard/contacts"
              ? "bg-primary text-primary-foreground shadow-md"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Mail size={20} />
          Contact Queries
        </Link>
      </nav>

      <div className="p-6 border-t border-border">
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-blue-400 text-white py-3 font-medium hover:bg-blue-500 transition shadow-sm disabled:opacity-60 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          <LogOut size={18} />
          {loggingOut ? "Logging Out..." : "Logout"}
        </button>
      </div>
    </aside>
  );
}