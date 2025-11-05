a
a
a
a
a
a
a
AI
Concept:
Design a sleek, gritty-minimalist mobile app called “SUBTONE”, a record store and micro-venue based in Kreuzberg, Berlin. The app should reflect underground electronic culture, Berlin club heritage, and vinyl discovery with a balance of raw industrial edge and curated design sophistication.

Goal:
Create a record browsing and discovery app with strong visual identity and high discoverability — an immersive digital space where users can browse records, preview tracks, and RSVP for in-store DJ nights.

Visual Style:

Brutalist minimalism meets Berlin club culture

Dark mode only — matte black, concrete gray, muted white tones

Neon accent colors (cyan or acid yellow) for emphasis

Strong geometric grid system; clean negative space

Industrial materials: concrete, metal, vinyl textures

Contrast of analog imperfection (grain, blur) with precise digital typography

Typography:

Headers: Condensed grotesk or techno sans (Neue Haas Unica, DIN 1451, or Helvetica Now)

Body: Clean sans or monospaced (Inter, Söhne, Space Mono)

Key Screens to Show:

Home: Curated vinyl covers in grid layout; minimal top nav; neon accent hover

Discover: Scrollable feed of underground records, each with cover, artist, genre tags, and play icon

Record Detail: Vinyl cover full-screen with waveform preview; "Add to Crate" button; short audio snippet bar

Events: Calendar of in-store DJ nights with RSVP toggle

Profile/Crate: Saved vinyls displayed as a minimal gallery with simple icon system

Microinteractions & Motion Ideas:

Vinyl rotation animation when previewing

Smooth crossfade transitions between screens

Soundwave animations as subtle UI feedback

Ambient low-light gradients moving slightly like club lighting

Moodboard References:

Berlin club posters, Boiler Room visuals, Hard Wax record shop interiors

Photography: grainy film texture, monochrome street shots, long exposure lights

Keywords: Kreuzberg, Underground, Brutalist, Analog, Electronic, Nightlife, Vinyl, Techno, Industrial

Output Format:
A realistic mobile UI concept (iOS/Android) shown on dark background, minimal chrome, gritty-meets-clean aesthetic. Include at least 3 screen designs and a small brand logotype ("SUBTONE" in bold sans).
I'll create a sleek, brutalist mobile app for SUBTONE with multiple screens showcasing the Berlin underground vinyl culture. Let me build this with dark mode aesthetics, neon accents, and smooth interactions.

I've created SUBTONE, a brutalist minimalist mobile app for a Berlin underground record store and venue. The app features a dark, gritty aesthetic with neon cyan accents, strong typography, and smooth interactions that reflect the city's electronic music culture.



The app includes 5 fully interactive screens: Home (curated vinyl grid with search), Discover (detailed record feed with BPM, genre tags, and preview buttons), Record Detail (full-screen vinyl display with rotating animation, waveform visualizer, tracklist, and "Add to Crate" functionality), Events (in-store DJ nights with RSVP toggles and capacity tracking), and Crate (saved records gallery with stats). The design uses matte black backgrounds, concrete grays, cyan neon highlights, condensed typography, and subtle animations like vinyl rotation, waveform pulsing, and crossfade transitions between screens.



Suggested next steps:

Add sound preview functionality with actual audio playback
Implement filter/sort options by genre, BPM, or price
Create a user profile section with listening history
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


function App(): JSX.Element
