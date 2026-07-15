import Image from "next/image";
import { siteConfig } from "../lib/site-config";

export default function Header() {
  return (
    <header className="bg-paper border-b-2 border-forest shadow-[0_2px_12px_rgba(44,74,62,0.06)]">
{/* Mobile Layout */}
<div className="flex flex-col items-center justify-center py-5 px-4 lg:hidden">

  <Image
    src="/images/logo.png"
    alt={`${siteConfig.name} Logo`}
    width={180}
    height={84}
    priority
    className="w-28 h-auto mb-3"
  />

  <h1 className="font-display font-bold text-forest text-[18px] leading-tight whitespace-nowrap">
    {siteConfig.name}
  </h1>

  <p className="text-slate text-[10px] uppercase tracking-[0.08em] text-center mt-0 max-w-[280px]">
    {siteConfig.tagline}
  </p>

  <Image
    src="/images/RPC.png"
    alt="Reliable Paper Company"
    width={180}
    height={84}
    className="w-28 h-auto mt-2"
  />
</div>

      {/* Desktop / Tablet Layout */}
      <div className="hidden lg:grid max-w-[1400px] mx-auto px-6 py-3 grid-cols-[auto_1fr_auto] items-center gap-5">

        <Image
          src="/images/logo.png"
          alt={`${siteConfig.name} Logo`}
          width={180}
          height={84}
          priority
          className="w-[180px] h-auto"
        />

        <div className="text-center">
          <h1 className="font-display font-bold text-forest text-[30px]">
            {siteConfig.name}
          </h1>

          <p className="text-slate text-[13px] uppercase tracking-[0.08em] mt-1">
            {siteConfig.tagline}
          </p>
        </div>

        <Image
          src="/images/RPC.png"
          alt="Reliable Paper Company"
          width={180}
          height={84}
          className="w-[180px] h-auto"
        />
      </div>
    </header>
  );
}