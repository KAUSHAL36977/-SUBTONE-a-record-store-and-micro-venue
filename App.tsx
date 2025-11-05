import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { HomeScreen } from "./components/HomeScreen";
import { DiscoverScreen } from "./components/DiscoverScreen";
import { RecordDetailScreen } from "./components/RecordDetailScreen";
import { EventsScreen } from "./components/EventsScreen";
import { CrateScreen } from "./components/CrateScreen";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [selectedRecordId, setSelectedRecordId] = useState<number | null>(null);

  const handleSelectRecord = (recordId: number) => {
    setSelectedRecordId(recordId);
  };

  const handleCloseDetail = () => {
    setSelectedRecordId(null);
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased" style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}>
      {/* Mobile container */}
      <div className="mx-auto max-w-md relative min-h-screen bg-black">
        {/* Screen content */}
        <AnimatePresence mode="wait">
          {activeScreen === "home" && !selectedRecordId && (
            <HomeScreen key="home" onSelectRecord={handleSelectRecord} />
          )}
          {activeScreen === "discover" && !selectedRecordId && (
            <DiscoverScreen key="discover" onSelectRecord={handleSelectRecord} />
          )}
          {activeScreen === "events" && !selectedRecordId && (
            <EventsScreen key="events" />
          )}
          {activeScreen === "crate" && !selectedRecordId && (
            <CrateScreen key="crate" onSelectRecord={handleSelectRecord} />
          )}
        </AnimatePresence>

        {/* Record Detail Overlay */}
        <AnimatePresence>
          {selectedRecordId && (
            <RecordDetailScreen
              key="detail"
              recordId={selectedRecordId}
              onClose={handleCloseDetail}
            />
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        {!selectedRecordId && (
          <BottomNav activeScreen={activeScreen} onNavigate={setActiveScreen} />
        )}
      </div>

      {/* Background ambient effect */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />

      {/* Global styles for animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
