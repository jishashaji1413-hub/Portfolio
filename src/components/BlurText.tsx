import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  onAnimationComplete?: () => void;
}

const BlurText = ({
  text,
  delay = 80,
  className = "",
  animateBy = "letters",
  direction = "top",
  onAnimationComplete,
}: BlurTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  const elements =
    animateBy === "words" ? text.split(" ") : text.split("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {elements.map((item, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: direction === "top" ? -40 : 40,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            delay: index * (delay / 1000),
            ease: "easeOut",
          }}
          onAnimationComplete={
            index === elements.length - 1
              ? onAnimationComplete
              : undefined
          }
          style={{
            display: "inline-block",
            willChange: "transform, opacity, filter",
          }}
        >
          {item}
          {animateBy === "words" &&
            index < elements.length - 1 &&
            "\u00A0"}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;