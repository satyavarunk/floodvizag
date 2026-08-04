interface StatisticsCardProps {
  low: number;
  moderate: number;
  high: number;
  total: number;
}

export default function StatisticsCard({
  low,
  moderate,
  high,
  total,
}: StatisticsCardProps) {
  return (
    <section className="px-4 py-3">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-5 shadow border border-slate-200">

        <h2 className="mb-4 text-xl font-bold text-slate-800">
          🌊 Live Flood Status
        </h2>

        <div className="space-y-2 text-lg">

          <div className="flex justify-between">
            <span>🟢 Low</span>
            <span className="font-semibold">{low}</span>
          </div>

          <div className="flex justify-between">
            <span>🟠 Moderate</span>
            <span className="font-semibold">{moderate}</span>
          </div>

          <div className="flex justify-between">
            <span>🔴 High</span>
            <span className="font-semibold">{high}</span>
          </div>

        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-lg font-bold">
          <span>📍 Total Reports</span>
          <span>{total}</span>
        </div>

      </div>
    </section>
  );
}