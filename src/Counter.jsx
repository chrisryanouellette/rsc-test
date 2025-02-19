"use client"
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button className="bg-blue-600 rounded px-2 py-1 text-white" onClick={() => setCount(count => count + 1)}>Click me {count}</button>
    </>
  );
}