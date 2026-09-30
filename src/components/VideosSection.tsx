import React, { useState } from 'react';
import {
  Video as VideoIcon,
  Play,
  Pause,
  Volume2,
  Calendar,
  Clock,
  MapPin,
  Share2,
  X,
  Sparkles,
  Quote,
} from 'lucide-react';
import { VIDEOS_DATA } from '../data/portfolioData';
import { Language, VideoItem } from '../types';

interface VideosSectionProps {
  lang: Language;
}

export const VideosSection: React.FC<VideosSectionProps> = ({ lang }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Videos', labelHi: 'सभी वीडियो' },
    { id: 'public_issues', labelEn: 'Public Issues', labelHi: 'जनमुद्दे' },
    { id: 'interviews', labelEn: 'Interviews & Addresses', labelHi: 'सीधा संवाद' },
    { id: 'social_work', labelEn: 'Social Work', labelHi: 'समाज सेवा' },
    { id: 'development', labelEn: 'Development', labelHi: 'विकास चर्चा' },
  ];

  const filtered =
    activeTab === 'all'
      ? VIDEOS_DATA
      : VIDEOS_DATA.filter((v) => v.category === activeTab);

  const handleOpenVideo = (v: VideoItem) => {
    setSelectedVideo(v);
    setIsPlaying(true);
  };

  return (
    <section id="videos" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <VideoIcon className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'भाषण एवं संवाद संग्रह' : 'Public Speeches & Addresses'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'वीडियो एवं जनसंवाद वक्तव्य' : 'Videos & Speeches'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'hi'
              ? 'कासगंज में सार्वजनिक मंचों से दिए गए प्रमुख भाषण, जनता से सीधा संवाद और सामाजिक मुद्दों पर विचार।'
              : 'Recorded field addresses, direct-to-camera citizen appeals, and discussions on public governance.'}
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-fit mb-8 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === c.id
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? c.labelHi : c.labelEn}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              {/* Video Thumbnail Frame */}
              <div
                onClick={() => handleOpenVideo(video)}
                className="relative h-48 bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center"
              >
                {/* Visual Backdrop gradient with spotlight */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-blue-950 to-slate-900" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.2),transparent_70%)]" />

                {/* Big YouTube-style Play Button */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-600 transition-all">
                  <Play className="w-6 h-6 ml-0.5 fill-current" />
                </div>

                {/* Duration Tag */}
                <div className="absolute bottom-2.5 right-2.5 z-10 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono font-medium">
                  {video.duration}
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-amber-300 text-[10px] uppercase font-bold tracking-wider">
                  {video.category.replace('_', ' ')}
                </div>
              </div>

              {/* Video Metadata & Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{video.date}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{video.location}</span>
                    </span>
                  </div>

                  <h3
                    onClick={() => handleOpenVideo(video)}
                    className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors cursor-pointer leading-snug"
                  >
                    {lang === 'hi' ? video.titleHi : video.titleEn}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {lang === 'hi' ? video.descriptionHi : video.descriptionEn}
                  </p>
                </div>

                {/* Hindi Quote highlight if present */}
                {video.speechQuoteHindi && (
                  <div className="mt-4 pt-3 border-t border-slate-100 bg-amber-50/50 -mx-5 -mb-5 p-4 rounded-b-2xl">
                    <div className="flex items-start gap-1.5 text-xs text-amber-950 italic">
                      <Quote className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <p className="line-clamp-2 font-medium">
                        "{lang === 'hi' ? video.speechQuoteHindi : video.speechQuoteEnglish}"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl text-white">
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  setIsPlaying(false);
                }}
                className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Simulated Video Player Screen */}
              <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-6 border-b border-slate-800">
                {/* Video backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950 to-black pointer-events-none" />

                {/* Animated sound wave simulation when playing */}
                <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400/40 flex items-center justify-center text-amber-300 mb-4 animate-pulse">
                    <Volume2 className="w-8 h-8" />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                    {lang === 'hi' ? 'आधिकारिक भाषण ऑडियो/वीडियो' : 'Official Speech Recording'}
                  </span>

                  <h4 className="text-lg sm:text-xl font-bold font-display text-white">
                    {lang === 'hi' ? selectedVideo.titleHi : selectedVideo.titleEn}
                  </h4>

                  {/* Speech Quotation in video frame */}
                  {selectedVideo.speechQuoteHindi && (
                    <div className="mt-4 p-4 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-xs sm:text-sm text-amber-100 italic leading-relaxed">
                      "{lang === 'hi' ? selectedVideo.speechQuoteHindi : selectedVideo.speechQuoteEnglish}"
                    </div>
                  )}

                  {/* Controls Bar */}
                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-4 h-4 fill-current" />
                          <span>{lang === 'hi' ? 'रोकें' : 'Pause'}</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>{lang === 'hi' ? 'चलाएं' : 'Play'}</span>
                        </>
                      )}
                    </button>
                    <span className="text-xs font-mono text-slate-400">00:15 / {selectedVideo.duration}</span>
                  </div>
                </div>

                {/* Bottom Scrubber */}
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-slate-800">
                  <div className="h-full bg-amber-400 w-1/3 transition-all" />
                </div>
              </div>

              {/* Video Details Pane */}
              <div className="p-6 bg-slate-900">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{selectedVideo.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{selectedVideo.location}</span>
                    </span>
                  </div>

                  <span className="text-xs text-amber-400 font-semibold uppercase">
                    {selectedVideo.category.replace('_', ' ')}
                  </span>
                </div>

                <div className="mt-3 text-xs sm:text-sm text-slate-300 space-y-2">
                  <p>{lang === 'hi' ? selectedVideo.descriptionHi : selectedVideo.descriptionEn}</p>
                  <p className="text-slate-400 text-xs">
                    <strong className="text-white">
                      {lang === 'hi' ? 'मुख्य संदेश: ' : 'Key Takeaway: '}
                    </strong>
                    {lang === 'hi' ? selectedVideo.keyTakeawayHi : selectedVideo.keyTakeawayEn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
