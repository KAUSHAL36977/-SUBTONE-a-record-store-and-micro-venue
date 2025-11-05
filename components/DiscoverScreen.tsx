import { motion } from "motion/react";
import { Play, Plus } from "lucide-react";
import { useState } from "react";

interface DiscoverScreenProps {
  onSelectRecord: (recordId: number) => void;
}

export function DiscoverScreen({ onSelectRecord }: DiscoverScreenProps) {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const records = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583927109257-f21c74dd0c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwdGVjaG5vfGVufDF8fHx8MTc2MjMxOTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "BLAWAN",
      title: "Wet Will Always Dry",
      label: "Ternesc",
      year: "2024",
      genre: ["TECHNO", "EXPERIMENTAL"],
      bpm: "138"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1623171826791-b2b77127b589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NjIzMTk1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "HELENA HAUFF",
      title: "Kern Vol. 5",
      label: "Tresor",
      year: "2024",
      genre: ["EBM", "ACID"],
      bpm: "145"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1653383454515-0b42b711ed7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MjIyNDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "OBJEKT",
      title: "Cocoon Crush",
      label: "Pan",
      year: "2023",
      genre: ["BREAKS", "LEFTFIELD"],
      bpm: "150"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1744828755500-cd0a6e1ca1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZSUyMGRhcmt8ZW58MXx8fHwxNzYyMzE5NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "SURGEON",
      title: "From Farthest Known Objects",
      label: "Tresor",
      year: "2024",
      genre: ["INDUSTRIAL", "TECHNO"],
      bpm: "132"
    },
  ];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-900 px-4 py-6">
        <h2 className="tracking-tighter" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
          DISCOVER
        </h2>
        <p className="text-zinc-600 uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>
          UNDERGROUND SELECTIONS
        </p>
      </div>

      {/* Feed */}
      <div className="px-4 py-6 space-y-6">
        {records.map((record, index) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-zinc-950 border border-zinc-900 overflow-hidden"
          >
            {/* Image */}
            <div
              className="relative w-full aspect-square cursor-pointer group"
              onClick={() => onSelectRecord(record.id)}
            >
              <img
                src={record.image}
                alt={record.title}
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(0.2) contrast(1.1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Info */}
            <div className="p-4 border-t border-zinc-900">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-cyan-400 uppercase tracking-wider" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
                    {record.artist}
                  </p>
                  <h3 className="text-white mt-1" style={{ fontSize: "16px" }}>
                    {record.title}
                  </h3>
                  <p className="text-zinc-500 mt-1 uppercase" style={{ fontSize: "9px", letterSpacing: "0.1em" }}>
                    {record.label} · {record.year}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-zinc-600 uppercase" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
                    BPM
                  </p>
                  <p className="text-cyan-400" style={{ fontSize: "16px" }}>
                    {record.bpm}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {record.genre.map((g) => (
                  <span
                    key={g}
                    className="px-2 py-1 bg-black border border-zinc-800 text-zinc-500 uppercase"
                    style={{ fontSize: "8px", letterSpacing: "0.1em" }}
                  >
                    {g}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setPlayingId(playingId === record.id ? null : record.id)}
                  className="flex-1 bg-cyan-400 hover:bg-cyan-300 text-black py-3 flex items-center justify-center gap-2 transition-colors uppercase tracking-wider"
                  style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                >
                  <Play className="w-4 h-4 fill-black" />
                  {playingId === record.id ? "STOP" : "PREVIEW"}
                </button>
                <button className="px-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors">
                  <Plus className="w-5 h-5 text-cyan-400" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
