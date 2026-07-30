export interface FloodReport {
  id: number;
  title: string;
  location: string;
  coordinates: [number, number];
  severity: "Low" | "Moderate" | "High";
  color: string;
  updated: string;
  description?: string;
  waterLevel?: string;
  photo?: string;
}

export const floodReports: FloodReport[] = [
  {
    id: 1,
    title: "Water Logging",
    location: "MVP Colony",
    coordinates: [83.3185, 17.742],
    severity: "Moderate",
    color: "#f59e0b",
    updated: "10 mins ago",
  },
  {
    id: 2,
    title: "Road Blocked",
    location: "NAD Junction",
    coordinates: [83.2475, 17.7415],
    severity: "High",
    color: "#ef4444",
    updated: "5 mins ago",
  },
  {
    id: 3,
    title: "Road Clear",
    location: "RK Beach",
    coordinates: [83.3228, 17.7148],
    severity: "Low",
    color: "#22c55e",
    updated: "20 mins ago",
  },
];