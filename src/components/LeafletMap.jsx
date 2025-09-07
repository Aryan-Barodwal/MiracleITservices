import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Eye, EyeOff } from "lucide-react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LeafletMap() {
  const position = [28.548333, 77.252778];
  const [isDark, setIsDark] = useState(true);

  const darkTiles =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  const lightTiles =
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      {/* The map itself */}
      <MapContainer
        center={position}
        zoom={25}
        scrollWheelZoom={false}
        dragging={false}       // 🚫 disable moving left-right / up-down
        doubleClickZoom={false} // optional: disable double-click zoom
        touchZoom={false}      // optional: disable pinch zoom on mobile
        style={{
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
      >
        <TileLayer
          url={isDark ? darkTiles : lightTiles}
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        />
        <Marker position={position}>
          <Popup>
            📍 B-11/4, Mansrovar Building, 90 Nehru Place, Delhi 110019
          </Popup>
        </Marker>
      </MapContainer>

      <div
        className="md:block hidden"
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: isDark
            ? "rgba(0, 0, 0, 0.7)"
            : "rgba(255, 255, 255, 0.85)",
          color: isDark ? "white" : "black",
          padding: "10px 15px",
          borderRadius: "8px",
          maxWidth: "250px",
          fontSize: "14px",
          lineHeight: "1.4",
          zIndex: 1000, // always above map
        }}
      >
        Delhi Office:- 📍 B-11/4, Mansrovar Building, 90 Nehru Place, Delhi
        110019
      </div>

      {/* Theme toggle button */}
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "rgba(0, 0, 0, 0.7)",
          border: "none",
          padding: "8px",
          borderRadius: "50%",
          cursor: "pointer",
          color: "white",
          zIndex: 1000, // always above map
        }}
      >
        {isDark ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}
