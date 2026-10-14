"use client";

import dynamic from "next/dynamic";
import { useCallback, useRef, useState } from "react";

const Globe3D = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[320px] items-center justify-center text-sm text-white/50">
      Loading Earth...
    </div>
  ),
});

const locations = [
  { lat: 28.6139, lng: 77.209, name: "India" },
  { lat: 51.5072, lng: -0.1276, name: "London" },
  { lat: 40.7128, lng: -74.006, name: "New York" },
  { lat: 35.6762, lng: 139.6503, name: "Tokyo" },
];

const connections = [
  { startLat: 28.6139, startLng: 77.209, endLat: 51.5072, endLng: -0.1276 },
  { startLat: 28.6139, startLng: 77.209, endLat: 40.7128, endLng: -74.006 },
  { startLat: 28.6139, startLng: 77.209, endLat: 35.6762, endLng: 139.6503 },
];

export default function Globe() {
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState(340);

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    const updateSize = () => {
      setSize(Math.min(node.clientWidth, 420));
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(node);

    // The observer is disconnected when this component unmounts.
    node.dataset.globeObserver = "active";
    (node as any).__globeObserver = observer;
  }, []);

  const handleGlobeReady = useCallback(() => {
    const controls = globeRef.current?.controls();

    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.55;
      controls.enableZoom = false;
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#070914] px-3 py-5 sm:px-5">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[90px]" />

      <div className="relative z-10 mb-1 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-300">
          Connected Globally
        </p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
          One World. Endless Possibilities.
        </h3>
        <p className="mt-2 text-sm text-white/50">
          Building connections beyond boundaries.
        </p>
      </div>

      {/* Actual 3D Earth */}
      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex w-full items-center justify-center"
        style={{ height: 350 }}
      >
        <Globe3D
          ref={globeRef}
          width={size}
          height={350}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="#55c8ff"
          atmosphereAltitude={0.16}
          animateIn={true}
          pointsData={locations}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#67e8f9"}
          pointAltitude={0.025}
          pointRadius={0.38}
          pointsMerge={true}
          arcsData={connections}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor={() => ["#67e8f9", "#8b5cf6"]}
          arcAltitude={0.22}
          arcStroke={0.45}
          arcDashLength={0.45}
          arcDashGap={0.25}
          arcDashAnimateTime={2200}
          onGlobeReady={handleGlobeReady}
        />
      </div>

      <div className="relative z-10 mt-1 flex items-center justify-center gap-2 text-xs text-white/45">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
        <span>Exploring the world • Auto rotating</span>
      </div>
    </div>
  );
}
