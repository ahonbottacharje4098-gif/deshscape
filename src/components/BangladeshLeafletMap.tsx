"use client";

import { useEffect, useState } from "react";
import { CircleMarker, GeoJSON, MapContainer, Popup, TileLayer, Tooltip, ZoomControl, useMap } from "react-leaflet";
import Link from "next/link";
import type { LatLngExpression } from "leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import { allDestinations } from "@/data/destinations";
import { useLanguage } from "@/components/LanguageProvider";

type Props = {
  activeSlug: string;
  onSelect: (slug: string) => void;
};

type DivisionProperties = {
  adm1_en?: string;
  ADM1_EN?: string;
  name?: string;
};

const divisionColors: Record<string, string> = {
  Rangpur: "#eadba9",
  Rajshahi: "#c9c8a7",
  Mymensingh: "#a8c2b3",
  Sylhet: "#e6c9c5",
  Dhaka: "#b7d0d0",
  Khulna: "#d5b9c2",
  Barishal: "#ead6a1",
  Chattogram: "#b5d1ad"
};

function BangladeshMapViewport() {
  const map = useMap();

  useEffect(() => {
    const countryBounds: [[number, number], [number, number]] = [
      [20.55, 88.0],
      [26.65, 92.7]
    ];

    map.fitBounds(countryBounds, {
      padding: [8, 8],
      maxZoom: 8.5,
      animate: false
    });
  }, [map]);

  return null;
}

export default function BangladeshLeafletMap({ activeSlug, onSelect }: Props) {
  const { t } = useLanguage();
  const places = allDestinations.filter((place) => place.coordinates);
  const [divisionBoundaries, setDivisionBoundaries] = useState<FeatureCollection | Feature<Geometry> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://gis.dghs.gov.bd/server/rest/services/Hosted/bgd_admbnda_adm1_bbs_20201113/FeatureServer/0/query?where=1%3D1&outFields=adm1_en&outSR=4326&f=geojson",
      { signal: controller.signal }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Bangladesh division boundaries could not be loaded");
        return response.json();
      })
      .then((data: FeatureCollection | Feature<Geometry>) => setDivisionBoundaries(data))
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Bangladesh division map:", error);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <MapContainer
      center={[23.75, 90.35]}
      zoom={7}
      minZoom={6.5}
      maxZoom={15}
      scrollWheelZoom
      zoomControl={false}
      className="leaflet-bangladesh-map"
      aria-label={t("Interactive map of the eight divisions of Bangladesh")}
    >
      <BangladeshMapViewport />
      <TileLayer
        attribution='Tiles &copy; <a href="https://www.esri.com/">Esri</a> — Sources: Esri, USGS, NOAA'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      {divisionBoundaries && (
        <GeoJSON
          data={divisionBoundaries}
          pane="overlayPane"
          style={(feature) => {
            const properties = (feature?.properties ?? {}) as DivisionProperties;
            const name = properties.adm1_en ?? properties.ADM1_EN ?? properties.name ?? "";
            return {
              color: "#82958a",
              weight: 1.35,
              opacity: 0.9,
              fillColor: divisionColors[name] ?? "#d7dfd1",
              fillOpacity: 0.78,
              lineCap: "round",
              lineJoin: "round"
            };
          }}
          onEachFeature={(feature, layer) => {
            const properties = (feature.properties ?? {}) as DivisionProperties;
            const name = properties.adm1_en ?? properties.ADM1_EN ?? properties.name;
            if (name) {
              layer.bindTooltip(t(name), {
                permanent: true,
                direction: "center",
                className: "division-map-label",
                opacity: 0.9
              });
            }
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
            pane="markerPane"
            center={position}
            radius={active ? 10 : 7}
            pathOptions={{
              color: "#fffdf5",
              weight: 3,
              fillColor: active ? "#b77b4d" : "#244b3a",
              fillOpacity: 1
            }}
            eventHandlers={{ click: () => onSelect(place.slug) }}
          >
            <Popup>
              <div className="leaflet-place-popup">
                <strong>{t(place.name)}</strong>
                <span>{t(place.district)}, {t("Bangladesh")}</span>
                <Link href={`/destinations/${place.slug}`}>{t("Explore destination")} ↗</Link>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
