import { motion } from "motion/react";
import { VinylCard } from "./VinylCard";
import { Archive, Trash2 } from "lucide-react";

interface CrateScreenProps {
  onSelectRecord: (recordId: number) => void;
}

export function CrateScreen({ onSelectRecord }: CrateScreenProps) {
  const savedRecords = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583927109257-f21c74dd0c3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNvdmVyJTIwdGVjaG5vfGVufDF8fHx8MTc2MjMxOTU3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "BLAWAN",
      title: "Wet Will Always Dry",
      genre: "TECHNO"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1623171826791-b2b77127b589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGVsZWN0cm9uaWMlMjBtdXNpY3xlbnwxfHx8fDE3NjIzMTk1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "HELENA HAUFF",
      title: "Kern Vol. 5",
      genre: "EBM"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1653383454515-0b42b711ed7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MjIyNDU3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "OBJEKT",
      title: "Cocoon Crush",
      genre: "BREAKS"
    },
  ];

  const totalValue = "€54.00";

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-900 px-4 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="tracking-tighter" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
              MY CRATE
            </h2>
            <p className="text-zinc-600 uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>
              {savedRecords.length} RECORDS SAVED
            </p>
          </div>
          <div className="text-right">
            <p className="text-zinc-600 uppercase" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
              TOTAL VALUE
            </p>
            <p className="text-cyan-400 mt-1" style={{ fontSize: "18px" }}>
              {totalValue}
            </p>
          </div>
        </div>
      </div>

      {savedRecords.length > 0 ? (
        <div className="px-4 py-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-zinc-950 border border-zinc-900 p-4 text-center">
              <Archive className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <p className="text-white" style={{ fontSize: "18px" }}>
                {savedRecords.length}
              </p>
              <p className="text-zinc-600 uppercase mt-1" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
                RECORDS
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-900 p-4 text-center">
              <p className="text-white" style={{ fontSize: "18px" }}>
                3
              </p>
              <p className="text-zinc-600 uppercase mt-1" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
                GENRES
              </p>
            </div>
            <div className="bg-zinc-950 border border-zinc-900 p-4 text-center">
              <p className="text-cyan-400" style={{ fontSize: "18px" }}>
                138
              </p>
              <p className="text-zinc-600 uppercase mt-1" style={{ fontSize: "8px", letterSpacing: "0.1em" }}>
                AVG BPM
              </p>
            </div>
          </div>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {savedRecords.map((record, index) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VinylCard
                  image={record.image}
                  artist={record.artist}
                  title={record.title}
                  genre={record.genre}
                  onClick={() => onSelectRecord(record.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <button className="w-full bg-zinc-950 border border-zinc-900 hover:border-zinc-700 text-zinc-400 py-4 uppercase tracking-wider transition-colors flex items-center justify-center gap-2" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
              EXPORT PLAYLIST
            </button>
            <button className="w-full bg-zinc-950 border border-zinc-900 hover:border-red-900 text-zinc-500 hover:text-red-500 py-4 uppercase tracking-wider transition-colors flex items-center justify-center gap-2" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
              <Trash2 className="w-4 h-4" />
              CLEAR CRATE
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <Archive className="w-16 h-16 text-zinc-800 mb-4" />
          <p className="text-zinc-600 uppercase tracking-wider" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
            YOUR CRATE IS EMPTY
          </p>
          <p className="text-zinc-700 text-center mt-2 max-w-xs" style={{ fontSize: "11px" }}>
            Start adding records to build your collection
          </p>
        </div>
      )}
    </div>
  );
}
