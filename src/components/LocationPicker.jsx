import React, { useEffect, useRef, useState } from 'react';
import { nominatimReverse, nominatimSearch } from '../lib/maps';

const LEAFLET_JS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
const LEAFLET_CSS = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
const DFW_CENTER = [32.7767, -96.797]; // Dallas–Fort Worth

function ensureLeafletCss() {
  if (document.querySelector(`link[href="${LEAFLET_CSS}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = LEAFLET_CSS;
  document.head.appendChild(link);
}

// Searchable, click-to-place, draggable-marker location picker.
// Calls onChange({ lat, lng, address }) whenever the location changes.
export default function LocationPicker({ onChange }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const [search, setSearch] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    let cancelled = false;
    ensureLeafletCss();

    const init = () => {
      if (cancelled || !window.L || mapRef.current) return;
      const L = window.L;
      const map = L.map('pin-map').setView(DFW_CENTER, 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);
      const marker = L.marker(DFW_CENTER, { draggable: true }).addTo(map);
      mapRef.current = map;
      markerRef.current = marker;

      const emit = async (lat, lng) => {
        const addr = await nominatimReverse(lat, lng);
        setAddress(addr);
        onChangeRef.current({ lat, lng, address: addr });
      };
      marker.on('dragend', () => {
        const { lat, lng } = marker.getLatLng();
        emit(lat, lng);
      });
      map.on('click', (e) => {
        marker.setLatLng(e.latlng);
        emit(e.latlng.lat, e.latlng.lng);
      });
      // Fix Leaflet sizing inside flex/animated containers.
      setTimeout(() => map.invalidateSize(), 200);
    };

    const existing = document.querySelector(`script[src="${LEAFLET_JS}"]`);
    if (window.L) init();
    else if (existing) existing.addEventListener('load', init);
    else {
      const s = document.createElement('script');
      s.src = LEAFLET_JS;
      s.onload = init;
      document.body.appendChild(s);
    }

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const hit = await nominatimSearch(search);
    if (hit && mapRef.current && markerRef.current) {
      mapRef.current.setView([hit.lat, hit.lng], 15);
      markerRef.current.setLatLng([hit.lat, hit.lng]);
      setAddress(hit.address);
      onChangeRef.current(hit);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex gap-2 mb-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search an address or place…"
          className="flex-1 border border-slate-300 rounded-lg p-3 text-[15px] outline-none focus:ring-2 focus:ring-[#00123d]"
        />
        <button
          type="submit"
          className="bg-[#00123d] text-white font-bold px-5 rounded-lg hover:bg-[#0f265c] transition-colors"
        >
          Find
        </button>
      </form>
      <div id="pin-map" className="h-72 rounded-lg overflow-hidden border border-slate-200" />
      {address && <p className="text-[13px] text-[#44464f] mt-2">{address}</p>}
      <p className="text-[12px] text-[#757681] mt-1">
        Tip: search an address, or tap/drag the pin to set the exact job location.
      </p>
    </div>
  );
}
