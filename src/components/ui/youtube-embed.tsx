'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  return (
    <div
      className={cn(
        'relative w-full rounded-2xl overflow-hidden shadow-[var(--shadow-3)] bg-neutral-900',
        className
      )}
    >
      <div className="relative aspect-video">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Lire la vidéo : ${title}`}
            className="group absolute inset-0 w-full h-full cursor-pointer"
          >
            {/* YouTube thumbnail */}
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              unoptimized
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 shadow-[var(--shadow-4)] transition-transform duration-300 group-hover:scale-110">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-500 ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
