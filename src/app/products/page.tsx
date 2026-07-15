import type { Metadata } from "next";
import { productCategories } from "../lib/products-data";
import ProductCard from "@/app/components/ProductCard";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Infinity Industries' full range of writing & printing, packaging, industrial, and speciality grade papers sourced globally and distributed across India.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="page-bg py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-[60px]">
        <h1 className="section-heading text-3xl sm:text-5xl lg:text-6xl mb-16">
          Our Products
        </h1>

        <div className="space-y-20">
          {productCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28"
            >
              <h2 className="font-display font-bold text-forest text-3xl sm:text-4xl text-center mb-10">
                {category.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
