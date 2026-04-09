import React, { useEffect, useId, useRef, useState } from 'react';

type LocationGlobeProps = {
  markerLabel: string;
};

type GeoPoint = {
  lat: number;
  lon: number;
};

type Rotation = {
  lon: number;
  lat: number;
};

type ProjectedPoint = {
  x: number;
  y: number;
  visible: boolean;
  depth: number;
};

const VIEWBOX_WIDTH = 980;
const VIEWBOX_HEIGHT = 720;
const GLOBE_RADIUS = 430;
const GLOBE_CENTER_X = VIEWBOX_WIDTH / 2;
const GLOBE_CENTER_Y = 560;
const INITIAL_ROTATION: Rotation = { lon: -145, lat: 36 };
const IDLE_SPIN_SPEED = 0;
const LATITUDE_LIMIT = 75;
const MARKER_POINT: GeoPoint = { lat: 34.0522, lon: -118.2437 };

const coastlineLines: GeoPoint[][] = [
  [
    { lat: 72, lon: -168 },
    { lat: 69, lon: -160 },
    { lat: 65, lon: -152 },
    { lat: 60, lon: -146 },
    { lat: 58, lon: -140 },
    { lat: 55, lon: -136 },
    { lat: 57, lon: -132 },
    { lat: 54, lon: -128 },
    { lat: 50, lon: -125 },
    { lat: 46, lon: -123 },
    { lat: 41, lon: -124 },
    { lat: 38, lon: -122 },
    { lat: 34, lon: -118 },
    { lat: 32, lon: -114 },
    { lat: 31, lon: -111 },
    { lat: 28, lon: -109 },
    { lat: 24, lon: -108 },
    { lat: 21, lon: -104 },
    { lat: 19, lon: -97 },
    { lat: 20, lon: -91 },
    { lat: 22, lon: -88 },
    { lat: 25, lon: -84 },
    { lat: 30, lon: -81 },
    { lat: 32, lon: -80 },
    { lat: 35, lon: -77 },
    { lat: 40, lon: -74 },
    { lat: 45, lon: -67 },
    { lat: 48, lon: -60 },
    { lat: 52, lon: -58 },
    { lat: 56, lon: -61 },
    { lat: 59, lon: -66 },
    { lat: 61, lon: -74 },
    { lat: 63, lon: -82 },
    { lat: 67, lon: -92 },
    { lat: 70, lon: -104 },
    { lat: 72, lon: -118 },
    { lat: 72, lon: -136 },
    { lat: 70, lon: -151 },
    { lat: 72, lon: -168 },
  ],
  [
    { lat: 59, lon: -73 },
    { lat: 63, lon: -65 },
    { lat: 68, lon: -58 },
    { lat: 73, lon: -53 },
    { lat: 78, lon: -50 },
    { lat: 82, lon: -42 },
    { lat: 80, lon: -32 },
    { lat: 74, lon: -28 },
    { lat: 68, lon: -34 },
    { lat: 62, lon: -42 },
    { lat: 59, lon: -50 },
    { lat: 59, lon: -73 },
  ],
  [
    { lat: 72, lon: -96 },
    { lat: 74, lon: -88 },
    { lat: 75, lon: -80 },
    { lat: 73, lon: -72 },
    { lat: 71, lon: -69 },
    { lat: 69, lon: -74 },
    { lat: 69, lon: -84 },
    { lat: 70, lon: -92 },
    { lat: 72, lon: -96 },
  ],
  [
    { lat: 66, lon: 171 },
    { lat: 68, lon: 178 },
    { lat: 69, lon: 170 },
    { lat: 68, lon: 160 },
    { lat: 66, lon: 150 },
    { lat: 63, lon: 146 },
    { lat: 58, lon: 144 },
    { lat: 53, lon: 142 },
    { lat: 48, lon: 143 },
    { lat: 43, lon: 145 },
    { lat: 39, lon: 141 },
    { lat: 35, lon: 138 },
    { lat: 34, lon: 135 },
  ],
  [
    { lat: 32, lon: 130 },
    { lat: 34, lon: 134 },
    { lat: 37, lon: 139 },
    { lat: 41, lon: 142 },
    { lat: 45, lon: 145 },
  ],
  [
    { lat: 54, lon: -170 },
    { lat: 53, lon: -176 },
    { lat: 52, lon: 178 },
    { lat: 52, lon: 172 },
  ],
  [
    { lat: 12, lon: -79 },
    { lat: 9, lon: -77 },
    { lat: 6, lon: -74 },
    { lat: 2, lon: -79 },
    { lat: -3, lon: -81 },
    { lat: -9, lon: -79 },
    { lat: -14, lon: -76 },
    { lat: -21, lon: -71 },
    { lat: -27, lon: -70 },
    { lat: -34, lon: -73 },
    { lat: -41, lon: -74 },
    { lat: -49, lon: -72 },
    { lat: -54, lon: -69 },
    { lat: -52, lon: -62 },
    { lat: -46, lon: -60 },
    { lat: -38, lon: -57 },
    { lat: -30, lon: -50 },
    { lat: -22, lon: -43 },
    { lat: -15, lon: -39 },
    { lat: -8, lon: -35 },
    { lat: -2, lon: -45 },
    { lat: 3, lon: -51 },
    { lat: 6, lon: -58 },
    { lat: 9, lon: -62 },
    { lat: 12, lon: -66 },
    { lat: 11, lon: -72 },
    { lat: 12, lon: -79 },
  ],
  [
    { lat: 37, lon: -9 },
    { lat: 35, lon: -5 },
    { lat: 33, lon: 0 },
    { lat: 32, lon: 9 },
    { lat: 31, lon: 17 },
    { lat: 31, lon: 25 },
    { lat: 32, lon: 32 },
    { lat: 31, lon: 34 },
    { lat: 29, lon: 34 },
    { lat: 24, lon: 35 },
    { lat: 19, lon: 39 },
    { lat: 12, lon: 43 },
    { lat: 5, lon: 48 },
    { lat: -4, lon: 41 },
    { lat: -12, lon: 43 },
    { lat: -20, lon: 40 },
    { lat: -28, lon: 32 },
    { lat: -34, lon: 20 },
    { lat: -35, lon: 17 },
    { lat: -31, lon: 14 },
    { lat: -22, lon: 13 },
    { lat: -16, lon: 12 },
    { lat: -4, lon: 9 },
    { lat: 5, lon: 1 },
    { lat: 6, lon: -5 },
    { lat: 5, lon: -9 },
    { lat: 7, lon: -13 },
    { lat: 11, lon: -16 },
    { lat: 15, lon: -17 },
    { lat: 20, lon: -17 },
    { lat: 24, lon: -15 },
    { lat: 28, lon: -13 },
    { lat: 31, lon: -10 },
    { lat: 35, lon: -8 },
    { lat: 37, lon: -9 },
  ],
  [
    { lat: 36, lon: -6 },
    { lat: 43, lon: -10 },
    { lat: 46, lon: -1 },
    { lat: 50, lon: 1 },
    { lat: 52, lon: 4 },
    { lat: 54, lon: 8 },
    { lat: 57, lon: 10 },
    { lat: 59, lon: 17 },
    { lat: 61, lon: 24 },
    { lat: 64, lon: 28 },
    { lat: 68, lon: 40 },
    { lat: 71, lon: 55 },
    { lat: 72, lon: 78 },
    { lat: 70, lon: 100 },
    { lat: 66, lon: 125 },
    { lat: 60, lon: 145 },
    { lat: 53, lon: 150 },
    { lat: 46, lon: 142 },
    { lat: 43, lon: 132 },
    { lat: 38, lon: 124 },
    { lat: 36, lon: 121 },
    { lat: 31, lon: 122 },
    { lat: 22, lon: 120 },
    { lat: 18, lon: 109 },
    { lat: 20, lon: 106 },
    { lat: 21, lon: 101 },
    { lat: 14, lon: 100 },
    { lat: 8, lon: 98 },
    { lat: 7, lon: 80 },
    { lat: 10, lon: 77 },
    { lat: 15, lon: 73 },
    { lat: 22, lon: 72 },
    { lat: 25, lon: 66 },
    { lat: 25, lon: 60 },
    { lat: 22, lon: 57 },
    { lat: 18, lon: 55 },
    { lat: 16, lon: 52 },
    { lat: 13, lon: 50 },
    { lat: 12, lon: 44 },
    { lat: 15, lon: 42 },
    { lat: 20, lon: 39 },
    { lat: 24, lon: 35 },
    { lat: 31, lon: 32 },
    { lat: 36, lon: 29 },
    { lat: 40, lon: 26 },
    { lat: 41, lon: 20 },
    { lat: 43, lon: 15 },
    { lat: 44, lon: 9 },
    { lat: 43, lon: 5 },
    { lat: 41, lon: 0 },
    { lat: 38, lon: -4 },
    { lat: 36, lon: -6 },
  ],
  [
    { lat: 50, lon: -6 },
    { lat: 52, lon: -5 },
    { lat: 55, lon: -4 },
    { lat: 58, lon: -3 },
    { lat: 57, lon: 0 },
    { lat: 54, lon: 1 },
    { lat: 51, lon: 0 },
    { lat: 50, lon: -3 },
    { lat: 50, lon: -6 },
  ],
  [
    { lat: 64, lon: -24 },
    { lat: 66, lon: -22 },
    { lat: 66, lon: -18 },
    { lat: 65, lon: -14 },
    { lat: 64, lon: -17 },
    { lat: 64, lon: -24 },
  ],
  [
    { lat: -10, lon: 113 },
    { lat: -16, lon: 122 },
    { lat: -19, lon: 126 },
    { lat: -22, lon: 130 },
    { lat: -26, lon: 134 },
    { lat: -31, lon: 138 },
    { lat: -35, lon: 142 },
    { lat: -38, lon: 146 },
    { lat: -39, lon: 151 },
    { lat: -35, lon: 153 },
    { lat: -29, lon: 153 },
    { lat: -24, lon: 152 },
    { lat: -18, lon: 146 },
    { lat: -14, lon: 141 },
    { lat: -12, lon: 135 },
    { lat: -13, lon: 129 },
    { lat: -15, lon: 124 },
    { lat: -17, lon: 119 },
    { lat: -14, lon: 115 },
    { lat: -10, lon: 113 },
  ],
  [
    { lat: -13, lon: 49 },
    { lat: -16, lon: 50 },
    { lat: -20, lon: 48 },
    { lat: -24, lon: 47 },
    { lat: -26, lon: 45 },
    { lat: -22, lon: 44 },
    { lat: -18, lon: 46 },
    { lat: -15, lon: 48 },
    { lat: -13, lon: 49 },
  ],
  [
    { lat: -35, lon: 174 },
    { lat: -38, lon: 176 },
    { lat: -41, lon: 174 },
    { lat: -44, lon: 170 },
    { lat: -46, lon: 167 },
    { lat: -43, lon: 168 },
    { lat: -39, lon: 172 },
    { lat: -35, lon: 174 },
  ],
];

const parallels = Array.from({ length: 17 }, (_, index) => {
  const latitude = -60 + index * 10;

  return Array.from({ length: 181 }, (_, pointIndex) => ({
    lat: latitude,
    lon: -180 + pointIndex * 2,
  }));
});

const meridians = Array.from({ length: 25 }, (_, index) => {
  const longitude = -180 + index * 15;

  return Array.from({ length: 171 }, (_, pointIndex) => ({
    lat: -85 + pointIndex,
    lon: longitude,
  }));
});

const globeDots = Array.from({ length: 31 }, (_, row) => {
  const latitude = -70 + row * 5;

  return Array.from({ length: 46 }, (_, column) => ({
    lat: latitude,
    lon: -180 + column * 8,
  }));
}).flat();

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const normalizeLongitude = (longitude: number) => {
  const normalized = ((longitude + 180) % 360 + 360) % 360 - 180;
  return normalized === -180 ? 180 : normalized;
};

const isVisible = (depth: number, threshold = 0) => depth > threshold;

const projectPoint = (point: GeoPoint, rotation: Rotation): ProjectedPoint => {
  const latitude = (point.lat * Math.PI) / 180;
  const longitude = (point.lon * Math.PI) / 180;
  const centerLatitude = (rotation.lat * Math.PI) / 180;
  const centerLongitude = (rotation.lon * Math.PI) / 180;
  const longitudeDelta = longitude - centerLongitude;
  const sinLatitude = Math.sin(latitude);
  const cosLatitude = Math.cos(latitude);
  const sinCenterLatitude = Math.sin(centerLatitude);
  const cosCenterLatitude = Math.cos(centerLatitude);
  const cosDelta = Math.cos(longitudeDelta);
  const sinDelta = Math.sin(longitudeDelta);
  const depth = sinCenterLatitude * sinLatitude + cosCenterLatitude * cosLatitude * cosDelta;
  const visible = isVisible(depth);
  const x = GLOBE_CENTER_X + GLOBE_RADIUS * cosLatitude * sinDelta;
  const y = GLOBE_CENTER_Y - GLOBE_RADIUS * (cosCenterLatitude * sinLatitude - sinCenterLatitude * cosLatitude * cosDelta);

  return { x, y, visible, depth };
};

const buildVisiblePaths = (line: GeoPoint[], rotation: Rotation, threshold = -0.05) => {
  const paths: string[] = [];
  let currentSegment = '';
  let visiblePoints = 0;

  line.forEach((point) => {
    const projected = projectPoint(point, rotation);

    if (isVisible(projected.depth, threshold)) {
      const command = currentSegment ? 'L' : 'M';
      currentSegment += `${command}${projected.x.toFixed(2)} ${projected.y.toFixed(2)} `;
      visiblePoints += 1;
      return;
    }

    if (visiblePoints > 1) {
      paths.push(currentSegment.trim());
    }

    currentSegment = '';
    visiblePoints = 0;
  });

  if (visiblePoints > 1) {
    paths.push(currentSegment.trim());
  }

  return paths;
};

const updateRotationFromDelta = (rotation: Rotation, deltaX: number, deltaY: number) => ({
  lon: normalizeLongitude(rotation.lon - deltaX * 0.28),
  lat: clamp(rotation.lat + deltaY * 0.2, -LATITUDE_LIMIT, LATITUDE_LIMIT),
});

export const LocationGlobe = ({ markerLabel }: LocationGlobeProps) => {
  const defsId = useId().replace(/:/g, '');
  const [rotation, setRotation] = useState(INITIAL_ROTATION);
  const [isDragging, setIsDragging] = useState(false);
  const rotationRef = useRef(INITIAL_ROTATION);
  const velocityRef = useRef({ lon: 0, lat: 0 });
  const dragRef = useRef({
    dragging: false,
    pointerId: -1,
    x: 0,
    y: 0,
    time: 0,
  });

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  useEffect(() => {
    let frameId = 0;
    let previousTime = performance.now();

    const tick = (time: number) => {
      const deltaSeconds = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (!dragRef.current.dragging) {
        velocityRef.current.lon *= Math.exp(-4 * deltaSeconds);
        velocityRef.current.lat *= Math.exp(-5 * deltaSeconds);
        const longitudinalSpeed = IDLE_SPIN_SPEED + velocityRef.current.lon;
        const latitudinalSpeed = velocityRef.current.lat;

        if (Math.abs(longitudinalSpeed) > 0.01 || Math.abs(latitudinalSpeed) > 0.01) {
          const nextRotation = {
            lon: normalizeLongitude(rotationRef.current.lon + longitudinalSpeed * deltaSeconds),
            lat: clamp(
              rotationRef.current.lat + latitudinalSpeed * deltaSeconds,
              -LATITUDE_LIMIT,
              LATITUDE_LIMIT
            ),
          };

          rotationRef.current = nextRotation;
          setRotation(nextRotation);
        }
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      dragging: true,
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      time: performance.now(),
    };
    velocityRef.current = { lon: 0, lat: 0 };
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    const now = performance.now();
    const deltaX = event.clientX - dragRef.current.x;
    const deltaY = event.clientY - dragRef.current.y;
    const elapsed = Math.max(now - dragRef.current.time, 16);
    const nextRotation = updateRotationFromDelta(rotationRef.current, deltaX, deltaY);

    rotationRef.current = nextRotation;
    setRotation(nextRotation);
    velocityRef.current = {
      lon: (-deltaX * 0.28) / (elapsed / 1000),
      lat: (deltaY * 0.2) / (elapsed / 1000),
    };
    dragRef.current = {
      ...dragRef.current,
      x: event.clientX,
      y: event.clientY,
      time: now,
    };
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current.dragging = false;
    dragRef.current.pointerId = -1;
    setIsDragging(false);
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    dragRef.current.dragging = false;
    dragRef.current.pointerId = -1;
    setIsDragging(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      return;
    }

    event.preventDefault();
    const nextRotation = {
      lon:
        event.key === 'ArrowLeft'
          ? normalizeLongitude(rotationRef.current.lon - 8)
          : event.key === 'ArrowRight'
            ? normalizeLongitude(rotationRef.current.lon + 8)
            : rotationRef.current.lon,
      lat:
        event.key === 'ArrowUp'
          ? clamp(rotationRef.current.lat + 6, -LATITUDE_LIMIT, LATITUDE_LIMIT)
          : event.key === 'ArrowDown'
            ? clamp(rotationRef.current.lat - 6, -LATITUDE_LIMIT, LATITUDE_LIMIT)
            : rotationRef.current.lat,
    };

    rotationRef.current = nextRotation;
    setRotation(nextRotation);
  };

  const markerProjection = projectPoint(MARKER_POINT, rotation);
  const globeOutlineId = `${defsId}-outline`;
  const globeGlowId = `${defsId}-glow`;
  const markerGlowId = `${defsId}-marker`;

  return (
    <div
      className={`relative mx-auto w-full max-w-[1180px] select-none outline-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      aria-label={markerLabel}
      role="img"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerCancel={handlePointerCancel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{ touchAction: 'none' }}
    >
      <div className="pointer-events-none absolute inset-x-[14%] top-[10%] h-20 rounded-full bg-white/6 blur-3xl" />
      <svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} className="h-auto w-full overflow-visible">
        <defs>
          <radialGradient id={globeGlowId} cx="50%" cy="15%" r="72%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
            <stop offset="42%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <clipPath id={globeOutlineId}>
            <circle cx={GLOBE_CENTER_X} cy={GLOBE_CENTER_Y} r={GLOBE_RADIUS} />
          </clipPath>
          <filter id={markerGlowId} x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="11" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 0.427 0 0 0
                      0 0 0.157 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>

        <circle
          cx={GLOBE_CENTER_X}
          cy={GLOBE_CENTER_Y}
          r={GLOBE_RADIUS}
          fill={`url(#${globeGlowId})`}
          opacity="0.68"
        />

        <g clipPath={`url(#${globeOutlineId})`}>
          <circle
            cx={GLOBE_CENTER_X}
            cy={GLOBE_CENTER_Y}
            r={GLOBE_RADIUS}
            fill="rgba(255,255,255,0.015)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.5"
          />

          {globeDots.map((point) => {
            const projected = projectPoint(point, rotation);

            if (!isVisible(projected.depth, 0.02)) {
              return null;
            }

            return (
              <circle
                key={`${point.lat}-${point.lon}`}
                cx={projected.x}
                cy={projected.y}
                r={1.45 + projected.depth * 0.2}
                fill="rgba(255,255,255,0.30)"
                opacity={0.22 + projected.depth * 0.55}
              />
            );
          })}

          {parallels.flatMap((line, index) =>
            buildVisiblePaths(line, rotation, -0.03).map((path, segmentIndex) => (
              <path
                key={`parallel-${index}-${segmentIndex}`}
                d={path}
                fill="none"
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="1.4"
              />
            ))
          )}

          {meridians.flatMap((line, index) =>
            buildVisiblePaths(line, rotation, -0.03).map((path, segmentIndex) => (
              <path
                key={`meridian-${index}-${segmentIndex}`}
                d={path}
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.35"
              />
            ))
          )}

          {coastlineLines.flatMap((line, index) =>
            buildVisiblePaths(line, rotation, -0.08).flatMap((path, segmentIndex) => ([
              <path
                key={`coast-glow-${index}-${segmentIndex}`}
                d={path}
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
              />,
              <path
                key={`coast-${index}-${segmentIndex}`}
                d={path}
                fill="none"
                stroke="rgba(255,255,255,0.96)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
              />,
            ]))
          )}

          <circle
            cx={GLOBE_CENTER_X}
            cy={GLOBE_CENTER_Y}
            r={GLOBE_RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.5"
          />
        </g>

        {isVisible(markerProjection.depth, 0.12) && (
          <g>
            <circle
              cx={markerProjection.x}
              cy={markerProjection.y}
              r="18"
              fill="#ff6d28"
              opacity="0.16"
              filter={`url(#${markerGlowId})`}
            >
              <animate attributeName="r" values="16;28;16" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.18;0.3;0.18" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx={markerProjection.x} cy={markerProjection.y} r="7.5" fill="#ff6d28" />
            <circle cx={markerProjection.x} cy={markerProjection.y} r="2.4" fill="#fff7ef" />
          </g>
        )}
      </svg>
    </div>
  );
};
