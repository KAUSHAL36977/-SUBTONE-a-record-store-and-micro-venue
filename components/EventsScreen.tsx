import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";

export function EventsScreen() {
  const [rsvpEvents, setRsvpEvents] = useState<number[]>([]);

  const events = [
    {
      id: 1,
      title: "HELENA HAUFF",
      subtitle: "Live Hardware Set",
      date: "SAT 09 NOV",
      time: "22:00 - 04:00",
      capacity: "50",
      attending: "38",
      image: "https://images.unsplash.com/photo-1692563237920-965a09235511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm8lMjBwYXJ0eSUyMGJlcmxpbnxlbnwxfHx8fDE3NjIzMTk1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "SURGEON B2B BLAWAN",
      subtitle: "All Night Long",
      date: "FRI 15 NOV",
      time: "23:00 - 06:00",
      capacity: "50",
      attending: "42",
      image: "https://images.unsplash.com/photo-1633373513172-05e929f98e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjIyNTcyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "OBJEKT",
      subtitle: "Album Listening Session",
      date: "WED 20 NOV",
      time: "19:00 - 22:00",
      capacity: "30",
      attending: "28",
      image: "https://images.unsplash.com/photo-1744828755500-cd0a6e1ca1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZSUyMGRhcmt8ZW58MXx8fHwxNzYyMzE5NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const toggleRSVP = (eventId: number) => {
    setRsvpEvents((prev) =>
      prev.includes(eventId)
        ? prev.filter((id) => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-zinc-900 px-4 py-6">
        <h2 className="tracking-tighter" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
          EVENTS
        </h2>
        <p className="text-zinc-600 uppercase mt-1" style={{ fontSize: "9px", letterSpacing: "0.15em" }}>
          IN-STORE DJ NIGHTS
        </p>
      </div>

      {/* Calendar View */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-4 h-4 text-cyan-400" />
          <span className="text-zinc-500 uppercase" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
            NOVEMBER 2025
          </span>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event, index) => {
            const isRSVP = rsvpEvents.includes(event.id);
            const attendingPercent = (parseInt(event.attending) / parseInt(event.capacity)) * 100;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-950 border border-zinc-900 overflow-hidden"
              >
                {/* Event Image */}
                <div className="relative w-full h-40">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(0.3) contrast(1.1)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 bg-cyan-400 px-3 py-1.5">
                    <p className="text-black uppercase tracking-wider" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
                      {event.date}
                    </p>
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-4">
                  <h3 className="text-white uppercase tracking-wider" style={{ fontSize: "16px", letterSpacing: "0.05em" }}>
                    {event.title}
                  </h3>
                  <p className="text-cyan-400 mt-1" style={{ fontSize: "12px" }}>
                    {event.subtitle}
                  </p>

                  {/* Details */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Clock className="w-4 h-4" />
                      <span style={{ fontSize: "11px" }}>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <MapPin className="w-4 h-4" />
                      <span style={{ fontSize: "11px" }}>Subtone · Kreuzberg</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Users className="w-4 h-4" />
                      <span style={{ fontSize: "11px" }}>
                        {event.attending} / {event.capacity} attending
                      </span>
                    </div>
                  </div>

                  {/* Capacity Bar */}
                  <div className="mt-4">
                    <div className="h-1 bg-zinc-900 overflow-hidden">
                      <motion.div
                        className="h-full bg-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: `${attendingPercent}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </div>

                  {/* RSVP Button */}
                  <motion.button
                    onClick={() => toggleRSVP(event.id)}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full mt-4 py-3 uppercase tracking-wider transition-all ${
                      isRSVP
                        ? "bg-zinc-900 border border-zinc-800 text-zinc-400"
                        : "bg-cyan-400 hover:bg-cyan-300 text-black"
                    }`}
                    style={{ fontSize: "11px", letterSpacing: "0.1em" }}
                  >
                    {isRSVP ? "✓ RSVP'D" : "RSVP"}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Notice */}
        <div className="mt-8 p-4 bg-zinc-950 border border-zinc-900">
          <p className="text-zinc-600 uppercase text-center" style={{ fontSize: "9px", letterSpacing: "0.1em" }}>
            FREE ENTRY · CASH ONLY · NO PHOTOS
          </p>
        </div>
      </div>
    </div>
  );
}
