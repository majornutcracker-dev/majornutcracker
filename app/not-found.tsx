"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// The static export emits this page as 404.html, which GitHub Pages serves for
// any unknown path. Until the site has more pages, send everything home.
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <main className="flex flex-1 items-center justify-center p-6 text-center">
      <p className="text-soft-violet">
        Redirecting… <Link href="/" className="text-coral underline">Go home</Link>
      </p>
    </main>
  );
}
