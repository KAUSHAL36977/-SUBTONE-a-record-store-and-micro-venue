import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function WaveformVisualizer({ isPlaying = false }: { isPlaying?: boolean }) {
  const [bars] = useState(() => 
    Array.from({ length: 60 }, () => Math.random() * 0.8 + 0.2)
  );

  return (
    <div className="w-full h-16 flex items-center gap-0.5 px-4">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-cyan-400 rounded-sm"
          initial={{ scaleY: height }}
          animate={{
            scaleY: isPlaying ? [height, height * 1.2, height] : height,
          }}
          transition={{
            duration: 0.8,
            repeat: isPlaying ? Infinity : 0,
            delay: i * 0.02,
            ease: "easeInOut"
          }}
          style={{
            height: "100%",
            transformOrigin: "bottom",
            opacity: 0.8
          }}
        />
      ))}
    </div>
  );
}
