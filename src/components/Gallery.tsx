import React, { useState, useEffect } from 'react';
import {
  Image as ImageIcon,
  MapPin,
  Calendar,
  Maximize2,
  X,
  Upload,
  Plus,
  Filter,
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/portfolioData';
import { GalleryPhoto, Language } from '../types';
import { PortraitArtwork } from './PortraitArtwork';

interface GalleryProps {
  lang: Language;
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [photos, setPhotos] = useState<GalleryPhoto[]>(GALLERY_PHOTOS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<GalleryPhoto['category']>('social_work');
  const [newLocation, setNewLocation] = useState('Kasganj, UP');
  const [newDesc, setNewDesc] = useState('');
  const [newCustomImage, setNewCustomImage] = useState<string>('');

  // Load custom photos from localStorage if any
  useEffect(() => {
    try {
      const saved = localStorage.getItem('praveen_portfolio_custom_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPhotos([...GALLERY_PHOTOS, ...parsed]);
        }
      }
    } catch {
      // fallback
    }
  }, []);

  const categories = [
    { id: 'all', labelEn: 'All Photos', labelHi: 'सभी चित्र' },
    { id: 'social_work', labelEn: 'Social Work', labelHi: 'समाज सेवा' },
    { id: 'community_events', labelEn: 'Community Events', labelHi: 'सामुदायिक आयोजन' },
    { id: 'public_meetings', labelEn: 'Public Meetings', labelHi: 'जनसंवाद व सभाएं' },
    { id: 'rural_development', labelEn: 'Rural Development', labelHi: 'ग्रामीण विकास' },
    { id: 'awareness', labelEn: 'Awareness Programs', labelHi: 'जागरूकता कार्यक्रम' },
    { id: 'trust_activities', labelEn: 'Trust Activities', labelHi: 'ट्रस्ट कार्य' },
    { id: 'professional', labelEn: 'Professional Life', labelHi: 'व्यावसायिक जीवन' },
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCustomImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newPhotoItem: GalleryPhoto = {
      id: `custom-${Date.now()}`,
      titleEn: newTitle,
      titleHi: newTitle,
      category: newCategory,
      date: 'Recent 2026',
      location: newLocation || 'Kasganj, UP',
      descriptionEn: newDesc || newTitle,
      descriptionHi: newDesc || newTitle,
      imageTheme: 'office_digital',
      accentColor: '#1e3a8a',
    };

    const updated = [newPhotoItem, ...photos];
    setPhotos(updated);

    // Save custom additions to localStorage
    try {
      const customOnly = updated.filter((p) => p.id.startsWith('custom-'));
      localStorage.setItem('praveen_portfolio_custom_photos', JSON.stringify(customOnly));
    } catch {
      // ignore storage error
    }

    setShowAddModal(false);
    setNewTitle('');
    setNewDesc('');
    setNewCustomImage('');
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Add Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
              <ImageIcon className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'hi' ? 'चित्र दीर्घा' : 'Visual Records & Field Gallery'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              {lang === 'hi' ? 'तस्वीरें एवं जनसंवाद दीर्घा' : 'Photo Gallery'}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          </div>

          {/* Owner Quick Upload / Add Photo action */}
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold self-start sm:self-auto cursor-pointer transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>{lang === 'hi' ? 'नया चित्र जोड़ें' : 'Add Photo'}</span>
          </button>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl max-w-fit mb-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Photo Frame Container */}
              <div className="relative h-56 bg-slate-900 overflow-hidden flex items-center justify-center">
                <PortraitArtwork
                  type={
                    photo.imageTheme === 'speech_assembly'
                      ? 'rally'
                      : photo.imageTheme === 'elder_dialogue'
                      ? 'elder'
                      : photo.imageTheme === 'office_digital'
                      ? 'team'
                      : 'office'
                  }
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  alt={photo.titleEn}
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                <div className="absolute bottom-3 right-3 p-1.5 bg-black/60 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption & Metadata */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1">
                  <span className="font-semibold text-amber-700 uppercase">
                    {photo.category.replace('_', ' ')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{photo.date}</span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-blue-900 transition-colors">
                  {lang === 'hi' ? photo.titleHi : photo.titleEn}
                </h4>

                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {lang === 'hi' ? photo.descriptionHi : photo.descriptionEn}
                </p>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl text-white">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
                <div className="md:col-span-8 bg-slate-900 flex items-center justify-center min-h-[320px] md:min-h-[480px]">
                  <PortraitArtwork
                    type={
                      selectedPhoto.imageTheme === 'speech_assembly'
                        ? 'rally'
                        : selectedPhoto.imageTheme === 'elder_dialogue'
                        ? 'elder'
                        : selectedPhoto.imageTheme === 'office_digital'
                        ? 'team'
                        : 'office'
                    }
                    className="w-full h-full min-h-[340px]"
                    alt={selectedPhoto.titleEn}
                  />
                </div>

                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="inline-block text-xs uppercase font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20 mb-2">
                      {selectedPhoto.category.replace('_', ' ')}
                    </div>

                    <h3 className="text-xl font-bold font-display text-white mt-1">
                      {lang === 'hi' ? selectedPhoto.titleHi : selectedPhoto.titleEn}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 pb-3 border-b border-slate-800">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{selectedPhoto.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        <span>{selectedPhoto.location}</span>
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {lang === 'hi' ? selectedPhoto.descriptionHi : selectedPhoto.descriptionEn}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-[11px] text-slate-400">
                      {lang === 'hi'
                        ? 'प्रवीण कुमार मिश्र - आधिकारिक सार्वजनिक कार्य चित्र'
                        : 'Praveen Kumar Mishra - Verified Public Activity Archive'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add Photo Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative">
              <button
                onClick={() => setShowAddModal(false)}
                className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'गैलरी में चित्र जोड़ें' : 'Add Photo to Gallery'}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                {lang === 'hi'
                  ? 'अपनी किसी भी सामाजिक गतिविधि का चित्र अपलोड करें या विवरण जोड़ें।'
                  : 'Add title and field documentation details to your gallery archive.'}
              </p>

              <form onSubmit={handleAddPhotoSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {lang === 'hi' ? 'चित्र शीर्षक *' : 'Photo Title *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Rural School Inspection"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {lang === 'hi' ? 'वर्ग (Category)' : 'Category'}
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  >
                    <option value="social_work">Social Work</option>
                    <option value="community_events">Community Events</option>
                    <option value="public_meetings">Public Meetings</option>
                    <option value="rural_development">Rural Development</option>
                    <option value="awareness">Awareness Programs</option>
                    <option value="trust_activities">Trust Activities</option>
                    <option value="professional">Professional Life</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {lang === 'hi' ? 'स्थान' : 'Location'}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Kasganj, UP"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    {lang === 'hi' ? 'संक्षिप्त विवरण' : 'Description'}
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Details about this field visit..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-3 py-1.5 bg-slate-100 rounded-lg text-slate-700"
                  >
                    {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-blue-950 text-white rounded-lg font-bold"
                  >
                    {lang === 'hi' ? 'जोड़ें' : 'Save Photo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
