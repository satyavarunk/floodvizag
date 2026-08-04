"use client";

import { useState } from "react";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import StatisticsCard from "@/components/StatisticsCard";
import FilterBar from "@/components/FilterBar";
import MapView from "@/components/MapView";
import BottomNav from "@/components/BottomNav";
import ReportButton from "@/components/ReportButton";

import {
  floodReports,
  FloodReport,
} from "@/data/floodReports";

export default function Home() {
  const [reports, setReports] =
    useState<FloodReport[]>(floodReports);

  const [reportMode, setReportMode] =
    useState(false);

  const [selectedCoordinates, setSelectedCoordinates] =
    useState<[number, number] | null>(null);

  const [showReportForm, setShowReportForm] =
    useState(false);

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  // ------------------------
  // Statistics
  // ------------------------

  const lowCount = reports.filter(
    (report) => report.severity === "Low"
  ).length;

  const moderateCount = reports.filter(
    (report) => report.severity === "Moderate"
  ).length;

  const highCount = reports.filter(
    (report) => report.severity === "High"
  ).length;

  // ------------------------
  // Filters
  // ------------------------

  const filteredReports =
    selectedFilter === "All"
      ? reports
      : reports.filter(
          (report) =>
            report.severity === selectedFilter
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
        setReports={setReports}
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