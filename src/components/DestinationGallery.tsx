"use client";

import { useEffect, useRef, useState } from "react";
import { Expand, X, Image as ImageIcon, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type GalleryPhoto = { url: string; sourceUrl?: string };
type Props = { image: string; title: string };

export default function DestinationGallery({ image, title }: Props) {
  const { t } = useLanguage();
  const [photos, setPhotos] = useState<GalleryPhoto[]>([{ url: image }]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setPhotos([{ url: image }]);
    setActiveIndex(0);
    setIsOpen(false);
    setIsLoading(true);
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

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      } else if (event.key === "ArrowLeft" && photos.length > 1) {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
      } else if (event.key === "ArrowRight" && photos.length > 1) {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % photos.length);
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, photos.length]);

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
            <div className="eyebrow"><span /> {t("MOMENTS & MEMORIES")}</div>
            <h2>{t("A visual journey")}<br /><em>{t("through")} {t(title)}.</em></h2>
          </div>
          <span className="gallery-count">{String(photos.length).padStart(2, "0")} {t("PHOTOS")} <ImageIcon size={15} /></span>
        </div>
        <div className="gallery-photo-grid">
          {photos.map((photo, index) => (
            <div className={`gallery-photo ${index === 0 ? "gallery-photo-featured" : ""}`} key={photo.url}>
              <button
                type="button"
                className="gallery-photo-trigger"
                onClick={() => openPhoto(index)}
                aria-label={`${t("View photo")} ${index + 1} ${t("of")} ${t(title)}`}
              >
                <img
                  className="gallery-photo-image"
                  src={photo.url}
                  alt={`${t(title)} — ${t("photo")} ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span className="gallery-photo-action"><Expand size={14} /> {t("VIEW PHOTO")}</span>
              </button>
              {photo.sourceUrl && <a className="gallery-photo-source" href={photo.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={t("View photo source")}><ExternalLink size={13} /></a>}
            </div>
          ))}
        </div>
        <p className="gallery-caption">{isLoading ? t("Discovering more photographs…") : t("A glimpse of") + " " + t(title) + ", " + t("Bangladesh") + ". " + t("Photos from Wikimedia Commons where available.")}</p>
      </section>

      {isOpen && (
        <div ref={dialogRef} className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${t(title)} ${t("photo viewer")}`} tabIndex={-1} onClick={() => setIsOpen(false)}>
          <button ref={closeButtonRef} type="button" className="gallery-close" onClick={() => setIsOpen(false)} aria-label={t("Close photo viewer")}><X size={24} /></button>
          {photos.length > 1 && <button type="button" className="gallery-nav gallery-nav-prev" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label={t("Previous photo")}><ChevronLeft size={28} /></button>}
          <img src={photos[activeIndex].url} alt={`${t(title)} — ${t("photo")} ${activeIndex + 1}`} onClick={(event) => event.stopPropagation()} />
          {photos.length > 1 && <button type="button" className="gallery-nav gallery-nav-next" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label={t("Next photo")}><ChevronRight size={28} /></button>}
          <span className="gallery-lightbox-caption">{t(title)} · {String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
          {photos[activeIndex].sourceUrl && <a className="gallery-lightbox-source" href={photos[activeIndex].sourceUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>{t("PHOTO SOURCE")} <ExternalLink size={12} /></a>}
        </div>
      )}
    </>
  );
}
