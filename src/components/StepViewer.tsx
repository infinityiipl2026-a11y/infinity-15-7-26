import type { OrigamiStep } from "../data/origami";

export default function StepViewer({ steps }: { steps: OrigamiStep[] }) {
  return (
    <ol className="space-y-8">
      {steps.map((step) => (
        <li
          key={step.stepNumber}
          className="rounded-2xl border border-mist bg-paper p-5 sm:p-6 shadow-sm"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-48 w-full shrink-0 items-center justify-center rounded-xl white sm:w-48">
              <img
                src={step.svgImage}
                alt={`${step.title} illustration`}
                className="h-40 w-40 object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-cream">
                  {step.stepNumber}
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{step.title}</h3>
              </div>

              <p className="mt-3 leading-relaxed text-slate">{step.instruction}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
