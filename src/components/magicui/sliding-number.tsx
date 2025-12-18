"use client";

import { useEffect, useId } from "react";
import {
    motion,
    useSpring,
    useTransform,
    useMotionValue,
} from "motion/react";
import { cn } from "@/utils/cn";

export function SlidingNumber({
    value,
    padStart = 0,
    decimalPlaces = 0,
    className,
}: {
    value: number;
    padStart?: number;
    decimalPlaces?: number;
    className?: string;
}) {
    const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) =>
        current.toFixed(decimalPlaces).padStart(padStart, "0")
    );

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return (
        <motion.span className={cn("inline-block tabular-nums", className)}>
            {display}
        </motion.span>
    );
}
