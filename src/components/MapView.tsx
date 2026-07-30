"use client";

import { useEffect, useRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { FloodReport } from "@/data/floodReports";

interface MapViewProps {
  reports: FloodReport[];
}

export default function MapView({ reports }: MapViewProps) {
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
        <div style="width:240px;font-family:Arial,sans-serif;">

          <div style="
            background:${report.color};
            color:white;
            text-align:center;
            padding:10px;
            font-weight:bold;
            border-radius:8px 8px 0 0;
            margin:-10px -10px 12px -10px;
          ">
            🚨 ${report.severity}
          </div>

          <div style="padding:0 6px;">

            <h3 style="margin:0 0 10px;font-size:18px;">
              ${report.title}
            </h3>

            <p>📍 <strong>${report.location}</strong></p>

            <p>🕒 ${report.updated}</p>

            ${
              report.waterLevel
                ? `<p>💧 ${report.waterLevel}</p>`
                : ""
            }

            ${
              report.description
                ? `<p>${report.description}</p>`
                : ""
            }

          </div>
        </div>
      `);

      new maplibregl.Marker({
        color: report.color,
      })
        .setLngLat(report.coordinates)
        .setPopup(popup)
        .addTo(map);
    });

    return () => map.remove();
  }, [reports]);

  return (
    <section className="flex-1 px-4 pb-4">
      <div className="mx-auto h-[60vh] max-w-7xl overflow-hidden rounded-2xl border border-slate-300 shadow">
        <div ref={mapContainer} className="h-full w-full" />
      </div>
    </section>
  );
}