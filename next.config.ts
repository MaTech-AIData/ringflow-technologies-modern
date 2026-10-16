import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/ringflow-technologies-modern",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;