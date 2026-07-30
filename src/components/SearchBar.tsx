export default function SearchBar() {
  return (
    <section className="bg-slate-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="🔍 Search locality, road or landmark..."
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>
    </section>
  );
}