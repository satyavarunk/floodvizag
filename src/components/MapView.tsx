"use client";

import { useEffect, useRef } from "react";
import { Map, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [83.2185, 17.6868], // Visakhapatnam
      zoom: 11,
    });

    map.addControl(new NavigationControl(), "top-right");

    return () => map.remove();
  }, []);

  return (
    <section className="flex-1 px-4 pb-4">
      <div className="mx-auto h-[500px] max-w-7xl overflow-hidden rounded-2xl border border-slate-300 shadow">
        <div ref={mapContainer} className="h-full w-full" />
      </div>
    </section>
  );
}