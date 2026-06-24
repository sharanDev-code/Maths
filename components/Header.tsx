"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/success-stories", label: "Success Stories" },
    { to: "/contact", label: "Contact" },
] as const;

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
            <div className="container-page flex h-16 items-center justify-between md:h-20">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-white shadow-md transition-transform group-hover:scale-105">
                        <Image
                            src="/Logo.jpeg"
                            alt="Raj Mathematics Logo"
                            fill
                            className="object-cover"
                            sizes="48px"
                        />
                    </span>
                    <span className="flex flex-col leading-tight">
                        <span className="font-display text-lg font-semibold text-foreground">
                            Raj Mathematics
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            Institute
                        </span>
                    </span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1">
                    {NAV.map((item) => {
                        const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                        return (
                            <Link
                                key={item.to}
                                href={item.to}
                                className={cn(
                                    "px-3.5 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary hover:bg-primary-soft",
                                    isActive ? "text-primary bg-primary-soft" : "text-foreground/75"
                                )}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <Link
                        href="/contact"
                        className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-deep hover:shadow-md"
                    >
                        Enroll Now
                    </Link>
                </div>

                <button
                    aria-label="Menu"
                    onClick={() => setOpen((v) => !v)}
                    className="lg:hidden grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-primary-soft"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden border-t border-border bg-background overflow-hidden"
                    >
                        <div className="container-page py-4 flex flex-col gap-1">
                            {NAV.map((item) => {
                                const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                                return (
                                    <Link
                                        key={item.to}
                                        href={item.to}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "px-3 py-3 text-base font-medium rounded-md hover:bg-primary-soft",
                                            isActive ? "text-primary bg-primary-soft" : "text-foreground"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                            <Link
                                href="/contact"
                                onClick={() => setOpen(false)}
                                className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
