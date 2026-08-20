import { withBase } from "ufo";

export function useAssetUrl(path: string) {
  return withBase(path, useRuntimeConfig().app.baseURL);
}
