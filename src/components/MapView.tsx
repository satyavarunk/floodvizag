"use client";

import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { FloodReport } from "@/data/floodReports";

interface MapViewProps {
  reports: FloodReport[];

  reportMode: boolean;
  setReportMode: React.Dispatch<React.SetStateAction<boolean>>;

  selectedCoordinates: [number, number] | null;
  setSelectedCoordinates: React.Dispatch<
    React.SetStateAction<[number, number] | null>
  >;

  showReportForm: boolean;
  setShowReportForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MapView({
  reports,
  reportMode,
  setReportMode,
  selectedCoordinates,
  setSelectedCoordinates,
  setShowReportForm,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [83.2185, 17.6868],
      zoom: 11,
    });

    map.addControl(
      new maplibregl.NavigationControl(),
      "top-right"
    );

    reports.forEach((report) => {
      const popup = new maplibregl.Popup({ offset: 20 }).setHTML(`
        <div style="padding:10px;font-family:Arial;">
          <strong>${report.title}</strong><br/>
          📍 ${report.location}<br/>
          🚨 ${report.severity}<br/>
          🕒 ${report.updated}
        </div>
      `);

      new maplibregl.Marker({
        color: report.color,
      })
        .setLngLat(report.coordinates)
        .setPopup(popup)
        .addTo(map);
    });

    if (selectedCoordinates) {
      new maplibregl.Marker({
        color: "#2563eb",
      })
        .setLngLat(selectedCoordinates)
        .addTo(map);
    }

    map.on("click", (e) => {
      if (!reportMode) return;

      setSelectedCoordinates([
        e.lngLat.lng,
        e.lngLat.lat,
      ]);

      setReportMode(false);
      setShowReportForm(true);
    });

    return () => {
      map.remove();
    };
  }, [
    reports,
    reportMode,
    selectedCoordinates,
    setReportMode,
    setSelectedCoordinates,
    setShowReportForm,
  ]);

  return (
    <section className="flex-1 px-4 pb-4">
      <div className="mx-auto h-[60vh] max-w-7xl overflow-hidden rounded-2xl border border-slate-300 shadow">
        <div
          ref={mapContainer}
          className="h-full w-full"
        />
      </div>
    </section>
  );
}