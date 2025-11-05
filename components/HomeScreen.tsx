import { motion } from "motion/react";
import { VinylCard } from "./VinylCard";
import { Search } from "lucide-react";

interface HomeScreenProps {
  onSelectRecord: (recordId: number) => void;
}

export function HomeScreen({ onSelectRecord }: HomeScreenProps) {
  const featuredRecords = [
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
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1744828755500-cd0a6e1ca1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZSUyMGRhcmt8ZW58MXx8fHwxNzYyMzE5NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "SURGEON",
      title: "From Farthest Known Objects",
      genre: "INDUSTRIAL"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1633373513172-05e929f98e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjIyNTcyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "REGIS",
      title: "Delivered Into The Hands Of Indifference",
      genre: "TECHNO"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1692563237920-965a09235511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBwYXJ0eSUyMGJlcmxpbnxlbnwxfHx8fDE3NjIzMTk1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      artist: "ANCIENT METHODS",
      title: "The Jericho Records",
      genre: "INDUSTRIAL"
    }
  ];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-900">
        <div className="px-4 py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="tracking-tighter" style={{ fontSize: "28px", letterSpacing: "-0.05em" }}>
              SUBTONE
            </h1>
            <p className="text-zinc-600 uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>
              KREUZBERG · BERLIN
            </p>
          </motion.div>

          {/* Search bar */}
          <div className="mt-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              placeholder="SEARCH RECORDS, ARTISTS..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-none px-10 py-3 text-zinc-400 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-400 transition-colors uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.1em" }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-white uppercase tracking-wider" style={{ fontSize: "14px", letterSpacing: "0.1em" }}>
              NEW ARRIVALS
            </h2>
            <div className="w-12 h-0.5 bg-cyan-400 mt-2" />
          </div>
          <span className="text-zinc-600 uppercase" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
            UPDATED TODAY
          </span>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {featuredRecords.map((record, index) => (
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

        {/* Bottom spacing */}
        <div className="h-8" />
      </div>
    </div>
  );
}
