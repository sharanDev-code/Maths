import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Raj Mathematics Institute",
  description: "Premier mathematics institution. Grade 6 to O/L Mathematics with experienced teachers, classroom and live Zoom programs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raj Mathematics Institute",
    description: "Excellence in Mathematics Education — classroom & live Zoom programs.",
    url: "/",
  }
};

export default function Page() {
  return <HomePage />;
}
