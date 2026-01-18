import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  height?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ height = '250px' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([48.5230, 9.2280], 15);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: #facc15;
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #0f172a;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <span style="
            transform: rotate(45deg);
            font-size: 20px;
            color: #0f172a;
          ">📍</span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    // Add marker
    L.marker([48.5230, 9.2280], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: 'Open Sans', sans-serif; text-align: center;">
          <strong style="color: #1e293b; font-size: 14px;">ROYAL SERVICE</strong><br/>
          <span style="color: #64748b; font-size: 12px;">Hansenstraße 20<br/>72770 Ohmenhausen</span>
        </div>
      `)
      .openPopup();

    mapInstanceRef.current = map;

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="rounded-2xl overflow-hidden border border-slate-700 shadow-lg"
      style={{
        height: height,
        width: '100%',
        filter: 'grayscale(100%) opacity(0.8)'
      }}
    />
  );
};

export default MapComponent;
