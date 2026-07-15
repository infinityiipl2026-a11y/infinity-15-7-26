import Image from "next/image";
import type { Product } from "../lib/products-data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card-surface flex flex-col overflow-hidden h-full hover:border-forest">
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={400}
        height={250}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-5 flex flex-col grow">
        <h3 className="font-bold text-forest text-[17px] leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-slate text-sm leading-relaxed">
          <span className="block mb-1">Applications:</span>
          {product.applications.map((app) => (
            <span key={app} className="block">
              • {app}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
