import { siteConfig } from "../lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-forest text-cream text-center py-10 px-5 text-[15px] tracking-wide">
      <div className="max-w-[1200px] mx-auto px-4">
        © {year} {siteConfig.name}
      </div>
    </footer>
  );
}
