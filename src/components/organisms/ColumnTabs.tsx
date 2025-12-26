"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setTab } from "@/store/tokenSlice";

const tabs = [
  { key: "new", label: "New Pairs" },
  { key: "final", label: "Final Stretch" },
  { key: "migrated", label: "Migrated" }
] as const;

export function ColumnTabs() {
  const dispatch = useDispatch();
  const active = useSelector((s: RootState) => s.tokenUI.activeTab);

  return (
    <div className="flex gap-2 mb-4">
      {tabs.map(t => (
        <button
          key={t.key}
          onClick={() => dispatch(setTab(t.key))}
          className={`px-4 py-2 rounded ${
            active === t.key ? "bg-blue-600" : "bg-white/10"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
