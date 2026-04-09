import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

type LocationGlobeProps = {
  markerLabel?: string;
};

export const LocationGlobe = ({ markerLabel }: LocationGlobeProps) => {
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [countries, setCountries] = useState({ features: [] });
  const [coreMaterial, setCoreMaterial] = useState<any>(null);

  useEffect(() => {
    // Generate perfect internal spherical lat/long wireframe grid
    const mat = new THREE.MeshPhongMaterial({
      color: '#080808',
      emissive: '#141414',
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    setCoreMaterial(mat);

    // Fetch GeoJSON for true boundary wireframes
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current && dimensions.width > 0) {
       globeEl.current.controls().autoRotate = true;
       globeEl.current.controls().autoRotateSpeed = 1;
       globeEl.current.controls().enableZoom = false;
       // Frame the camera looking exactly at Los Angeles
       globeEl.current.pointOfView({ lat: 34.05, lng: -118.24, altitude: 1.8 });
    }
  }, [dimensions.width]);

  // LA coordinate anchor
  const markerData = [{
    lat: 34.0522, 
    lng: -118.2437,
  }];

  return (
    <div 
      ref={containerRef} 
      className="aspect-square flex justify-center items-center cursor-grab active:cursor-grabbing"
      aria-label={markerLabel}
    >
      {dimensions.width > 0 && coreMaterial && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere={true}
          atmosphereColor="#111111"
          atmosphereAltitude={0.02}
          showGlobe={true}
          globeMaterial={coreMaterial}
          // Country polygon rendering
          polygonsData={countries.features}
          polygonCapColor={() => 'rgba(255, 255, 255, 0.03)'}
          polygonSideColor={() => 'rgba(255, 255, 255, 0)'}
          polygonStrokeColor={() => 'rgba(255, 255, 255, 0.8)'}
          // Marker ping logic
          ringsData={markerData}
          ringColor={() => '#ff5a00'}
          ringMaxRadius={4}
          ringPropagationSpeed={2}
          ringRepeatPeriod={1000}
          labelsData={markerData}
          labelDotRadius={2}
          labelColor={() => '#ff5a00'}
          labelText={() => ''}
        />
      )}
    </div>
  );
};
