import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./App.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

const MANCHESTER = {
  lng: -2.2448,
  lat: 53.4794,
};

function App() {
  const isMobile = window.matchMedia("pointer: coarse").matches;

  console.log(isMobile);

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: "mapbox://styles/mapbox/dark-v10",
      style: "mapbox://styles/mannyhour/cmb6l9e7500pi01pagge87krt",
      center: [MANCHESTER.lng, MANCHESTER.lat],
      zoom: 13,
      pitch: 25,
      antialias: true,
      config: {
        basemap: {},
      },
    });

    // map.current?.on("load", () => {
    //   map.current?.addLayer({
    //     id: "3d-buildings",
    //     // source: "composite",
    //     "source-layer": "building",
    //     // filter: ["==", "extrude", "true"],
    //     type: "fill-extrusion",
    //     paint: {
    //       "fill-extrusion-color": "#121212",
    //       "fill-extrusion-height": ["get", "height"],
    //       "fill-extrusion-base": ["get", "min_height"],
    //       "fill-extrusion-opacity": 0.7,
    //     },
    //   });
    // });

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
