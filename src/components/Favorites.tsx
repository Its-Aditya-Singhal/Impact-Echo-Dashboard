"use client";

import { useAppStore } from "@/store/useAppStore";

export function FavoritesSection() {
  const favorites = useAppStore((s) => s.favoriteCauseIds);
  const causes = useAppStore((s) => s.causes.filter((c) => favorites.includes(c.id)));

  if (favorites.length === 0) {
    return (
      <div className="p-4 border rounded-xl bg-white shadow-sm">
        <div className="font-medium mb-2">Favorites</div>
        <div className="text-sm text-gray-500">No favorite causes yet.</div>
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="font-medium mb-3">Favorites</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {causes.map((c) => (
          <div key={c.id} className="p-3 border rounded-lg">
            <div className="font-medium">{c.title}</div>
            <div className="text-xs text-gray-500">{c.category}</div>
            <div className="mt-2 text-sm text-gray-600">
              ${c.raisedAmount.toLocaleString()} / ${c.goalAmount.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


