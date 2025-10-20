"use client";

import { useMemo } from "react";
import { useAppStore } from "@/store/useAppStore";

export function BadgesSection() {
  const totalDonated = useAppStore((s) => s.totalDonated);
  const donations = useAppStore((s) => s.donations);

  const badges = useMemo(() => {
    const list: { id: string; label: string }[] = [];
    if (totalDonated >= 100) list.push({ id: "bronze", label: "Bronze Donor ($100+)" });
    if (totalDonated >= 500) list.push({ id: "silver", label: "Silver Donor ($500+)" });
    if (totalDonated >= 1000) list.push({ id: "gold", label: "Gold Donor ($1k+)" });
    if (new Set(donations.map((d) => d.causeId)).size >= 5)
      list.push({ id: "supporter", label: "Diverse Supporter (5+ campaigns)" });
    if (donations.length >= 10) list.push({ id: "streak", label: "Consistent Giver (10+ donations)" });
    return list;
  }, [totalDonated, donations]);

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="font-medium mb-3">Badges & milestones</div>
      {badges.length === 0 ? (
        <div className="text-sm text-gray-500">No badges yet. Keep going!</div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span key={b.id} className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {b.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}


