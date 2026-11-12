"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { messages, type Locale } from "./i18n";
import { ProjectImage } from "./project-image";
import type { PortfolioProject } from "./portfolio-data";

type HeroSlide = {
  project: PortfolioProject;
  caption: string;
};

type HeroSliderProps = {
  locale: Locale;
  slides: readonly HeroSlide[];
};

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function HeroSlider({ locale, slides }: HeroSliderProps) {
  const copy = messages[locale];
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoRotateOverride, setAutoRotateOverride] = useState<boolean | null>(null);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const autoRotate = autoRotateOverride ?? !prefersReducedMotion;

  useEffect(() => {
    if (!autoRotate || interactionPaused || slides.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, [autoRotate, interactionPaused, slides.length]);

  if (slides.length === 0) return null;

  const slide = slides[activeIndex % slides.length];
  const image = slide.project.images[0];
  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <figure
      aria-label={copy.hero.carouselLabel}
      aria-roledescription={copy.hero.carouselRoleDescription}
      className="hero-visual"
      onBlurCapture={(event) => {
        const nextFocus = event.relatedTarget;
        if (nextFocus instanceof Node && event.currentTarget.contains(nextFocus)) return;
        setInteractionPaused(false);
      }}
      onFocusCapture={() => setInteractionPaused(true)}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
    >
      <ProjectImage
        key={slide.project.slug}
        alt={image.alt}
        className={`hero-visual-image${slide.project.slug === "application-site-gurbag-genel-merkez-ofisi" ? " hero-visual-image-original" : ""}`}
        fetchPriority="high"
        isPlaceholder={image.isPlaceholder}
        loading="eager"
        placeholderLabel={copy.work.imagePlaceholder}
        sizes="(max-width: 760px) 100vw, calc(100vw - 72px)"
        src={image.src}
        unoptimized={image.src.endsWith(".gif")}
      />
      {slides.length > 1 ? (
        <div className="hero-slider-controls" role="group" aria-label={copy.hero.carouselControls}>
          <button
            aria-label={copy.hero.previousSlide}
            className="hero-slider-control"
            onClick={() => goToSlide(activeIndex - 1)}
            type="button"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            aria-label={copy.hero.nextSlide}
            className="hero-slider-control"
            onClick={() => goToSlide(activeIndex + 1)}
            type="button"
          >
            <span aria-hidden="true">›</span>
          </button>
          <button
            aria-label={autoRotate ? copy.hero.pauseSlideshow : copy.hero.resumeSlideshow}
            className="hero-slider-control"
            onClick={() => setAutoRotateOverride(!autoRotate)}
            type="button"
          >
            <span aria-hidden="true">{autoRotate ? "Ⅱ" : "▶"}</span>
          </button>
        </div>
      ) : null}
      <figcaption aria-live="off" className="hero-visual-caption">
        <span className="hero-visual-caption-main">
          <span className="hero-index">
            {String((activeIndex % slides.length) + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <span className="hero-visual-caption-name">{slide.caption}</span>
        </span>
        <Link className="hero-visual-link" href={`/${locale}/projects/${slide.project.slug}`}>
          {copy.hero.viewProject} <span aria-hidden="true">↗</span>
        </Link>
      </figcaption>
    </figure>
  );
}
