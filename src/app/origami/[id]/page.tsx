import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../components/Breadcrumbs";
import TutorialHeader from "../../../components/TutorialHeader";
import StepViewer from "../../../components/StepViewer";
import FinishedModel from "../../../components/FinishedModel";
import RelatedTutorials from "../../../components/RelatedTutorials";
import { origamiData, getOrigamiBySlug, getRelatedTutorials } from "../../../data/origami";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return origamiData.map((item) => ({ id: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getOrigamiBySlug(id);
  if (!item) return {};

  return {
    title: `${item.title} — Origami Tutorial`,
    description: item.description,
    alternates: { canonical: `/origami/${item.slug}` },
  };
}

export default async function OrigamiDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getOrigamiBySlug(id);

  if (!item) {
    notFound();
  }

  const related = getRelatedTutorials(item);

  return (
    <div className="page-bg">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Origami", href: "/origami" },
            { label: item.difficulty, href: `/origami/${item.difficulty.toLowerCase()}` },
            { label: item.title },
          ]}
        />

        <TutorialHeader item={item} />

        <section className="mt-10">
          <h2 className="font-display text-2xl font-bold text-ink">Introduction</h2>
          <p className="mt-3 leading-relaxed text-slate">
            This tutorial walks you through folding a {item.title.toLowerCase()} from a
            single square sheet of paper. Follow each step in order, take your time
            with the creases, and you&apos;ll have a finished {item.title.toLowerCase()}{" "}
            in about {item.estimatedTime}.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-6 font-display text-2xl font-bold text-ink">Step by Step</h2>
          <StepViewer steps={item.steps} />
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-center font-display text-2xl font-bold text-ink">
            Finished Model
          </h2>
          <FinishedModel finalImage={item.finalImage} title={item.title} />
        </section>

        <section className="mt-14">
          <RelatedTutorials items={related} />
        </section>
      </div>
    </div>
  );
}
