interface FilterBarProps {
  selected: string;
  onSelect: (value: string) => void;
}

export default function FilterBar({
  selected,
  onSelect,
}: FilterBarProps) {
  const filters = [
    "All",
    "Low",
    "Moderate",
    "High",
  ];

  return (
    <section className="px-4 pb-3">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">

        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onSelect(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition

              ${
                selected === filter
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
              }

            `}
          >
            {filter === "Low" && "🟢 "}
            {filter === "Moderate" && "🟠 "}
            {filter === "High" && "🔴 "}

            {filter}
          </button>
        ))}

      </div>
    </section>
  );
}