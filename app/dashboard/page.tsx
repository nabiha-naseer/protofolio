"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import DashboardSidebar from "@/components/dashboard-sidebar";
import {
  Mail,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";

interface DashboardData {
  totalContacts: number;
  pendingContacts: number;
  resolvedContacts: number;
  recentContacts: {
    id: string;
    name: string;
    email: string;
    subject: string;
    status: string;
  }[];
}

export default function DashboardPage() {
  const router = useRouter();

  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch("/api/dashboard");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    checkSession();
  }, [router]);

  function getStatusColor(status: string) {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400";

      case "Done":
        return "bg-blue-500/15 text-blue-700 dark:text-blue-400";

      case "Completed":
        return "bg-green-500/15 text-green-700 dark:text-green-400";

      case "Resolved":
        return "bg-purple-500/15 text-purple-700 dark:text-purple-400";

      default:
        return "bg-muted text-muted-foreground";
    }
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex bg-background min-h-screen">
      <DashboardSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Admin Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {/* Total Contacts Card */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground font-medium">
                  Total Contacts
                </p>
                <h2 className="text-4xl font-bold mt-2 text-foreground">
                  {data.totalContacts}
                </h2>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-full">
                <Mail className="text-blue-500 w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Pending Card */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground font-medium">
                  Pending
                </p>
                <h2 className="text-4xl font-bold mt-2 text-foreground">
                  {data.pendingContacts}
                </h2>
              </div>
              <div className="bg-yellow-500/10 p-4 rounded-full">
                <Clock className="text-yellow-500 w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Resolved Card */}
          <div className="bg-card border border-border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground font-medium">
                  Resolved
                </p>
                <h2 className="text-4xl font-bold mt-2 text-foreground">
                  {data.resolvedContacts}
                </h2>
              </div>
              <div className="bg-green-500/10 p-4 rounded-full">
                <CheckCircle className="text-green-500 w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Contacts Table */}
        <div className="bg-card border border-border rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">
            Recent Contacts
          </h2>

          {data.recentContacts.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              No recent contacts found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm lg:text-base">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Email</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Subject</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.recentContacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-b border-border hover:bg-muted/30 transition text-foreground"
                    >
                      <td className="p-4">{contact.name}</td>
                      <td className="p-4 text-muted-foreground">{contact.email}</td>
                      <td className="p-4">{contact.subject}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${getStatusColor(
                            contact.status
                          )}`}
                        >
                          {contact.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}