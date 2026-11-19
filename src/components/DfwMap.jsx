import React from 'react';
import { mapPins } from '../data/serviceAreas';

// Stylized DFW service-area map: a red service-radius over a light map, with
// labeled city pins, a center label, and interstate shields. Pure inline SVG.
const NAVY = '#00123d';
const RED = '#b6171e';

function Shield({ x, y, label }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <path
        d="M0,-13 L13,-9 L13,3 C13,11 7,15 0,18 C-7,15 -13,11 -13,3 L-13,-9 Z"
        fill="#1b3a8f"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      <rect x="-13" y="-13" width="26" height="7" rx="1" fill="#c0392b" />
      <text x="0" y="8" textAnchor="middle" fontSize="9" fontWeight="800" fill="#ffffff" fontFamily="Arial, sans-serif">
        {label}
      </text>
    </g>
  );
}

function Pin({ label, x, y, lx, ly }) {
  const w = label.length * 6.1 + 16;
  return (
    <g>
      {/* teardrop pin, tip at (x, y) */}
      <path
        d={`M${x},${y} c-6,-8 -8,-12 -8,-17 a8,8 0 1,1 16,0 c0,5 -2,9 -8,17 z`}
        fill={RED}
      />
      <circle cx={x} cy={y - 17} r="3.2" fill="#ffffff" />
      {/* label pill */}
      <g filter="url(#pinShadow)">
        <rect x={lx - w / 2} y={ly - 11} width={w} height="22" rx="11" fill="#ffffff" />
      </g>
      <text x={lx} y={ly + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill={NAVY} fontFamily="'Work Sans', Arial, sans-serif">
        {label}
      </text>
    </g>
  );
}

function DfwMap() {
  return (
    <svg viewBox="0 0 480 400" className="w-full" role="img" aria-label="DryState service radius across the Dallas–Fort Worth metroplex">
      <defs>
        <radialGradient id="radiusFill" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={RED} stopOpacity="0.14" />
          <stop offset="75%" stopColor={RED} stopOpacity="0.07" />
          <stop offset="100%" stopColor={RED} stopOpacity="0.03" />
        </radialGradient>
        <filter id="pinShadow" x="-20%" y="-40%" width="140%" height="180%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#00123d" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* map backdrop */}
      <rect x="0" y="0" width="480" height="400" rx="18" fill="#f3f6fb" />

      {/* faint water (lakes) */}
      <ellipse cx="250" cy="90" rx="46" ry="16" fill="#cdddf2" opacity="0.6" />
      <ellipse cx="430" cy="250" rx="30" ry="40" fill="#cdddf2" opacity="0.6" />
      <ellipse cx="55" cy="330" rx="34" ry="18" fill="#cdddf2" opacity="0.5" />

      {/* faint roads */}
      <g stroke="#d4dce6" strokeWidth="2.5" fill="none" opacity="0.8">
        <path d="M120,-10 L150,180 L120,420" />
        <path d="M320,-10 L300,200 L340,420" />
        <path d="M-10,235 L500,250" />
        <path d="M-10,350 L250,300 L500,330" />
        <path d="M60,60 L420,360" />
      </g>

      {/* service radius */}
      <circle cx="235" cy="212" r="185" fill="url(#radiusFill)" stroke={RED} strokeOpacity="0.55" strokeWidth="2" strokeDasharray="6 7" />

      {/* center label */}
      <text x="235" y="206" textAnchor="middle" fontSize="30" fontWeight="900" fill={NAVY} fontFamily="'Work Sans', Arial, sans-serif" letterSpacing="1">DFW</text>
      <text x="235" y="224" textAnchor="middle" fontSize="11" fontWeight="700" fill="#6b7280" fontFamily="'Work Sans', Arial, sans-serif" letterSpacing="2">METROPLEX</text>

      {/* interstate shields */}
      <Shield x={118} y={110} label="35W" />
      <Shield x={322} y={104} label="35E" />
      <Shield x={428} y={236} label="30" />
      <Shield x={150} y={352} label="20" />

      {/* city pins */}
      {mapPins.map((p) => (
        <Pin key={p.label} {...p} />
      ))}
    </svg>
  );
}

export default DfwMap;
