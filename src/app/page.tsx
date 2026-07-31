"use client";

import { useState } from "react";

import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
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

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">

      <Header />

      <SearchBar />

      <MapView
        reports={reports}
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
        showReportForm={showReportForm}
        setShowReportForm={setShowReportForm}
      />

      <BottomNav />

    </main>
  );
}