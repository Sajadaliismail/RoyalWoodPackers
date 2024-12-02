"use client";
import React, { useState } from "react";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import Image from "next/image";

const LocationMap: React.FC = () => {
  const [center, setCenter] = useState<[number, number]>([
    10.1105609, 76.4430823,
  ]);
  const [zoom, setZoom] = useState(11);
  return (
    <Map
      height={300}
      center={center}
      defaultCenter={[10.1105609, 76.4430823]}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
      zoom={zoom}
      defaultZoom={12}
    >
      <ZoomControl />
      <Overlay anchor={[10.1105609, 76.4430823]} offset={[0, 0]}>
        <Image src="/rwp.png" width={80} height={80} alt="" />
      </Overlay>
      <Marker
        onClick={() => {
          window.open(
            "https://www.google.com/maps/dir/?api=1&destination=Royal+Wood+Packers,+Mudickal,+Cheruvelikkunnu,+Perumbavoor,+Kerala+683547",
            "_blank"
          );
        }}
        width={50}
        anchor={[10.1105609, 76.4430823]}
      />
    </Map>
  );
};

export default LocationMap;
