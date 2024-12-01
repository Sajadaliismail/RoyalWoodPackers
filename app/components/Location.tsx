// LocationMap.js

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMap = () => {
  return (
    <div className="h-[200px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[10.1105609, 76.4430823]}
        zoom={50}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker
          position={[10.1105609, 76.4430823]}
          eventHandlers={{
            click: () => {
              window.open(
                "https://www.google.com/maps/dir/?api=1&destination=Royal+Wood+Packers,+Mudickal,+Cheruvelikkunnu,+Perumbavoor,+Kerala+683547",
                "_blank"
              );
            },
          }}
        >
          <Popup>
            Royal Wood Packers
            <br />
            Mudickal, Cheruvelikkunnu
            <br />
            Perumbavoor, Kerala 683547
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
