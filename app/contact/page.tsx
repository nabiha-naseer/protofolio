import { ContactHero } from "@/components/contact/contact-hero";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-background selection:bg-primary/30 selection:text-primary pb-24">
      {/* Animated Background Gradients to match the auth and portfolio aesthetic */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <ContactHero />
      <div className="w-full max-w-4xl mx-auto px-6">
        <ContactForm />
      </div>
    </main>
  );
}