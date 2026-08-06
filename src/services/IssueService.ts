import {
  floodReports,
  FloodReport,
} from "@/data/floodReports";

class IssueService {
  private reports: FloodReport[] = [...floodReports];

  getReports(): FloodReport[] {
    return this.reports;
  }

  addReport(report: FloodReport): void {
    this.reports.push(report);
  }

  getReportById(id: number): FloodReport | undefined {
    return this.reports.find(
      (report) => report.id === id
    );
  }

  getReportsBySeverity(
    severity: "Low" | "Moderate" | "High"
  ): FloodReport[] {
    return this.reports.filter(
      (report) => report.severity === severity
    );
  }

  getTotalReports(): number {
    return this.reports.length;
  }
}

export const issueService =
  new IssueService();