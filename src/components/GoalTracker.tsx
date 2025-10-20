"use client";

import { useState } from "react";
import { useAppStore } from "@/store/useAppStore";

export function GoalTracker() {
  const setYearlyGoal = useAppStore((s) => s.setYearlyGoal);
  const goalAmount = useAppStore((s) => s.yearlyGoalAmount);
  const goalYear = useAppStore((s) => s.yearlyGoalYear);
  const ytd = useAppStore((s) => s.getYearToDateTotal());
  const [input, setInput] = useState<string>(goalAmount ? String(goalAmount) : "");

  const progressPct = goalAmount ? Math.min(100, Math.round((ytd / goalAmount) * 100)) : 0;

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="font-medium mb-2">Personal goal {goalYear ? `(${goalYear})` : ""}</div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          placeholder="Set yearly goal ($)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-2 border rounded-lg text-sm w-40"
        />
        <button
          className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-50"
          onClick={() => {
            const n = Number(input);
            if (isFinite(n) && n > 0) setYearlyGoal(n);
          }}
        >
          Save goal
        </button>
      </div>
      {goalAmount ? (
        <div className="mt-3">
          <div className="text-sm text-gray-600 mb-1">${ytd.toLocaleString()} / ${goalAmount.toLocaleString()}</div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-600" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      ) : null}
    </div>
  );
}


