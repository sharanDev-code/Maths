"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Trophy,
    Users,
    ClipboardCheck,
    Video,
    BookOpen,
    Award,
    Sparkles,
    ArrowRight,
    CheckCircle2,
    Quote,
    Calculator,
    LineChart,
    Target,
    PlayCircle,
} from "lucide-react";
import heroImg from "@/public/hero.png";
import zoomImg from "@/public/zoomImg.avif";
import { SectionHeading } from "@/components/site/SectionHeading";

// Utilizing high-quality Unsplash fallbacks for images to keep things operational
// const heroImg = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1920&q=80";
// const zoomImg = "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const fadeUp = {
    variants: fadeInUp,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <WhyChoose />
            <Stats />
            <Programs />
            <ZoomSection />
            <TestimonialsPreview />
            <FinalCTA />
        </>
    );
}

function Hero() {
    return (
        <section className="relative flex h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] items-center overflow-hidden text-white">
            <div className="absolute inset-0">
                <Image
                    src={heroImg}
                    alt=""
                    className="h-full w-full object-cover"
                    priority
                    fill
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary-deep/85 to-primary/70" />
            </div>

            <div className="container-page relative w-full">
                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
                        <Sparkles className="h-3.5 w-3.5" />
                        Trusted since 2004
                    </div>
                    <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white">
                        Raj{" "}
                        <span className="italic text-gold">Mathematics</span>{" "}
                        Institute
                    </h1>
                    <p className="mt-6 max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
                        Master mathematics with experienced educators. We help students achieve
                        outstanding examination results through structured classroom programs
                        and live Zoom online classes.
                    </p>
                    {/* <div className="mt-9 flex flex-wrap gap-3">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Enroll Now
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                        >
                            <Video className="h-4 w-4" />
                            Join Online Classes
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-white/85 hover:text-gold"
                        >
                            Contact Us
                        </Link>
                    </div> */}

                    <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
                        {[
                            ["15+", "Years"],
                            ["2,500+", "Students"],
                            ["96%", "Pass Rate"],
                        ].map(([n, l]) => (
                            <div key={l}>
                                <div className="font-display text-3xl md:text-4xl text-gold">{n}</div>
                                <div className="mt-1 text-xs uppercase tracking-widest text-white/55">{l}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function WhyChoose() {
    const items = [
        { Icon: GraduationCap, title: "Experienced Educators", desc: "Senior mathematics teachers with 15+ years of classroom and exam-board expertise." },
        { Icon: Trophy, title: "Proven Results", desc: "Consistent track record of A passes and distinctions across Grade 6 to O/L exams." },
        { Icon: Users, title: "Personalised Support", desc: "Small group sizes and one-on-one mentoring so no student is left behind." },
        { Icon: Video, title: "Physical & Online", desc: "Choose in-class learning in Colombo or live interactive Zoom classes from anywhere." },
        { Icon: BookOpen, title: "Structured Curriculum", desc: "Comprehensive programs aligned with the national syllabus and modern exam patterns." },
        { Icon: ClipboardCheck, title: "Continuous Assessment", desc: "Regular monitoring, weekly tests and detailed parent progress reports." },
    ];
    return (
        <section className="py-24 lg:py-32">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Why Raj"
                    title="Built around how students actually learn mathematics."
                    subtitle="We combine rigorous teaching with attentive mentoring — so every student grows in confidence as well as competence."
                />
                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {items.map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                            className="group relative rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
                            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Stats() {
    const stats = [
        { n: "15+", l: "Years of Teaching" },
        { n: "2,500+", l: "Students Taught" },
        { n: "96%", l: "Examination Pass Rate" },
        { n: "400+", l: "Active Students" },
        { n: "30+", l: "Countries Online" },
        { n: "180+", l: "A / Distinction Grades" },
    ];
    return (
        <section className="bg-primary-deep text-white py-20 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,_white_1px,_transparent_1px)] [background-size:32px_32px]" />
            <div className="container-page relative">
                <div className="grid gap-y-12 gap-x-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.l}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                        >
                            <div className="font-display text-4xl md:text-5xl font-semibold text-gold">{s.n}</div>
                            <div className="mt-2 text-xs uppercase tracking-[0.15em] text-white/65">{s.l}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Programs() {
    const programs = [
        { Icon: Calculator, title: "O/L Mathematics", desc: "Strategic preparation and advanced techniques for top O/L results." },
        { Icon: BookOpen, title: "Grades 6–9 Mathematics", desc: "Building strong foundations through a structured and simplified approach." },
        { Icon: PlayCircle, title: "YouTube Educational Videos", desc: "Access our channel for simple, short videos that make complex topics easy." },
        { Icon: Users, title: "Personal Classes", desc: "One-on-one sessions tailored to your individual learning speed and style." },
        { Icon: Video, title: "Live Zoom Classes", desc: "Interactive online classrooms with real-time teacher engagement." },
        { Icon: ClipboardCheck, title: "Question Clarification", desc: "Dedicated support sessions to clarify doubts and master difficult questions." },
    ];
    return (
        <section className="py-24 lg:py-32 bg-primary-soft/60">
            <div className="container-page">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <SectionHeading
                        eyebrow="Programs"
                        title="Mathematics programs for every stage."
                        subtitle="From building strong foundations to mastering advanced concepts — there's a structured path for every student."
                    />
                    <Link
                        href="/services"
                        className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep"
                    >
                        View all services <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {programs.map(({ Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                            className="group rounded-xl bg-card border border-border p-7 hover:border-primary transition-all hover:shadow-lg"
                        >
                            <div className="flex items-start justify-between">
                                <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1" />
                            </div>
                            <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{title}</h3>
                            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ZoomSection() {
    const features = [
        "Live Zoom classes with real-time Q&A",
        "Interactive digital whiteboard lessons",
        "Downloadable notes & worked solutions",
        "Weekly practice & online assessments",
        "Recorded sessions for revision",
        "Direct WhatsApp support from teachers",
    ];
    return (
        <section className="py-24 lg:py-32">
            <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
                <motion.div {...fadeUp}>
                    <SectionHeading
                        eyebrow="Online Zoom Classes"
                        title="Learn mathematics from anywhere in the world."
                        subtitle="Our live Zoom classroom replicates the energy and rigour of in-person teaching — with the convenience of joining from home."
                    />
                    <ul className="mt-8 space-y-3.5">
                        {features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm md:text-base text-foreground/85">
                                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-9 flex flex-wrap gap-3">
                        <Link href="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
                            <PlayCircle className="h-4 w-4" />
                            See Online Programs
                        </Link>
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
                            Join a free demo
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >
                    <div className="absolute -inset-6 bg-gradient-to-tr from-primary/10 via-gold/10 to-transparent rounded-3xl blur-2xl" />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                        <Image src={zoomImg} alt="Live online mathematics class" width={1400} height={1000} className="w-full h-auto aspect-video object-cover" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 rounded-xl bg-card border border-border shadow-xl p-4 max-w-[220px]">
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">Live now</div>
                        <div className="mt-1 font-display text-lg font-semibold text-foreground">O/L Revision</div>
                        <div className="text-xs text-muted-foreground">42 students online</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function TestimonialsPreview() {
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
            quote: "Sir explains every concept until it clicks. Mathematics finally makes sense to me.",
            author: "Dinith R.",
            role: "O/L Student",
        },
    ];
    return (
        <section className="py-24 lg:py-32 bg-primary-soft/40 border-y border-border">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Success Stories"
                    title="Students, parents, and results we're proud of."
                    align="center"
                />
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {items.map((t, i) => (
                        <motion.figure
                            key={t.author}
                            {...fadeUp}
                            transition={{ ...fadeUp.transition, delay: i * 0.07 }}
                            className="rounded-2xl bg-card border border-border p-8 shadow-sm"
                        >
                            <Quote className="h-7 w-7 text-gold" />
                            <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                                "{t.quote}"
                            </blockquote>
                            <figcaption className="mt-6 pt-5 border-t border-border">
                                <div className="font-semibold text-foreground">{t.author}</div>
                                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-0.5">{t.role}</div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-deep">
                        Read all success stories <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section className="py-24 lg:py-32">
            <div className="container-page">
                <div className="relative overflow-hidden rounded-3xl bg-primary-deep text-white p-10 md:p-16 lg:p-20">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,_var(--color-gold)_0,_transparent_50%)]" />
                    <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
                        <div>
                            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
                                Start your mathematics{" "}
                                <span className="italic text-gold">success journey</span> today.
                            </h2>
                            <p className="mt-5 text-white/75 max-w-xl text-base md:text-lg">
                                Whether you're aiming for top O/L grades, Grade 6 to 9 mastery, or just want
                                mathematics to finally click — we'll meet you where you are.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 text-sm font-semibold text-gold-foreground hover:opacity-95">
                                Enroll Now <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link href="/services" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-4 text-sm font-semibold text-white hover:bg-white/10">
                                <Video className="h-4 w-4" /> Join Online Classes
                            </Link>
                            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-sm font-semibold text-white/80 hover:text-gold">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
