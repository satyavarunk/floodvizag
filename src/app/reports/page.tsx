"use client";

import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import IssueCard from "@/components/IssueCard";

import { issueService } from "@/services/IssueService";

export default function ReportsPage() {
  const reports = issueService.getReports();

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">

      <Header />

      <section className="mx-auto w-full max-w-7xl flex-1 p-4">

        <div className="mb-6">

          <h1 className="text-3xl font-bold text-slate-800">
            📋 Community Reports
          </h1>

          <p className="mt-2 text-slate-600">
            Browse the latest community reports.
          </p>

        </div>

        <div className="space-y-4">

          {reports.map((report) => (
            <IssueCard
              key={report.id}
              report={report}
            />
          ))}

        </div>

      </section>

      <BottomNav />

    </main>
  );
}