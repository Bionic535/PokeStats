"use client";

import { useEffect, useState } from "react";

export default function ApiTestPage() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    // This calls your /api/cards/route.ts GET function
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error("Error fetching API:", err);
        setMessage("Failed to load message");
      });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      <div className="p-4 border rounded bg-slate-50">
        <p className="text-gray-600 mb-2">Message from <code className="bg-gray-200 px-1">/api/cards</code>:</p>
        <p className="text-xl font-mono text-blue-600">{message}</p>
      </div>
    </div>
  );
}
