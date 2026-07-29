import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import MapView from "@/components/MapView";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <SearchBar />
      <MapView />
      <BottomNav />
    </main>
  );
}