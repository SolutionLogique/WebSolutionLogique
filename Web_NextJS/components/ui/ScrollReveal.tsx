"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once]);

  const getInitialStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      opacity: 0,
      transition: `all ${duration}ms ease-out ${delay}ms`,
    };

    switch (animation) {
      case "fade-up":
        return { ...base, transform: "translateY(30px)" };
      case "fade-down":
        return { ...base, transform: "translateY(-30px)" };
      case "fade-left":
        return { ...base, transform: "translateX(30px)" };
      case "fade-right":
        return { ...base, transform: "translateX(-30px)" };
      case "scale-in":
        return { ...base, transform: "scale(0.95)" };
      case "fade":
      default:
        return base;
    }
  };

  const getVisibleStyles = (): React.CSSProperties => {
    return {
      opacity: 1,
      transform: "translateY(0) translateX(0) scale(1)",
      transition: `all ${duration}ms ease-out ${delay}ms`,
    };
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={isVisible ? getVisibleStyles() : getInitialStyles()}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
