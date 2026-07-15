import { PartyPopper } from "lucide-react";

export default function FinishedModel({
  finalImage,
  title,
}: {
  finalImage: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-64 w-full max-w-sm items-center justify-center rounded-3xl border border-mist bg-white sm:h-72">
        <img
          src={finalImage}
          alt={`Finished ${title}`}
          className="h-52 w-52 object-contain sm:h-60 sm:w-60"
        />
      </div>

      <div className="mx-auto mt-6 inline-flex max-w-md items-center gap-3 rounded-2xl bg-forest px-6 py-4 text-left text-cream shadow-[0_10px_28px_rgba(44,74,62,0.25)]">
        <PartyPopper className="h-8 w-8 shrink-0 text-gold-light" />
        <p>
          <span className="block font-display text-lg font-bold">Congratulations!</span>
          <span className="text-sm text-cream/85">You&apos;ve completed this tutorial.</span>
        </p>
      </div>
    </div>
  );
}
