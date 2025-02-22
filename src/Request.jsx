"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "./Suspense.jsx";
import { useQuery } from "./useQuery.jsx";

const fetchSomething = async () => {
  const response = await fetch("http://localhost:3000/api");
  if (!response.ok) {
    throw new Error("Failed to from API");
  }
  return response.text();
};

function Query() {
  const result = useQuery("test", fetchSomething);

  return <div>{result}</div>;
}

export function Request() {
  return (
    <ErrorBoundary fallback={<p className="bg-red-500">Error</p>}>
      <Suspense fallback={<p>Loading</p>}>
        <Query />
      </Suspense>
    </ErrorBoundary>
  );
}
