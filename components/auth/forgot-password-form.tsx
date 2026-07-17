"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase password reset will be added later.
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <div className="p-8 md:p-10 rounded-[2rem] bg-card/60 border border-border/50 shadow-2xl shadow-black/5 backdrop-blur-xl relative overflow-hidden">
        {/* Subtle Inner Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-primary/40 blur-[4px]" />

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Forgot Password</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email address and we&apos;ll send you a password reset link.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
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
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all shadow-lg shadow-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            Send Reset Link
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-border/60" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Or</span>
          <div className="h-px flex-1 bg-border/60" />
        </div>

        {/* Links */}
        <div className="text-center space-y-3">
          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link 
              href="/login" 
              className="font-semibold text-primary hover:underline hover:text-primary/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              Log in
            </Link>
          </p>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link 
              href="/signup" 
              className="font-semibold text-primary hover:underline hover:text-primary/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}