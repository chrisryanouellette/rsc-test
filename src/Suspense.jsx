import { Suspense as ReactSuspense } from "react";

export function Suspense({ children, fallback, ...rest }) {
  if (typeof window === "undefined") return fallback;
  return (
    <ReactSuspense fallback={fallback} {...rest}>
      {children}
    </ReactSuspense>
  );
}
