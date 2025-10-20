"use client";

import { useAppStore } from "@/store/useAppStore";

export function RemindersSection() {
  const reminders = useAppStore((s) => s.reminders);
  const cancelReminder = useAppStore((s) => s.cancelReminder);
  const causes = useAppStore((s) => s.causes);

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="font-medium mb-3">Recurring donation reminders</div>
      {reminders.length === 0 ? (
        <div className="text-sm text-gray-500">No reminders set.</div>
      ) : (
        <div className="space-y-2">
          {reminders.map((r) => {
            const cause = causes.find((c) => c.id === r.causeId);
            return (
              <div key={r.id} className="flex items-center justify-between text-sm border rounded-lg p-2">
                <div>
                  <div className="font-medium">{cause?.title}</div>
                  <div className="text-xs text-gray-500">{r.cadence} • next {new Date(r.nextDate).toLocaleDateString()}</div>
                </div>
                <button onClick={() => cancelReminder(r.id)} className="px-3 py-1 text-xs rounded border hover:bg-gray-50">Cancel</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ReminderAdd({ causeId }: { causeId: string }) {
  const addReminder = useAppStore((s) => s.addReminder);
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => addReminder({ causeId, cadence: "monthly" })} className="px-2 py-1 text-xs rounded border hover:bg-gray-50">Monthly</button>
      <button onClick={() => addReminder({ causeId, cadence: "weekly" })} className="px-2 py-1 text-xs rounded border hover:bg-gray-50">Weekly</button>
      <button onClick={() => addReminder({ causeId, cadence: "quarterly" })} className="px-2 py-1 text-xs rounded border hover:bg-gray-50">Quarterly</button>
    </div>
  );
}


