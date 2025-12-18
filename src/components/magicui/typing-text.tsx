"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "@/utils/cn";

export interface TypingTextProps {
  text: string;
  className?: string;
  cursorClassName?: string;
  speed?: number;
  showCursor?: boolean;
  repeat?: boolean;
  repeatDelay?: number;
}

export function TypingText({
  text,
  className,
  cursorClassName,
  speed = 50,
  showCursor = true,
  repeat = false,
  repeatDelay = 1,
}: TypingTextProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length / (speed / 2),
      ease: "linear",
      repeat: repeat ? Infinity : 0,
      repeatType: "reverse",
      repeatDelay: repeatDelay,
    });
    return controls.stop;
  }, [count, speed, text.length, repeat, repeatDelay]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <motion.span>{displayText}</motion.span>
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "ml-1 inline-block h-[1em] w-[2px] bg-primary",
            cursorClassName
          )}
        />
      )}
    </span>
  );
}
