import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

// Manchester coordinates
const MANCHESTER_CENTER = {
  lng: -2.2426,
  lat: 53.4808,
  zoom: 12,
};

function App() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [MANCHESTER_CENTER.lng, MANCHESTER_CENTER.lat],
      zoom: MANCHESTER_CENTER.zoom,
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default App;
