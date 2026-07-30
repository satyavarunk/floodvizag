export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">🌊 FloodVizag</h1>
          <p className="text-sm text-blue-100 mt-1">
            Community Flood Intelligence for Visakhapatnam
          </p>
        </div>

        <button
          className="rounded-lg border border-blue-300 px-3 py-1 text-sm hover:bg-blue-600 transition"
          type="button"
        >
          English | తెలుగు
        </button>
      </div>
    </header>
  );
}