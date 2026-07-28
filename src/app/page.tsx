export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white p-5 shadow">
        <h1 className="text-3xl font-bold">🌊 FloodVizag</h1>
        <p className="text-sm opacity-90">
          Making Visakhapatnam Flood-Safe Together
        </p>
      </header>

      {/* Search */}
      <section className="p-4">
        <input
          type="text"
          placeholder="Search locality, road or landmark..."
          className="w-full rounded-xl border border-slate-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Map Placeholder */}
      <section className="flex-1 px-4">
        <div className="h-[450px] rounded-2xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center text-slate-500 text-lg">
          🗺️ Interactive Map Coming Soon
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t p-4 flex justify-around text-sm font-medium shadow-inner">
        <button>🏠 Home</button>
        <button>➕ Report</button>
        <button>📊 Insights</button>
        <button>⚙️ Settings</button>
      </nav>
    </main>
  );
}