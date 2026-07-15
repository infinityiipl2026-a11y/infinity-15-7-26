"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-[100px] right-6 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-lg border-2 border-forest bg-paper text-xl text-forest shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-forest hover:text-cream"
    >
      ↑
    </button>
  );
}
