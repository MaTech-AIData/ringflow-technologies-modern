
export const BASE_PATH =
  process.env.DEPLOY_TARGET === "github"
    ? "/ringflow-technologies-modern"
    : "";

export function assetPath(path: string): string {
  const normalizedPath = path.startsWith("/")
    ? path
    : `/${path}`;

  return `${BASE_PATH}${normalizedPath}`;
}
