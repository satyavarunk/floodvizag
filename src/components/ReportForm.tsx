"use client";

import { useState } from "react";
import { FloodReport } from "@/data/floodReports";

interface ReportFormProps {
  isOpen: boolean;
  onClose: () => void;

  reports: FloodReport[];
  setReports: React.Dispatch<React.SetStateAction<FloodReport[]>>;

  selectedCoordinates: [number, number] | null;

  setSelectedCoordinates: React.Dispatch<
    React.SetStateAction<[number, number] | null>
  >;
}

export default function ReportForm({
  isOpen,
  onClose,
  reports,
  setReports,
  selectedCoordinates,
  setSelectedCoordinates,
}: ReportFormProps) {
  const [location, setLocation] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [waterLevel, setWaterLevel] = useState("Ankle");
  const [description, setDescription] = useState("");

  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  if (!isOpen) return null;

  function closeForm() {
    setSelectedCoordinates(null);

    setLocation("");
    setDescription("");
    setSeverity("Low");
    setWaterLevel("Ankle");

    setPhoto(null);
    setPreview(null);

    onClose();
  }

  function handlePhotoChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setPhoto(file);

    setPreview(URL.createObjectURL(file));
  }

  function removePhoto() {
    setPhoto(null);
    setPreview(null);
  }

  function handleSubmit() {
    if (!selectedCoordinates) return;

    const color =
      severity === "High"
        ? "#ef4444"
        : severity === "Moderate"
        ? "#f59e0b"
        : "#22c55e";

    const newReport: FloodReport = {
      id: Date.now(),
      title: "Community Report",
      location,
      coordinates: selectedCoordinates,
      severity: severity as
        | "Low"
        | "Moderate"
        | "High",
      color,
      updated: "Just now",
      waterLevel,
      description,
    };

    setReports([...reports, newReport]);

    closeForm();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-6 shadow-xl">

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            🌊 Report Flood
          </h2>

          <button
            onClick={closeForm}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-700">
          📍 Location Selected on Map
        </div>

        <div className="space-y-4">

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Area / Landmark"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full rounded-lg border p-3"
          />

          {preview && (
            <div className="space-y-2">

              <img
                src={preview}
                alt="Preview"
                className="max-h-64 w-full rounded-lg border object-cover"
              />

              <button
                onClick={removePhoto}
                className="w-full rounded-lg bg-red-500 py-2 text-white"
              >
                Remove Photo
              </button>

            </div>
          )}

          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            <option>Low</option>
            <option>Moderate</option>
            <option>High</option>
          </select>

          <select
            value={waterLevel}
            onChange={(e) => setWaterLevel(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            <option>Ankle</option>
            <option>Knee</option>
            <option>Waist</option>
            <option>Above Vehicle</option>
          </select>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the situation..."
            className="w-full rounded-lg border p-3"
          />

          <button
            onClick={handleSubmit}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Submit Report
          </button>

        </div>

      </div>

    </div>
  );
}