import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

type LocationGlobeProps = {
  markerLabel?: string;
};

export const LocationGlobe = ({ markerLabel = "Interactive 3D Globe" }: LocationGlobeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    let width = 0;
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.15,
      dark: 1, 
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 9,
      baseColor: [0.55, 0.55, 0.55], // Bright wireframe dots
      markerColor: [0.443, 0.945, 0.369], // #71f15e location marker
      glowColor: [0.03, 0.03, 0.03], 
      markers: [
        { location: [34.0522, -118.2437], size: 0.08 } // LA Coordinates
      ],
      onRender: (state) => {
        if (pointerInteracting.current === null) {
          phiRef.current += 0.005;
        }
        
        state.phi = phiRef.current + pointerInteractionMovement.current;
        
        if (width > 0) {
          state.width = width * 2;
          state.height = width * 2;
        }
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[1180px] aspect-square flex items-center justify-center pointer-events-auto">
      <div className="pointer-events-none absolute inset-x-[14%] top-[10%] h-20 rounded-full bg-white/6 blur-3xl" />
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-90 cursor-grab active:cursor-grabbing"
        style={{ contain: 'layout paint size' }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing';
          }
        }}
        onPointerUp={() => {
          if (pointerInteracting.current !== null) {
            phiRef.current += pointerInteractionMovement.current;
            pointerInteractionMovement.current = 0;
            pointerInteracting.current = null;
          }
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onPointerOut={() => {
          if (pointerInteracting.current !== null) {
            phiRef.current += pointerInteractionMovement.current;
            pointerInteractionMovement.current = 0;
            pointerInteracting.current = null;
          }
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab';
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 200;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 100;
          }
        }}
        aria-label={markerLabel}
      />
    </div>
  );
};
