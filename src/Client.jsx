import { startTransition, Suspense, use } from "react";
import { createRoot } from "react-dom/client";
import { createFromReadableStream } from "react-server-dom-webpack/client";

const script = document.querySelector("script[type='rsc-data']");
const stream = new Response(script.textContent).body;
const initialContentPromise = createFromReadableStream(stream);

function Root() {
  return use(initialContentPromise);
}

startTransition(() => {
  createRoot(document.getElementById("root")).render(
    <Suspense>
      <Root />
    </Suspense>
  );
});
