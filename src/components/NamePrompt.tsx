"use client";

import { useState } from "react";
import { useAppStore } from "@/store/useAppStore";

export default function NamePrompt() {
  const name = useAppStore((s) => s.name);
  const setName = useAppStore((s) => s.setName);
  const [localName, setLocalName] = useState("");

  if (name) {
    return (
      <div className="p-4 border rounded-xl bg-white shadow-sm">
        <span className="text-sm">Hello, <span className="font-semibold">{name}</span></span>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <input
          value={localName}
          onChange={(e) => setLocalName(e.target.value)}
          placeholder="Enter your name"
          className="px-3 py-2 border rounded-lg text-sm w-64"
        />
        <button
          onClick={() => {
            const t = localName.trim();
            if (t) setName(t);
          }}
          disabled={localName.trim().length === 0}
          className={`px-4 py-2 text-sm rounded-lg ${localName.trim().length === 0 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          Save
        </button>
      </div>
    </div>
  );
}


