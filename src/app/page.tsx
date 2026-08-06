"use client";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import StatisticsCard from "@/components/StatisticsCard";
import FilterBar from "@/components/FilterBar";
import MapView from "@/components/MapView";
import BottomNav from "@/components/BottomNav";
import ReportButton from "@/components/ReportButton";

import useIssues from "@/hooks/useIssues";

import { useState } from "react";

export default function Home() {
  const { reports, addReport } = useIssues();

  const [reportMode, setReportMode] = useState(false);

  const [selectedCoordinates, setSelectedCoordinates] =
    useState<[number, number] | null>(null);

  const [showReportForm, setShowReportForm] =
    useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const lowCount = reports.filter(
    (r) => r.severity === "Low"
  ).length;

  const moderateCount = reports.filter(
    (r) => r.severity === "Moderate"
  ).length;

  const highCount = reports.filter(
    (r) => r.severity === "High"
  ).length;

  const filteredReports =
    selectedFilter === "All"
      ? reports
      : reports.filter(
          (r) => r.severity === selectedFilter
        );

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <Header />

      <SearchBar />

      <StatisticsCard
        low={lowCount}
        moderate={moderateCount}
        high={highCount}
        total={reports.length}
      />

      <FilterBar
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

      <MapView
        reports={filteredReports}
        reportMode={reportMode}
        setReportMode={setReportMode}
        selectedCoordinates={selectedCoordinates}
        setSelectedCoordinates={setSelectedCoordinates}
        showReportForm={showReportForm}
        setShowReportForm={setShowReportForm}
      />

      <ReportButton
        reports={reports}
        addReport={addReport}
        reportMode={reportMode}
        setReportMode={setReportMode}
        selectedCoordinates={selectedCoordinates}
        setSelectedCoordinates={setSelectedCoordinates}
        showReportForm={showReportForm}
        setShowReportForm={setShowReportForm}
      />

      <BottomNav />
    </main>
  );
}