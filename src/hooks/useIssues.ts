"use client";

import { useState } from "react";
import { FloodReport } from "@/data/floodReports";
import { issueService } from "@/services/IssueService";

export default function useIssues() {
  const [reports, setReports] = useState<FloodReport[]>(
    issueService.getReports()
  );

  function addReport(report: FloodReport) {
    issueService.addReport(report);

    setReports(issueService.getReports());
  }

  return {
    reports,
    addReport,
  };
}