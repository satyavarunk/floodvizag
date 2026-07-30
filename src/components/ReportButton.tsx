"use client";

import { useState } from "react";

import ReportForm from "./ReportForm";

import { FloodReport } from "@/data/floodReports";

interface ReportButtonProps {
  reports: FloodReport[];
  setReports: React.Dispatch<React.SetStateAction<FloodReport[]>>;
}

export default function ReportButton({
  reports,
  setReports,
}: ReportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
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

      <ReportForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        reports={reports}
        setReports={setReports}
      />
    </>
  );
}