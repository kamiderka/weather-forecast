import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { precisionRound } from "../../../../utils/precisionRound";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export function Map({ latitude, longitude, setLatitude, setLongitude }) {
  const MapEvents = () => {
    useMapEvents({
      click(e) {
        setLatitude(precisionRound(e.latlng.lat, 4));
        setLongitude(precisionRound(e.latlng.lng, 4));
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          Lat: {latitude} <br /> Long: {longitude}
        </Popup>
      </Marker>
      <MapEvents />
    </MapContainer>
  );
}

export default Map;
