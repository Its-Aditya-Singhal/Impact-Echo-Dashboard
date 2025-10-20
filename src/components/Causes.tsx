"use client";

import { useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { ReminderAdd } from "./Reminders";
import { Star } from "lucide-react";

export function CausesList() {
  const causes = useAppStore((s) => s.causes);
  return (
    <div className="space-y-3">
      {causes.map((c) => (
        <CauseCard key={c.id} causeId={c.id} />)
      )}
    </div>
  );
}

function CauseCard({ causeId }: { causeId: string }) {
  const cause = useAppStore((s) => s.causes.find((x) => x.id === causeId)!);
  const donateToCause = useAppStore((s) => s.donateToCause);
  const favorites = useAppStore((s) => s.favoriteCauseIds);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);
  const [amount, setAmount] = useState<string>("");

  const progress = Math.min(
    100,
    Math.round((cause.raisedAmount / cause.goalAmount) * 100)
  );

  const onFund = () => {
    const num = Number(amount);
    if (!isFinite(num) || num <= 0) return;
    donateToCause({ causeId: cause.id, amount: num, fromAddress: "local-user" });
    setAmount("");
  };

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-medium">{cause.title}</div>
          <div className="text-xs text-gray-500">{cause.category}</div>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Favorite"
            onClick={() => toggleFavorite(cause.id)}
            className={`p-1 rounded hover:bg-gray-50 ${favorites.includes(cause.id) ? "text-yellow-500" : "text-gray-400"}`}
            title={favorites.includes(cause.id) ? "Unfavorite" : "Favorite"}
          >
            <Star size={18} fill={favorites.includes(cause.id) ? "currentColor" : "none"} />
          </button>
          <div className="text-sm text-gray-600">
          ${cause.raisedAmount.toLocaleString()} / ${cause.goalAmount.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600" style={{ width: `${progress}%` }} />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          type="number"
          min="0"
          className="px-3 py-2 border rounded-lg text-sm w-32"
        />
        <button
          onClick={onFund}
          disabled={!amount || Number(amount) <= 0}
          className={`px-4 py-2 text-sm rounded-lg ${
            !amount || Number(amount) <= 0
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          FUND
        </button>
        <div className="ml-auto">
          <ReminderAdd causeId={cause.id} />
        </div>
      </div>
    </div>
  );
}


