import { motion } from "motion/react";
import { X, Play, Plus, Share2, Pause } from "lucide-react";
import { useState } from "react";
import { WaveformVisualizer } from "./WaveformVisualizer";

interface RecordDetailScreenProps {
  recordId: number;
  onClose: () => void;
}

export function RecordDetailScreen({ recordId, onClose }: RecordDetailScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInCrate, setIsInCrate] = useState(false);

  // Mock data - in real app this would be fetched based on recordId
  const record = {
    image: "https://images.unsplash.com/photo-1583927109257-f21c74dd0c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwdGVjaG5vfGVufDF8fHx8MTc2MjMxOTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    artist: "BLAWAN",
    title: "Wet Will Always Dry",
    label: "Ternesc",
    year: "2024",
    format: "12\" · 33 RPM",
    genre: ["TECHNO", "EXPERIMENTAL"],
    bpm: "138",
    price: "€18.00",
    inStock: true,
    tracks: [
      { side: "A", title: "Wet Will Always Dry", duration: "6:32" },
      { side: "A", title: "Peak Blinder", duration: "5:18" },
      { side: "B", title: "Cornered", duration: "6:45" },
      { side: "B", title: "Gradient Spray", duration: "5:52" },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-black overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-md border-b border-zinc-900">
        <div className="px-4 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Vinyl Cover */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative w-full aspect-square"
      >
        <motion.img
          src={record.image}
          alt={record.title}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(0.2) contrast(1.1)" }}
          animate={{
            rotate: isPlaying ? 360 : 0,
          }}
          transition={{
            duration: isPlaying ? 2 : 0,
            repeat: isPlaying ? Infinity : 0,
            ease: "linear",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
        
        {/* Centered Play Button */}
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-cyan-400 hover:bg-cyan-300 flex items-center justify-center transition-colors shadow-2xl"
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-black fill-black" />
          ) : (
            <Play className="w-8 h-8 text-black fill-black ml-1" />
          )}
        </motion.button>
      </motion.div>

      {/* Waveform */}
      <div className="bg-zinc-950 border-y border-zinc-900">
        <WaveformVisualizer isPlaying={isPlaying} />
      </div>

      {/* Info */}
      <div className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-cyan-400 uppercase tracking-wider" style={{ fontSize: "11px", letterSpacing: "0.12em" }}>
            {record.artist}
          </p>
          <h1 className="text-white mt-2" style={{ fontSize: "24px", lineHeight: "1.2" }}>
            {record.title}
          </h1>
          <p className="text-zinc-500 uppercase mt-2" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
            {record.label} · {record.year}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {record.genre.map((g) => (
              <span
                key={g}
                className="px-3 py-1.5 bg-black border border-zinc-800 text-zinc-400 uppercase"
                style={{ fontSize: "9px", letterSpacing: "0.1em" }}
              >
                {g}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mt-6 py-4 border-y border-zinc-900">
            <div>
              <p className="text-zinc-600 uppercase" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
                FORMAT
              </p>
              <p className="text-white mt-1" style={{ fontSize: "12px" }}>
                {record.format}
              </p>
            </div>
            <div>
              <p className="text-zinc-600 uppercase" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
                BPM
              </p>
              <p className="text-cyan-400 mt-1" style={{ fontSize: "12px" }}>
                {record.bpm}
              </p>
            </div>
            <div>
              <p className="text-zinc-600 uppercase" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
                PRICE
              </p>
              <p className="text-white mt-1" style={{ fontSize: "12px" }}>
                {record.price}
              </p>
            </div>
          </div>

          {/* Tracklist */}
          <div className="mt-6">
            <h3 className="text-white uppercase tracking-wider mb-3" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
              TRACKLIST
            </h3>
            <div className="space-y-2">
              {record.tracks.map((track, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-zinc-900"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 uppercase" style={{ fontSize: "9px", letterSpacing: "0.1em", width: "16px" }}>
                      {track.side}
                    </span>
                    <span className="text-zinc-400" style={{ fontSize: "13px" }}>
                      {track.title}
                    </span>
                  </div>
                  <span className="text-zinc-600" style={{ fontSize: "11px" }}>
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <div className="sticky bottom-0 bg-black border-t border-zinc-900 px-4 py-4">
        <div className="flex gap-3">
          <motion.button
            onClick={() => setIsInCrate(!isInCrate)}
            whileTap={{ scale: 0.95 }}
            className={`flex-1 py-4 flex items-center justify-center gap-2 transition-all uppercase tracking-wider ${
              isInCrate
                ? "bg-zinc-900 border border-zinc-800 text-zinc-400"
                : "bg-cyan-400 hover:bg-cyan-300 text-black"
            }`}
            style={{ fontSize: "12px", letterSpacing: "0.1em" }}
          >
            <Plus className={`w-5 h-5 ${isInCrate ? "" : "fill-black"}`} />
            {isInCrate ? "IN CRATE" : "ADD TO CRATE"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
