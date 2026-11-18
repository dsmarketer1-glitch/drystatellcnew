import React from 'react';
import { osmEmbedUrl } from '../lib/maps';
import { buildPinSchema } from '../lib/schema';

// A single completed-job card: photo, description, address, embedded OSM map,
// and JSON-LD Service schema for local SEO.
function PinCard({ pin }) {
  const schema = buildPinSchema(pin);
  return (
    <article className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {pin.photoUrl && (
        <img
          src={pin.photoUrl}
          alt={pin.description || 'Completed job'}
          loading="lazy"
          className="w-full h-52 object-cover"
        />
      )}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-[15px] text-[#00123d] font-medium leading-relaxed">{pin.description}</p>
        {pin.address && (
          <p className="text-[13px] text-[#757681] flex items-start gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#b6171e] mt-[1px]">location_on</span>
            <span>{pin.address}</span>
          </p>
        )}
        {typeof pin.lat === 'number' && (
          <iframe
            title={`Job location${pin.address ? ` — ${pin.address}` : ''}`}
            src={osmEmbedUrl(pin.lat, pin.lng)}
            loading="lazy"
            className="w-full h-40 border-0 rounded-lg mt-1"
          />
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </article>
  );
}

export default PinCard;
