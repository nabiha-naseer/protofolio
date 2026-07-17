"use client";

import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Edit3,
  GitBranch,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setSuccess("Your message has been sent successfully!");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <User className="w-6 h-6" />,
      label: "Name",
      value: "Nabiha Fatima",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "nabihafatima6667@gmail.com",
      href: "mailto:nabihafatima6667@gmail.com",
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      label: "GitHub",
      value: "nabiha-naseer",
      href: "https://github.com/nabiha-naseer",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="w-full flex flex-col gap-10"
    >
      <div className="p-8 md:p-12 rounded-[2rem] bg-card/60 border border-border/50 shadow-2xl shadow-black/5 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-primary/40 blur-[4px]" />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Full Name
              </label>

              <div className="relative group">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address
              </label>

              <div className="relative group">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-foreground"
            >
              Subject
            </label>

            <div className="relative group">
              <MessageSquare className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <input
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                placeholder="How can I help you?"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>

            <div className="relative group">
              <Edit3 className="absolute left-3.5 top-4 w-5 h-5 text-muted-foreground transition-colors group-focus-within:text-primary" />

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500">
              {error}
            </div>
          )}

          {success && (
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-600">
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map((info, idx) => {
          const CardContent = (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.4 }}
              className="flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-secondary/20 border border-border backdrop-blur-sm hover:bg-secondary/40 transition-colors h-full"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                {info.icon}
              </div>

              <h3 className="font-semibold text-foreground mb-1">
                {info.label}
              </h3>

              <p className="text-sm font-medium text-muted-foreground">
                {info.value}
              </p>
            </motion.div>
          );

          return info.href ? (
            <Link
              href={info.href}
              key={info.label}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-3xl"
            >
              {CardContent}
            </Link>
          ) : (
            <div key={info.label} className="h-full">
              {CardContent}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}