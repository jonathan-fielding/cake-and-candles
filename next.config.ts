import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repo-name>. The deploy workflow
// passes that prefix in NEXT_PUBLIC_BASE_PATH; locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
