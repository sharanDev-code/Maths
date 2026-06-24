"use client";

import { SectionHeading } from "@/components/site/SectionHeading";
import { Calculator, GraduationCap, Clock, Briefcase, Target, Eye } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const facultyDetails = [
    {
        name: "Dr. Anura Perera",
        role: "Director & Lead Educator",
        qualification: "Ph.D. in Pure Mathematics, University of Cambridge",
        occupation: "Former Senior Lecturer at University of Colombo",
        description: "With over 25 years of educational experience, Dr. Perera has transformed how mathematics is taught, making complex theories accessible to thousands of students.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Ms. Sarah Fernando",
        role: "Senior O/L Mathematics Instructor",
        qualification: "M.Sc. in Applied Mathematics",
        occupation: "O/L Curriculum Developer",
        description: "Specializing in Applied Mathematics and Mechanics, Ms. Fernando utilizes interactive methods to build strong problem-solving skills in her students.",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
        name: "Mr. Rajiv Shan",
        role: "O/L Foundation Coordinator",
        qualification: "B.Sc. (Hons) in Mathematics",
        occupation: "Educational Consultant & Author",
        description: "Mr. Rajiv leads the foundation programs, establishing core mathematical principles and analytical skills critical for higher-level education.",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    }
];

export function AboutClient() {
    return (
        <main className="py-20 lg:py-20">
            <div className="container-page">
                {/* Our Story Section */}
                <motion.div {...fadeUp}>
                    <SectionHeading
                        eyebrow="Our Story"
                        title="Shaping the Future of Mathematics Education"
                        subtitle="Since 2008, Raj Mathematics Institute has been a beacon of excellence, empowering thousands of students to exceed their expectations and achieve academic brilliance in Grade 6 to O/L Mathematics."
                        align="center"
                    />
                </motion.div>

                <div className="mt-10 grid md:grid-cols-3 gap-8">
                    {[
                        { icon: GraduationCap, title: "Expert Faculty", desc: "Led by visionary mathematics educators with decades of combined pedagogical experience.", bg: "bg-primary-soft text-primary", iconBg: "bg-primary-soft text-primary" },
                        { icon: Clock, title: "15+ Years Legacy", desc: "A proud track record of producing top-island ranks and remarkable academic transformations.", bg: "bg-gold/20 text-gold", iconBg: "bg-gold/20 text-gold" },
                        { icon: GraduationCap, title: "Holistic Approach", desc: "Beyond rote learning—we instill an intuitive understanding of complex mathematical frameworks.", bg: "bg-primary-deep/10 text-primary-deep", iconBg: "bg-primary-deep/10 text-primary-deep" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-border bg-card text-center"
                        >
                            <div className={`grid h-14 w-14 place-items-center rounded-xl mx-auto ${item.iconBg}`}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                            <p className="mt-3 text-muted-foreground text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Vision & Mission Section */}
                <div className="mt-32 grid md:grid-cols-2 gap-10">
                    <motion.div
                        {...fadeUp}
                        className="relative overflow-hidden rounded-3xl bg-primary-deep text-white p-10 md:p-14 border border-primary/20"
                    >
                        <div className="absolute -top-10 -right-10 p-8 opacity-[0.07]">
                            <Eye className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-6 backdrop-blur">
                                <Eye className="w-8 h-8 text-gold" />
                            </div>
                            <h2 className="font-display text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                To be the premier mathematics educational institute globally, redefining how students comprehend and apply complex mathematics, and inspiring a lifelong passion for analytical thinking.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                        className="relative overflow-hidden rounded-3xl bg-card border border-border p-10 md:p-14 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] text-primary">
                            <Target className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl mb-6">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="font-display text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                To empower students with rigorous, structured, and insightful educational programs that not only guarantee exceptional examination results but also build enduring profound conceptual clarity.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Leadership & Faculty Section */}
                <div className="mt-32">
                    <motion.div {...fadeUp}>
                        <SectionHeading
                            eyebrow="Leadership & Faculty"
                            title="Meet the Visionaries Behind Raj"
                            subtitle="Our renowned educators bring decades of academic excellence, university-level lecturing experience, and a passion for mentoring the next generation."
                            align="center"
                        />
                    </motion.div>

                    <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {facultyDetails.map((faculty, i) => (
                            <motion.div
                                key={faculty.name}
                                {...fadeUp}
                                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                                className="group rounded-3xl border border-border bg-card overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 hover:border-primary/20"
                            >
                                <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                                    <Image
                                        src={faculty.imageUrl}
                                        alt={faculty.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                                <div className="p-8">
                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft/50 px-3 py-1 text-xs font-semibold text-primary mb-4">
                                        {faculty.role}
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-foreground">
                                        {faculty.name}
                                    </h3>

                                    <div className="mt-6 space-y-3">
                                        <div className="flex items-start gap-3 text-sm text-foreground/80">
                                            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/10 text-gold">
                                                <GraduationCap className="h-3.5 w-3.5" />
                                            </div>
                                            <span className="mt-1 font-medium">{faculty.qualification}</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm text-foreground/80">
                                            <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                                                <Briefcase className="h-3.5 w-3.5" />
                                            </div>
                                            <span className="mt-1 font-medium">{faculty.occupation}</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-border">
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {faculty.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
