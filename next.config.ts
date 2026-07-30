import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: one HTML file per route, deployable to GitHub Pages.
  output: "export",
  // GitHub Pages serves the repo at /site, so every asset and link needs that prefix.
  // Set NEXT_PUBLIC_BASE_PATH="" once a custom domain is configured.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "/site",
  // Pas d'optimisation d'images sans serveur : les fichiers de /public sont
  // servis tels quels. Le loader personnalise ne sert qu'a prefixer le basePath.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  // Emit /planning/index.html instead of /planning.html so direct links work on Pages.
  trailingSlash: true,
};

export default nextConfig;
