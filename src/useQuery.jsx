import { use } from "react";

const promiseCache = new Map();

export function useQuery(key, fn) {
  if (!promiseCache.has(key)) {
    promiseCache.set(key, fn());
  }

  const result = use(promiseCache.get(key));
  return result;
}
