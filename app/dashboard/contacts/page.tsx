"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import DashboardSidebar from "@/components/dashboard-sidebar";
import { toast } from "sonner";

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
}

export default function ContactsPage() {
  const router = useRouter();

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      fetchContacts();
    }

    checkSession();
  }, [router]);

  async function fetchContacts() {
    try {
      setLoading(true);

      const res = await fetch("/api/contacts");
      const data = await res.json();

      setContacts(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: string, status: string) {
    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (res.ok) {
        toast.success("Status updated successfully.");
        fetchContacts();
      } else {
        toast.error("Failed to update status.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  }

  async function deleteContact(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch(`/api/contacts/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Contact deleted successfully.");
        fetchContacts();
      } else {
        toast.error("Failed to delete contact.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  }

  function getStatusColor(status: string) {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "Done":
        return "bg-blue-500/10 text-blue-500";
      case "Completed":
        return "bg-green-500/10 text-green-500";
      case "Resolved":
        return "bg-purple-500/10 text-purple-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  }

  const filteredContacts = contacts.filter((contact) => {
    const value = search.toLowerCase();

    return (
      contact.name.toLowerCase().includes(value) ||
      contact.email.toLowerCase().includes(value) ||
      contact.subject.toLowerCase().includes(value)
    );
  });

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <DashboardSidebar />

      <main className="flex-1 p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold">Contact Queries</h1>

          <input
            type="text"
            placeholder="Search by name, email or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 rounded-lg border border-border bg-background px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div className="bg-card border border-border rounded-xl shadow overflow-x-auto">
          {loading ? (
            <div className="p-12 text-center text-muted-foreground">
              Loading contacts...
            </div>
          ) : filteredContacts.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground">
              No contacts found.
            </div>
          ) : (
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Message</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredContacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4">{contact.name}</td>
                    <td className="p-4">{contact.email}</td>
                    <td className="p-4">{contact.subject}</td>
                    <td
                      className="p-4 max-w-xs truncate"
                      title={contact.message}
                    >
                      {contact.message}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                            contact.status
                          )}`}
                        >
                          {contact.status}
                        </span>
                        <select
                          value={contact.status}
                          onChange={(e) =>
                            updateStatus(contact.id, e.target.value)
                          }
                          className="border border-border bg-background rounded-lg px-2 py-1 text-sm"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Done">Done</option>
                          <option value="Completed">Completed</option>
                          <option value="Resolved">Resolved</option>
                        </select>
                      </div>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="bg-destructive text-destructive-foreground hover:opacity-90 px-4 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}