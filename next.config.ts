import type { NextConfig } from "next";

// GitHub Pages serves project sites under /<repo>. The deploy workflow passes
// the path from actions/configure-pages; locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
