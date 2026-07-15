import { notFound } from "next/navigation";
import { origamiData, getOrigamiBySlug } from "../../../../data/origami";
import PrintClient from "./PrintClient";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return origamiData.map((item) => ({ id: item.slug }));
}

export default async function OrigamiPrintPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getOrigamiBySlug(id);

  if (!item) {
    notFound();
  }

  return <PrintClient item={item} />;
}
