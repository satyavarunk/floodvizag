"use client";

import ReportForm from "./ReportForm";

import { FloodReport } from "@/data/floodReports";

interface ReportButtonProps {
  reports: FloodReport[];
addReport: (report: FloodReport) => void;

  reportMode: boolean;
  setReportMode: React.Dispatch<React.SetStateAction<boolean>>;

  selectedCoordinates: [number, number] | null;
  setSelectedCoordinates: React.Dispatch<
  React.SetStateAction<[number, number] | null>
>;

  showReportForm: boolean;
  setShowReportForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReportButton({
  reports,
  addReport,
  reportMode,
  setReportMode,
  selectedCoordinates,
  setSelectedCoordinates,
  showReportForm,
  setShowReportForm,
}: ReportButtonProps) {

  return (
    <>

      {!reportMode && !showReportForm && (

        <button
          onClick={() => setReportMode(true)}
          className="
            fixed
            bottom-24
            right-6
            z-50
            rounded-full
            bg-blue-600
            px-5
            py-3
            font-semibold
            text-white
            shadow-xl
            hover:bg-blue-700
          "
        >
          ➕ Report Flood
        </button>

      )}

      {reportMode && (

        <div
          className="
            fixed
            bottom-24
            left-1/2
            z-50
            -translate-x-1/2
            rounded-xl
            bg-white
            p-4
            shadow-xl
          "
        >
          <p className="font-semibold">
            📍 Tap anywhere on the map
          </p>

          <button
            className="mt-3 w-full rounded bg-red-500 py-2 text-white"
            onClick={() => setReportMode(false)}
          >
            Cancel
          </button>
        </div>

      )}

      <ReportForm
  isOpen={showReportForm}
  onClose={() => setShowReportForm(false)}

  reports={reports}
addReport={addReport}

  selectedCoordinates={selectedCoordinates}
  setSelectedCoordinates={setSelectedCoordinates}
/>

    </>
  );
}