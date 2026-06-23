"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import classroomImg from "@/public/Physical.jpg";
import zoomImg from "@/public/ZoomClass.jpg";
import servicesHeroImg from "@/public/servicesHero.png";
import {
    Users,
    Video,
    MessageCircle,
    BarChart3,
    CheckSquare,
    UserCheck,
    BookOpen,
    Award,
    ArrowRight,
    Calculator,
    LineChart,
    Target,
    Sparkles,
    PlayCircle,
    ClipboardCheck,
} from "lucide-react";

//const classroomImg = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80";
//const zoomImg = "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1400&q=80";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6 },
};

export default function ServicesContent() {
    return (
        <main>
            <ServicesHero />
            <LearningModes />
            <ProgramsGrid />
        </main>
    );
}

function ServicesHero() {
    return (
        <section className="relative flex h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] items-center bg-primary-deep text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={servicesHeroImg}
                    alt="Mathematics Services Hero"
                    fill
                    className="object-cover opacity-50 mix-blend-luminosity"
                    priority
                />
            </div>
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:48px_48px]" />
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold/10 blur-[100px]" />

            <div className="container-page relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="text-xs uppercase tracking-[0.22em] text-gold font-bold">Services</div>
                    <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] text-white">
                        Mathematics programs designed around real{" "}
                        <span className="italic text-gold">exam success</span>.
                    </h1>
                    <p className="mt-8 max-w-2xl text-base md:text-lg lg:text-xl text-white/75 leading-relaxed">
                        Classroom programs in Colombo and live Zoom classes worldwide — built for serious learners.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function LearningModes() {
    return (
        <section className="py-24 lg:py-32 bg-background">
            <div className="container-page">
                <div className="grid gap-10 lg:grid-cols-2">
                    <ModeCard
                        img={classroomImg}
                        tag="Physical Classroom"
                        title="In-person classes in Colombo"
                        items={[
                            { Icon: Users, text: "Small group classes (max 25 students)" },
                            { Icon: BookOpen, text: "Intensive revision classes" },
                            { Icon: Award, text: "Examination preparation series" },
                            { Icon: UserCheck, text: "One-on-one attention sessions" },
                        ]}
                    />
                    <ModeCard
                        img={zoomImg}
                        tag="Online Zoom"
                        tagColor="bg-sky-500"
                        title="Live online mathematics programs"
                        items={[
                            { Icon: Video, text: "Live interactive Zoom teaching" },
                            { Icon: MessageCircle, text: "Real-time Q&A and homework help" },
                            { Icon: BarChart3, text: "Progress tracking & weekly tests" },
                            { Icon: CheckSquare, text: "Virtual assessments & mentoring" },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function ModeCard({
    img,
    tag,
    tagColor = "bg-gold",
    title,
    items,
}: {
    img: string | StaticImageData;
    tag: string;
    tagColor?: string;
    title: string;
    items: { Icon: any; text: string }[];
}) {
    return (
        <motion.div
            {...fadeUp}
            className="group rounded-3xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-2xl transition-all duration-500"
        >
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                    <span className={`inline-flex items-center rounded-full ${tagColor} px-4 py-1.5 text-[10px] uppercase tracking-widest font-bold text-white shadow-lg`}>
                        {tag}
                    </span>
                </div>
            </div>
            <div className="p-10">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
                <ul className="mt-8 space-y-5">
                    {items.map(({ Icon, text }) => (
                        <li key={text} className="flex items-center gap-4 text-sm md:text-base text-muted-foreground">
                            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                <Icon className="h-5 w-5" />
                            </div>
                            {text}
                        </li>
                    ))}
                </ul>
                <div className="mt-10 pt-8 border-t border-border">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-deep transition-colors group/link">
                        Inquire about this program
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

function ProgramsGrid() {
    const subjects = [
        { Icon: Calculator, title: "O/L Mathematics", desc: "Strategic preparation and advanced techniques for top O/L results." },
        { Icon: BookOpen, title: "Grades 6–9 Mathematics", desc: "Building strong foundations through a structured and simplified approach." },
        { Icon: PlayCircle, title: "YouTube Educational Videos", desc: "Access our channel for simple, short videos that make complex topics easy." },
        { Icon: Users, title: "Personal Classes", desc: "One-on-one sessions tailored to your individual learning speed and style." },
        { Icon: Video, title: "Live Zoom Classes", desc: "Interactive online classrooms with real-time teacher engagement." },
        { Icon: ClipboardCheck, title: "Question Clarification", desc: "Dedicated support sessions to clarify doubts and master difficult questions." },
    ];

    return (
        <section className="py-24 lg:py-32 bg-primary-soft/30 border-y border-border">
            <div className="container-page">
                <div className="max-w-2xl">
                    <div className="text-xs uppercase tracking-[0.22em] text-primary font-bold">Programs</div>
                    <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold">Comprehensive subjects for every level.</h2>
                </div>
                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {subjects.map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                            className="group rounded-2xl border border-border bg-card p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white mb-6">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-display text-xl font-bold text-foreground">{title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
