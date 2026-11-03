"use client";

import { useEffect, useState } from "react";
import { Expand, X, Image as ImageIcon, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type GalleryPhoto = { url: string; sourceUrl?: string };
type Props = { image: string; title: string };

export default function DestinationGallery({ image, title }: Props) {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([{ url: image }]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPhotos() {
      try {
        const params = new URLSearchParams({
          action: "query",
          generator: "search",
          gsrsearch: title,
          gsrnamespace: "6",
          gsrlimit: "30",
          prop: "imageinfo",
          iiprop: "url",
          iiurlwidth: "1600",
          format: "json",
          origin: "*"
        });
        const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params.toString()}`, { signal: controller.signal });
        if (!response.ok) throw new Error("Photo search unavailable");
        const data = await response.json();
        const pages = Object.values(data.query?.pages ?? []) as Array<{ imageinfo?: Array<{ thumburl?: string; url?: string; descriptionurl?: string; mime?: string }> }>;
        const found = pages
          .map((page) => page.imageinfo?.[0])
          .filter((info): info is NonNullable<typeof info> => Boolean(info && (!info.mime || info.mime.startsWith("image/"))))
          .map((info) => ({ url: info.thumburl || info.url || "", sourceUrl: info.descriptionurl }))
          .filter((photo) => photo.url && photo.url !== image)
          .filter((photo, index, all) => all.findIndex((item) => item.url === photo.url) === index)
          .slice(0, 5);
        if (found.length) setPhotos([{ url: image }, ...found]);
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) {
          // Keep the destination's main photograph available if the photo search fails.
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    loadPhotos();
    return () => controller.abort();
  }, [image, title]);

  const openPhoto = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };
  const showPrevious = () => setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % photos.length);

  return (
    <>
      <section className="destination-gallery section-wrap">
        <div className="destination-gallery-heading">
          <div>
            <div className="eyebrow"><span /> MOMENTS &amp; MEMORIES</div>
            <h2>A visual journey<br /><em>through {title}.</em></h2>
          </div>
          <span className="gallery-count">{String(photos.length).padStart(2, "0")} PHOTOS <ImageIcon size={15} /></span>
        </div>
        <div className="gallery-photo-grid">
          {photos.map((photo, index) => (
            <button
              type="button"
              className={`gallery-photo ${index === 0 ? "gallery-photo-featured" : ""}`}
              key={photo.url}
              onClick={() => openPhoto(index)}
              aria-label={`View photo ${index + 1} of ${title}`}
            >
              <span className="gallery-photo-image" style={{ backgroundImage: `url("${photo.url}")` }} />
              <span className="gallery-photo-action"><Expand size={14} /> VIEW PHOTO</span>
              {photo.sourceUrl && <a className="gallery-photo-source" href={photo.sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} aria-label="View photo source"><ExternalLink size={13} /></a>}
            </button>
          ))}
        </div>
        <p className="gallery-caption">{isLoading ? "Discovering more photographs…" : `A glimpse of ${title}, Bangladesh. Photos from Wikimedia Commons where available.`}</p>
      </section>

      {isOpen && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${title} photo viewer`} onClick={() => setIsOpen(false)}>
          <button type="button" className="gallery-close" onClick={() => setIsOpen(false)} aria-label="Close photo viewer"><X size={24} /></button>
          {photos.length > 1 && <button type="button" className="gallery-nav gallery-nav-prev" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous photo"><ChevronLeft size={28} /></button>}
          <img src={photos[activeIndex].url} alt={`${title} — photo ${activeIndex + 1}`} onClick={(event) => event.stopPropagation()} />
          {photos.length > 1 && <button type="button" className="gallery-nav gallery-nav-next" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next photo"><ChevronRight size={28} /></button>}
          <span className="gallery-lightbox-caption">{title} · {String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
          {photos[activeIndex].sourceUrl && <a className="gallery-lightbox-source" href={photos[activeIndex].sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>PHOTO SOURCE <ExternalLink size={12} /></a>}
        </div>
      )}
    </>
  );
}
