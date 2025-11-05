import { Home, Compass, Calendar, Archive } from "lucide-react";
import { motion } from "motion/react";

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "discover", icon: Compass, label: "Discover" },
    { id: "events", icon: Calendar, label: "Events" },
    { id: "crate", icon: Archive, label: "Crate" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-zinc-800 z-50">
      <div className="max-w-md mx-auto flex items-center justify-around px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="flex flex-col items-center gap-1 relative"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <Icon
                  className={`w-6 h-6 transition-colors ${
                    isActive ? "text-cyan-400" : "text-zinc-500"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                    style={{ transform: "translateX(-50%)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.div>
              <span
                className={`uppercase tracking-wider transition-colors ${
                  isActive ? "text-cyan-400" : "text-zinc-600"
                }`}
                style={{ fontSize: "9px", letterSpacing: "0.1em" }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
