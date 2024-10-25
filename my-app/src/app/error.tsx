"use client";

import { error } from "console";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h1>{error.message}</h1>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}
