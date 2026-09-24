import React from 'react';
import { X, MapPin, Clock, Phone, Star, Heart, CheckCircle2, Navigation } from 'lucide-react';

export default function MarketDetailModal({
  market,
  onClose,
  isBookmarked,
  onToggleBookmark
}) {
  if (!market) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <img src={market.image} alt={market.name} className="modal-header-img" />

        <div className="modal-body">
          <div className="flex justify-between items-start gap-4 mb-3">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">{market.area} Neighborhood</span>
              <h2 className="text-2xl font-extrabold text-slate-800">{market.name}</h2>
            </div>
            <button
              className={`bookmark-header-btn ${isBookmarked ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
              onClick={() => onToggleBookmark(market.id)}
            >
              <Heart size={18} fill={isBookmarked ? '#ef4444' : 'none'} color={isBookmarked ? '#ef4444' : 'currentColor'} />
              <span>{isBookmarked ? 'Bookmarked' : 'Save Market'}</span>
            </button>
          </div>

          {/* Rating and status */}
          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1 font-bold text-slate-800">
              <Star size={16} className="text-amber-400 fill-amber-400" />
              <span>{market.rating}</span>
              <span className="text-slate-400 font-normal">({market.reviewsCount} reviews)</span>
            </div>
            <span className={`status-badge ${market.isOpenToday ? 'status-open' : 'status-closed'}`}>
              {market.isOpenToday ? 'Open Today' : 'Closed Today'}
            </span>
          </div>

          <p className="text-slate-600 text-sm mb-6 leading-relaxed">{market.description}</p>

          {/* Location & Contact Info */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-sm mb-6">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin size={16} className="text-emerald-700 flex-shrink-0" />
              <span><strong>Address:</strong> {market.address}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Clock size={16} className="text-amber-600 flex-shrink-0" />
              <span><strong>Operating Schedule:</strong> {market.openDaysText}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Phone size={16} className="text-emerald-700 flex-shrink-0" />
              <span><strong>Phone:</strong> {market.phone}</span>
            </div>
          </div>

          {/* Embedded Google Map Simulation Frame */}
          <div className="mb-6">
            <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <Navigation size={16} className="text-emerald-700" /> Market Location Map
            </h4>
            <div className="w-full h-44 rounded-xl bg-slate-200 overflow-hidden relative border border-slate-300">
              <iframe
                title="Google Maps Market Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(market.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Produce Items Available */}
          <div>
            <h4 className="font-bold text-slate-800 text-sm mb-2">Available Organic Produce & Products</h4>
            <div className="grid grid-cols-2 gap-2">
              {market.produceTypes.map((type, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100">
                  <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
