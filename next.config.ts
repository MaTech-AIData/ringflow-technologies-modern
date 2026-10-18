
import type { NextConfig } from "next";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGitHubPages
    ? "/ringflow-technologies-modern"
    : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
