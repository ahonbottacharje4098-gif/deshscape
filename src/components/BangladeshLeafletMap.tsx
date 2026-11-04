"use client";

import { CircleMarker, MapContainer, Popup, TileLayer, ZoomControl, useMap } from "react-leaflet";
import { useEffect } from "react";
import Link from "next/link";
import type { LatLngExpression } from "leaflet";
import { destinations } from "@/data/destinations";

type Props = {
  activeSlug: string;
  onSelect: (slug: string) => void;
};

function BangladeshMapViewport() {
  const map = useMap();

  useEffect(() => {
    // Frame Bangladesh on first load instead of relying on a broad world-scale view.
    const countryBounds: [[number, number], [number, number]] = [
      [20.55, 88.0],
      [26.65, 92.7]
    ];

    map.fitBounds(countryBounds, {
      padding: [28, 28],
      maxZoom: 7,
      animate: false
    });
  }, [map]);

  return null;
}

export default function BangladeshLeafletMap({ activeSlug, onSelect }: Props) {
  const places = destinations.filter((place) => place.coordinates);

  return (
    <MapContainer
      center={[23.75, 90.35]}
      zoom={7}
      minZoom={6}
      maxZoom={15}
      scrollWheelZoom
      zoomControl={false}
      className="leaflet-bangladesh-map"
      aria-label="Interactive map of Bangladesh"
    >
      <BangladeshMapViewport />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {places.map((place) => {
        const active = activeSlug === place.slug;
        const position: LatLngExpression = place.coordinates!;
        return (
          <CircleMarker
            key={place.slug}
            center={position}
            radius={active ? 10 : 7}
            pathOptions={{
              color: "#f8f7ef",
              weight: 3,
              fillColor: active ? "#b77b4d" : "#244b3a",
              fillOpacity: 1
            }}
            eventHandlers={{ click: () => onSelect(place.slug) }}
          >
            <Popup>
              <div className="leaflet-place-popup">
                <strong>{place.name}</strong>
                <span>{place.district}, Bangladesh</span>
                <Link href={`/destinations/${place.slug}`}>Explore destination ↗</Link>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
