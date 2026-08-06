"use client";

import Header from "@/components/Header";
import MapView from "@/components/MapView";
import BottomNav from "@/components/BottomNav";

import {
  floodReports,
  FloodReport,
} from "@/data/floodReports";

export default function MapPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">

      <Header />

      <div className="flex-1">
        <MapView
          reports={floodReports as FloodReport[]}
          reportMode={false}
          setReportMode={() => {}}
          selectedCoordinates={null}
          setSelectedCoordinates={() => {}}
          showReportForm={false}
          setShowReportForm={() => {}}
        />
      </div>

      <BottomNav />

    </main>
  );
}