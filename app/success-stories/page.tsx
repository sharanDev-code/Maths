import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Quote } from "lucide-react";
import { ResultsGraph } from "@/components/ResultsGraph";
import Image from "next/image";
import successImg from "@/public/success stories.png";

export const metadata: Metadata = {
    title: "Success Stories | Raj Mathematics Institute",
};

export default function SuccessStoriesPage() {
    const items = [
        {
            quote: "My son went from a C to an A in O/L Mathematics. The teaching is patient, structured and never rushed.",
            author: "Mrs. Perera",
            role: "Parent",
        },
        {
            quote: "The Zoom classes feel exactly like the classroom. I never felt I was missing out, even from abroad.",
            author: "Senuri F.",
            role: "O/L Student, Dubai",
        },
        {
            quote: "Sir explains every concept until it clicks. Mathematics finally makes sense to me after struggling for years.",
            author: "Dinith R.",
            role: "O/L Student",
        },
        {
            quote: "Achieving an Island Rank in Mathematics felt impossible until I joined the revision prep seminars here.",
            author: "Kavindu M.",
            role: "O/L Student, Colombo",
        },
        {
            quote: "The constant assessments really show exactly where you stand. There's no guessing involved.",
            author: "Dr. Samaranayake",
            role: "Parent",
        },
        {
            quote: "I highly recommend the Foundation Course. It cleared all my doubts from previous grades.",
            author: "Nethmi L.",
            role: "O/L Student",
        }
    ];

    return (
        <main className="bg-background min-h-screen ">
            {/* Hero Section */}
            <section className="relative flex h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] items-center overflow-hidden text-white">
                <div className="absolute inset-0">
                    <Image
                        src={successImg}
                        alt="Success Stories"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 " />
                </div>

                <div className="container-page relative">
                    <div className="mx-auto max-w-4xl bg-black/40 backdrop-blur-md p-10 md:p-16 lg:p-20 rounded-3xl border border-white/10 shadow-2xl">
                        <SectionHeading
                            eyebrow="Testimonials"
                            title="Journeys of Academic Triumph"
                            subtitle="Read the transformation stories of our students who redefined their mathematical boundaries."
                            align="center"
                            className="max-w-3xl [&_h2]:text-white [&_p]:text-white/90 [&_span]:text-gold"
                        />
                    </div>
                </div>
            </section>

            <div className="container-page py-20 lg:py-24">

                <ResultsGraph />

                <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((t, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-card border border-border shadow-sm">
                            <Quote className="h-8 w-8 text-gold opacity-80 mb-6" />
                            <blockquote className="text-lg leading-relaxed text-foreground">
                                "{t.quote}"
                            </blockquote>
                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="font-semibold text-foreground">{t.author}</div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
