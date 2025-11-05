import { motion } from "motion/react";
import { Play } from "lucide-react";
import { useState } from "react";

interface VinylCardProps {
  image: string;
  artist: string;
  title: string;
  genre: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

export function VinylCard({ image, artist, title, genre, onClick, size = "medium" }: VinylCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "w-full aspect-square",
    medium: "w-full aspect-square",
    large: "w-full aspect-square"
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} cursor-pointer group`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-full overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={`${artist} - ${title}`}
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(0.2) contrast(1.1)" }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Play button overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center">
            <Play className="w-6 h-6 text-black fill-black ml-1" />
          </div>
        </motion.div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="text-cyan-400 uppercase tracking-wider truncate" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
                {artist}
              </p>
              <p className="text-white mt-0.5 truncate" style={{ fontSize: "13px" }}>
                {title}
              </p>
            </div>
            <span className="text-zinc-500 uppercase shrink-0" style={{ fontSize: "9px", letterSpacing: "0.05em" }}>
              {genre}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
