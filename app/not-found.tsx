import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container page-stack not-found">
      <h1>Page not found</h1>
      <p>The page you requested does not exist or may have moved.</p>
      <Link href="/ideas" className="button-secondary">
        Browse AI ideas
      </Link>
    </div>
  );
}
