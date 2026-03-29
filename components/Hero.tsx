"use client";

import Image from "next/image";
import { motion, Variants, useInView } from "framer-motion";
import React, { useRef } from "react";

type HeroProps = {
  bgImage: string;
  overlayImage?: string;
  subtitle?: string;
  title: React.ReactNode;
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

// Cinematic 3-D flip-up with blur dissolve
const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "60%",
    rotateX: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: "0%",
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants: Variants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: 32,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};


function AnimatedLetters({
  text,
  delayChildren,
}: {
  text: string;
  delayChildren: number;
}) {
  const wordVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035,
        delayChildren,
      },
    },
  };

  return (
    <motion.span
      className="inline-block"
      variants={wordVariants}
      initial="hidden"
      animate="visible"
      aria-label={text}
      style={{ perspective: 600 }}
    >
      {Array.from(text).map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}


function AnimateNode(
  node: React.ReactNode,
  baseDelay: number,
  charCount: { value: number }
): React.ReactNode {
  if (typeof node === "string") {
    const delay = baseDelay + charCount.value * 0.035;
    charCount.value += node.replace(/\s/g, "").length;
    return <AnimatedLetters text={node} delayChildren={delay} />;
  }

  if (React.isValidElement(node)) {
    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    const kids = React.Children.map(element.props.children, (child) =>
      AnimateNode(child, baseDelay, charCount)
    );
    return React.cloneElement(element, {}, kids);
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <React.Fragment key={i}>
        {AnimateNode(child, baseDelay, charCount)}
      </React.Fragment>
    ));
  }

  return node;
}


export default function Hero({
  bgImage,
  overlayImage,
  subtitle,
  title,
}: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const subtitleDelay = 0.15;
  const titleDelay = 0.55;
  const charCount = { value: 0 };

  const animatedTitle = AnimateNode(title, titleDelay, charCount);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] sm:h-[80vh] md:h-screen w-full overflow-hidden"
    >
      <Image
        src={bgImage}
        alt="hero background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* Optional overlay image */}
      {overlayImage && (
        <Image
          src={overlayImage}
          alt="overlay"
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 z-20 object-cover"
        />
      )}

      {/* Content */}
      <div className="relative z-30 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 text-center md:text-left">

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              className="mb-4 inline-flex items-center gap-3 text-sm sm:text-base md:text-lg lg:text-xl text-cyan-400 drop-shadow-md tracking-[0.2em] uppercase"
              variants={subtitleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: subtitleDelay }}
            >
              {/* Decorative leading line */}
              <motion.span
                className="hidden md:block h-px bg-cyan-400"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: subtitleDelay + 0.35 }}
              />
              {subtitle}
            </motion.p>
          )}

          {/* Title — letter-by-letter 3-D reveal */}
          <h1
            className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-[1.3] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            style={{ perspective: 800 }}
          >
            {/* Re-mount the tree when inView becomes true so animations fire */}
            {inView ? animatedTitle : <span style={{ visibility: "hidden" }}>{title}</span>}
          </h1>
        </div>
      </div>
    </section>
  );
}