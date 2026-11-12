"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  alt: string;
  className: string;
  isPlaceholder?: boolean;
  placeholderLabel: string;
  sizes: string;
  src: string;
  unoptimized?: boolean;
};

export function ProjectImage({
  alt,
  className,
  isPlaceholder = false,
  placeholderLabel,
  sizes,
  src,
  unoptimized = false,
}: ProjectImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);

  if (isPlaceholder || failedSource === src) {
    return (
      <div aria-label={alt} className={`project-image-fallback ${className}`} role="img">
        <span className="project-image-fallback-label">{placeholderLabel}</span>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      fill
      onError={() => setFailedSource(src)}
      sizes={sizes}
      src={src}
      unoptimized={unoptimized}
    />
  );
}
