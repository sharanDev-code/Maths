"use client";

import { motion } from "framer-motion";

const data = [
    { year: "2019", percentage: 50 },
    { year: "2020", percentage: 60 },
    { year: "2021", percentage: 65 },
    { year: "2022", percentage: 90 },
    { year: "2023", percentage: 95 },
    { year: "2024", percentage: 98 },
];

export function ResultsGraph() {
    // SVG Viewport dimensions
    const width = 1000;
    const height = 400;
    const padding = 60;

    // Calculate coordinates
    const minPercent = 50;
    const maxPercent = 100;
    const points = data.map((d, i) => {
        const x = padding + (i * (width - 2 * padding)) / (data.length - 1);
        const y = height - padding - ((d.percentage - minPercent) / (maxPercent - minPercent)) * (height - 2 * padding);
        return { x, y, ...d };
    });

    // Construct SVG path string (Linear)
    const linePath = points.reduce((acc, point, i) => {
        return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`;
    }, "");

    // Construct Area path string (for gradient fill)
    const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

    return (
        <div className="w-full max-w-5xl mx-auto mt-16 mb-12 p-3 sm:p-12 bg-card border border-border shadow-2xl rounded-[2.5rem] overflow-hidden relative group">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-gold/10" />

            <div className="text-center mb-12 relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
                    O/L Mathematics Excellence
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                    Consistent growth reflecting our commitment to student success year after year.
                </p>
            </div>

            <div className="relative w-full aspect-[2/1] min-h-[220px] sm:aspect-[2.5/1] sm:min-h-[300px]">
                {/* Y-axis Labels & Grid Lines */}
                <div className="absolute inset-0 pointer-events-none">
                    {[100, 90, 80, 70, 60, 50].map((val) => {
                        const yPos = height - padding - ((val - minPercent) / (maxPercent - minPercent)) * (height - 2 * padding);
                        return (
                            <div
                                key={val}
                                className="absolute w-full flex items-center gap-2 sm:gap-4 -translate-y-1/2 text-[10px] sm:text-xs font-semibold text-muted-foreground/60"
                                style={{ top: `${(yPos / height) * 100}%` }}
                            >
                                <span className="w-8 sm:w-10 text-right">{val}%</span>
                                <div className="flex-1 border-t border-dashed border-border/50" />
                            </div>
                        );
                    })}
                </div>

                {/* SVG Graph Drawing */}
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="absolute inset-0 w-full h-full drop-shadow-2xl overflow-visible"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="var(--gold)" />
                        </linearGradient>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* Gradient Area Fill */}
                    <motion.path
                        d={areaPath}
                        fill="url(#areaGradient)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    {/* Main Path Drawing Effect */}
                    <motion.path
                        d={linePath}
                        fill="none"
                        stroke="url(#gradientLine)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Data Points */}
                    {points.map((point, i) => (
                        <g key={i} className="cursor-pointer group/node">
                            <motion.circle
                                cx={point.x}
                                cy={point.y}
                                r="8"
                                className="fill-card stroke-gold transition-all duration-300"
                                strokeWidth="3"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.5 + (i * 0.1), type: "spring", stiffness: 200 }}
                            />
                            {/* Tooltip on hover (always visible on small screens or hover on large) */}
                            <foreignObject x={point.x - 30} y={point.y - 70} width="60" height="40" className="overflow-visible pointer-events-none opacity-0 group-hover/node:opacity-100 transition-opacity duration-300">
                                <div className="bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded-md text-center shadow-lg transform -translate-y-2">
                                    {point.percentage}%
                                </div>
                            </foreignObject>
                        </g>
                    ))}
                </svg>

                {/* X-axis Years */}
                <div className="absolute inset-0 pointer-events-none">
                    {points.map((point) => (
                        <span
                            key={point.year}
                            className="absolute bottom-0 text-[10px] sm:text-sm font-bold text-muted-foreground tracking-tighter translate-y-6 sm:translate-y-8 -translate-x-1/2"
                            style={{ left: `${(point.x / width) * 100}%` }}
                        >
                            {point.year}
                        </span>
                    ))}
                </div>
            </div>

            {/* Legend / Metrics */}
            <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-8 sm:gap-12 border-t border-border pt-10">
                <div className="text-center w-full sm:w-auto">
                    <div className="text-3xl font-black text-foreground">100%</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">Consistency</div>
                </div>
                <div className="text-center sm:border-x border-border sm:px-12 w-full sm:w-auto">
                    <div className="text-3xl font-black text-gold">95%+</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">Average Pass</div>
                </div>
                <div className="text-center w-full sm:w-auto">
                    <div className="text-3xl font-black text-foreground">A Grade</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">Standard</div>
                </div>
            </div>
        </div>
    );
}
