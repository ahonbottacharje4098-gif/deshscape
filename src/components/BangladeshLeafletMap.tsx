"use client";

import { CircleMarker, MapContainer, Popup, TileLayer, ZoomControl } from "react-leaflet";
import Link from "next/link";
import type { LatLngExpression } from "leaflet";

type Place = {
  slug: string;
  name: string;
  area: string;
  position: LatLngExpression;
};

const places: Place[] = [
  { slug: "sajek-valley", name: "Sajek Valley", area: "Rangamati", position: [23.381, 92.294] },
  { slug: "cox-s-bazar", name: "Cox's Bazar", area: "Chattogram", position: [21.427, 91.971] },
  { slug: "ratargul-swamp-forest", name: "Ratargul Swamp Forest", area: "Sylhet", position: [25.002, 91.982] },
  { slug: "bichanakandi", name: "Bichanakandi", area: "Sylhet", position: [25.176, 91.850] },
  { slug: "sundarbans", name: "Sundarbans", area: "Khulna", position: [22.438, 89.592] },
  { slug: "jaflong", name: "Jaflong", area: "Sylhet", position: [25.163, 92.017] }
];

type Props = {
  activeSlug: string;
  onSelect: (slug: string) => void;
};

export default function BangladeshLeafletMap({ activeSlug, onSelect }: Props) {
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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      {places.map((place) => {
        const active = activeSlug === place.slug;
        return (
          <CircleMarker
            key={place.slug}
            center={place.position}
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
                <span>{place.area}, Bangladesh</span>
                <Link href={`/destinations/${place.slug}`}>Explore destination ↗</Link>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
