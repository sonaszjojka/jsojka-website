import { withBase } from "ufo";

/**
 * Prefixes a path to a file in `public/` with the app's base URL.
 *
 * Vite only rewrites asset URLs it processes itself, so literal paths written
 * in templates stay untouched and 404 when the site is served from a subpath
 * (as it is on GitHub Pages: /jsojka-website/).
 */
export function useAssetUrl(path: string) {
  return withBase(path, useRuntimeConfig().app.baseURL);
}
