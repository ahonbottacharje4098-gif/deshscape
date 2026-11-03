"use client";

import { useState } from "react";
import { Expand, X, Image as ImageIcon } from "lucide-react";

type Props = { image: string; title: string };

export default function DestinationGallery({ image, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="destination-gallery section-wrap">
        <div className="destination-gallery-heading">
          <div>
            <div className="eyebrow"><span /> MOMENTS &amp; MEMORIES</div>
            <h2>A visual journey<br /><em>through {title}.</em></h2>
          </div>
          <span className="gallery-count">01 / 01 <ImageIcon size={15} /></span>
        </div>
        <button
          type="button"
          className="gallery-photo"
          onClick={() => setIsOpen(true)}
          aria-label={`View a larger photograph of ${title}`}
        >
          <span className="gallery-photo-image" style={{ backgroundImage: `url("${image}")` }} />
          <span className="gallery-photo-action"><Expand size={15} /> VIEW PHOTO</span>
        </button>
        <p className="gallery-caption">A glimpse of {title}, Bangladesh.</p>
      </section>

      {isOpen && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${title} photo viewer`} onClick={() => setIsOpen(false)}>
          <button type="button" className="gallery-close" onClick={() => setIsOpen(false)} aria-label="Close photo viewer">
            <X size={24} />
          </button>
          <img src={image} alt={title} onClick={(event) => event.stopPropagation()} />
          <span className="gallery-lightbox-caption">{title} · BANGLADESH</span>
        </div>
      )}
    </>
  );
}
