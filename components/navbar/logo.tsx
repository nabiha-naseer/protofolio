import Link from "next/link";

export function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
      aria-label="Nabiha Naseer Home"
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground font-bold text-xl group-hover:scale-105 transition-transform duration-300 shadow-sm shadow-primary/20">
        N
      </div>
      <span className="font-bold text-xl tracking-tight hidden sm:inline-block group-hover:opacity-80 transition-opacity">
        Nabiha
      </span>
    </Link>
  );
}