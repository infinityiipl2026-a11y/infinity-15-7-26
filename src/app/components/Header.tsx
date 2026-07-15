import Image from "next/image";
import { siteConfig } from "../lib/site-config";

export default function Header() {
  return (
    <header className="bg-paper border-b-2 border-forest shadow-[0_2px_12px_rgba(44,74,62,0.06)] py-3">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 grid grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-5">
        <Image
          src="/images/logo.png"
          alt={`${siteConfig.name} logo`}
          width={180}
          height={84}
          priority
          className="w-full max-w-[64px] sm:max-w-[110px] lg:max-w-[180px] h-auto object-contain transition-transform duration-300 hover:scale-[1.04]"
        />

        <div className="text-center min-w-0">
          <h1 className="font-display font-bold text-forest text-sm sm:text-lg md:text-2xl lg:text-[30px] leading-tight tracking-tight text-balance">
            {siteConfig.name}
          </h1>
          <p className="hidden sm:block text-slate text-[10px] sm:text-[13px] mt-1 uppercase tracking-[0.08em] font-medium text-balance">
            {siteConfig.tagline}
          </p>
        </div>

        <Image
          src="/images/RPC.png"
          alt="RPC logo"
          width={180}
          height={84}
          className="w-full max-w-[52px] sm:max-w-[90px] lg:max-w-[180px] h-auto object-contain transition-transform duration-300 hover:scale-[1.04]"
        />
      </div>
    </header>
  );
}
