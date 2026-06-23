import { Metadata } from "next";
import { SuccessStoriesClient } from "./SuccessStoriesClient";

export const metadata: Metadata = {
    title: "Success Stories | Raj Mathematics Institute",
};

export default function SuccessStoriesPage() {
    return <SuccessStoriesClient />;
}
