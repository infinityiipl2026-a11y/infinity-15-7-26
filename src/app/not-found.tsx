import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-bg py-32">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <h1 className="font-display font-extrabold text-forest text-6xl mb-6">
          404
        </h1>
        <p className="text-slate text-lg mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
