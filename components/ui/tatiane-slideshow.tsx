'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const photos = [
  { src: '/tatiane-galeria-01.png', alt: 'Tatiane em retrato profissional' },
  { src: '/tatiane-galeria-02.png', alt: 'Tatiane em um momento de leitura' },
  { src: '/tatiane-retrato-editorial.png', alt: 'Tatiane em retrato editorial' },
  { src: '/tatiane-galeria-04.png', alt: 'Tatiane sorrindo em retrato profissional' },
  { src: '/tatiane-galeria-05.png', alt: 'Tatiane sentada em uma poltrona acolhedora' },
  { src: '/tatiane-galeria-06.png', alt: 'Tatiane em retrato próximo e acolhedor' },
  { src: '/tatiane-galeria-07.png', alt: 'Tatiane em seu espaço de trabalho' },
];

export function TatianeSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPhoto = photos[currentIndex];

  const showPrevious = () => setCurrentIndex((index) => (index - 1 + photos.length) % photos.length);
  const showNext = () => setCurrentIndex((index) => (index + 1) % photos.length);

  return (
    <div className="about-photo about-gallery" data-parallax-about-photo aria-roledescription="carrossel" aria-label="Galeria de fotos da psicóloga Tatiane">
      <img className="about-gallery__image" key={currentPhoto.src} src={currentPhoto.src} alt={currentPhoto.alt} />
      <div className="about-gallery__controls">
        <button type="button" className="about-gallery__button" onClick={showPrevious} aria-label="Foto anterior">
          <ChevronLeft size={20} strokeWidth={1.8} />
        </button>
        <button type="button" className="about-gallery__button" onClick={showNext} aria-label="Próxima foto">
          <ChevronRight size={20} strokeWidth={1.8} />
        </button>
      </div>
      <p className="about-gallery__count" aria-live="polite">{String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}</p>
    </div>
  );
}
