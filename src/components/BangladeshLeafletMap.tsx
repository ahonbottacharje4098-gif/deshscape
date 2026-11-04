"use client";

import { useEffect, useState } from "react";
import { CircleMarker, GeoJSON, MapContainer, Popup, TileLayer, ZoomControl, useMap } from "react-leaflet";
import Link from "next/link";
import type { LatLngExpression } from "leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { destinations } from "@/data/destinations";

type Props = {
  activeSlug: string;
  onSelect: (slug: string) => void;
};

function BangladeshMapViewport() {
  const map = useMap();

  useEffect(() => {
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
  const [countryBoundary, setCountryBoundary] = useState<FeatureCollection | Feature<Geometry> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://services.arcgis.com/Sf0q24s0oDKgX14j/ArcGIS/rest/services/Map_of_BANGLADESH/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson",
      { signal: controller.signal }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Bangladesh boundary could not be loaded");
        return response.json();
      })
      .then((data: FeatureCollection | Feature<Geometry>) => setCountryBoundary(data))
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Bangladesh map boundary:", error);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <MapContainer
      center={[23.75, 90.35]}
      zoom={7}
      minZoom={6}
      maxZoom={15}
      scrollWheelZoom
      zoomControl={false}
      className="leaflet-bangladesh-map"
      aria-label="Interactive map highlighting Bangladesh"
    >
      <BangladeshMapViewport />
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
      />
      {countryBoundary && (
        <GeoJSON
          data={countryBoundary}
          style={{
            color: "#173f2d",
            weight: 3,
            opacity: 1,
            fillColor: "#6f9b78",
            fillOpacity: 0.48
          }}
        />
      )}
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
