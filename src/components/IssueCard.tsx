import { FloodReport } from "@/data/floodReports";

interface IssueCardProps {
  report: FloodReport;
}

export default function IssueCard({
  report,
}: IssueCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-lg font-bold text-slate-800">
          {report.title}
        </h2>

        <span
          className="rounded-full px-3 py-1 text-sm font-semibold text-white"
          style={{
            backgroundColor: report.color,
          }}
        >
          {report.severity}
        </span>

      </div>

      <div className="space-y-2 text-sm text-slate-700">

        <p>
          📍 <strong>Location:</strong> {report.location}
        </p>

        <p>
          💧 <strong>Water Level:</strong> {report.waterLevel}
        </p>

        <p>
          🕒 <strong>Updated:</strong> {report.updated}
        </p>

        <p>
          📝 {report.description}
        </p>

      </div>

      <div className="mt-5 flex items-center justify-between border-t pt-4">

        <span className="text-sm text-slate-500">
          👍 0 Confirmations
        </span>

        <button
          className="
            rounded-lg
            bg-blue-600
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          View on Map
        </button>

      </div>

    </article>
  );
}