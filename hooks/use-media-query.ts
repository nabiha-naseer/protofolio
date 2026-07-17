import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  // Initialize state once
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Create the listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add the listener
    media.addEventListener("change", listener);
    
    // Clean up
    return () => media.removeEventListener("change", listener);
  }, [query]); // Remove 'matches' from dependency array to stop the cascading loop

  return matches;
}