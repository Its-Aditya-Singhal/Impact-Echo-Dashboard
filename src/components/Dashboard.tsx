"use client";

import { useMemo } from "react";
import { useAppStore } from "@/store/useAppStore";
import { DonationChart } from "./DonationChart";

export function DashboardHeader() {
  const name = useAppStore((s) => s.name);
  const totalDonated = useAppStore((s) => s.totalDonated);
  const donations = useAppStore((s) => s.donations);

  const campaignsSupported = useMemo(() => {
    return new Set(donations.map((d) => d.causeId)).size;
  }, [donations]);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">{name ? `Welcome, ${name}` : "Welcome"}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Total donations" value={`$${totalDonated.toLocaleString()}`} />
        <StatCard label="Campaigns supported" value={String(campaignsSupported)} />
        <StatCard label="Total donations count" value={String(donations.length)} />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}

export function RecentDonations() {
  const donations = useAppStore((s) => s.donations);
  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="font-medium mb-3">Recent donations</div>
      <div className="space-y-2">
        {donations.length === 0 && (
          <div className="text-sm text-gray-500">No donations yet.</div>
        )}
        {donations.slice(0, 5).map((d) => (
          <div key={d.id} className="flex items-center justify-between text-sm">
            <span className="text-gray-600">{new Date(d.date).toLocaleString()}</span>
            <span className="font-medium">${d.amount.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImpactSummary() {
  const totalDonated = useAppStore((s) => s.totalDonated);
  const impact = useMemo(() => {
    const peopleHelped = Math.floor(totalDonated / 25);
    return peopleHelped;
  }, [totalDonated]);

  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="font-medium mb-2">Impact summary</div>
      <div className="text-sm text-gray-600">
        You helped <span className="font-semibold">{impact}</span> people.
      </div>
    </div>
  );
}

export function DashboardChart() {
  const donations = useAppStore((s) => s.donations);
  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <div className="font-medium mb-3">Donation history</div>
      <DonationChart donations={donations} />
    </div>
  );
}


