import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

const tamilMonths = [
  "தை", "மாசி", "பங்குனி", "சித்திரை", "வைகாசி", "ஆனி", 
  "ஆடி", "ஆவணி", "புரட்டாசி", "ஐப்பசி", "கார்த்திகை", "மார்கழி"
];

const tamilDays = [
  "ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"
];

const getTamilDate = () => {
  const today = new Date();
  const day = tamilDays[today.getDay()];
  const month = tamilMonths[today.getMonth() % 12];
  const date = today.getDate();
  const year = today.getFullYear() + 5122; // Tamil year approx calculation

  return `${day}, ${date} ${month} ${year}`;
};

export default function Home() {
  const [tamilDate, setTamilDate] = useState("");

  useEffect(() => {
    setTamilDate(getTamilDate());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-6 text-center shadow-lg rounded-2xl bg-white">
        <CardContent>
          <h1 className="text-2xl font-bold text-gray-800">தமிழ் நாட்காட்டி</h1>
          <p className="text-lg mt-2 text-gray-600">{tamilDate}</p>
        </CardContent>
      </Card>
    </div>
  );
}
