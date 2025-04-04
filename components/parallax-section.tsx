"use client";

import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down";
    speed?: number;
}

export function ParallaxSection({ children, className = "", direction = "up", speed = 0.3 }: ParallaxSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const factor = direction === "up" ? -speed : speed;
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${factor * 100}%`]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }} className="w-full h-full">
                {children}
            </motion.div>
        </div>
    );
}
