import type { Event, User, Organizer, Ticket, Booking, Attendance } from "../types";

// ──────────────────────────── In-Memory Data Store ────────────────────────────

/** All events — seeded with demo data below */
export const events: Event[] = [
  {
    id: "evt-001",
    title: "Technovate 2025 — Flagship Hackathon",
    description:
      "A 36-hour coding marathon where teams compete to build innovative solutions to real-world problems. Mentors from Google, Microsoft, and Amazon will guide participants. Top 3 teams win cash prizes and internship opportunities.",
    date: "2025-03-15",
    time: "09:00",
    venue: "Anna Auditorium, VIT Vellore",
    category: "technical",
    price: 200,
    totalSeats: 500,
    availableSeats: 342,
    organizerId: "org-001",
    organizerName: "VIT Technical Board",
    imageUrl: "https://placehold.co/800x400?text=Technovate+2025",
    status: "published",
    tags: ["hackathon", "coding", "prizes", "techfest"],
    createdAt: "2025-01-10T10:00:00Z",
  },
  {
    id: "evt-002",
    title: "Raag — Classical Music Night",
    description:
      "An enchanting evening of Indian classical music featuring renowned artists and talented student performers. Experience the magic of sitar, tabla, and vocal recitals under the stars in the open-air amphitheatre.",
    date: "2025-03-16",
    time: "18:30",
    venue: "Open Air Theatre, Main Campus",
    category: "cultural",
    price: 150,
    totalSeats: 1200,
    availableSeats: 876,
    organizerId: "org-002",
    organizerName: "Cultural Committee",
    imageUrl: "https://placehold.co/800x400?text=Raag+Classical+Night",
    status: "published",
    tags: ["music", "classical", "cultural", "live-performance"],
    createdAt: "2025-01-12T14:30:00Z",
  },
  {
    id: "evt-003",
    title: "RoboWars — Ultimate Bot Battle",
    description:
      "Build your combat robot and battle it out in the arena! Witness 30-kg bots clash with flippers, spinners, and hammers. Featuring qualifying rounds, semis, and an epic grand finale with pyrotechnics.",
    date: "2025-03-17",
    time: "10:00",
    venue: "Indoor Stadium, Block B",
    category: "technical",
    price: 350,
    totalSeats: 800,
    availableSeats: 215,
    organizerId: "org-001",
    organizerName: "VIT Technical Board",
    imageUrl: "https://placehold.co/800x400?text=RoboWars+Arena",
    status: "published",
    tags: ["robotics", "competition", "engineering", "techfest"],
    createdAt: "2025-01-14T09:00:00Z",
  },
  {
    id: "evt-004",
    title: "Mood Indigo — Stand-Up Comedy Night",
    description:
      "Get ready for a rib-tickling evening with India's top stand-up comedians! Featuring a surprise headliner and open-mic slots for student comics. Food stalls and merch available at the venue.",
    date: "2025-03-18",
    time: "19:00",
    venue: "Kamaraj Auditorium",
    category: "cultural",
    price: 500,
    totalSeats: 1500,
    availableSeats: 423,
    organizerId: "org-002",
    organizerName: "Cultural Committee",
    imageUrl: "https://placehold.co/800x400?text=Comedy+Night",
    status: "published",
    tags: ["comedy", "standup", "entertainment", "cultural-fest"],
    createdAt: "2025-01-15T11:00:00Z",
  },
  {
    id: "evt-005",
    title: "Blitz 5-a-Side Football Tournament",
    description:
      "Fast-paced 5-a-side football tournament with 64 teams battling for the championship trophy. Knockout format, 15-minute halves, with live commentary and giant-screen viewing for spectators.",
    date: "2025-03-19",
    time: "07:00",
    venue: "Central Football Ground",
    category: "sports",
    price: 100,
    totalSeats: 2000,
    availableSeats: 1580,
    organizerId: "org-003",
    organizerName: "Sports Council VIT",
    imageUrl: "https://placehold.co/800x400?text=Blitz+Football",
    status: "published",
    tags: ["football", "sports", "tournament", "outdoor"],
    createdAt: "2025-01-17T08:00:00Z",
  },
  {
    id: "evt-006",
    title: "AI/ML Masterclass — From Zero to Deploy",
    description:
      "An intensive full-day workshop covering machine learning fundamentals, neural networks, and deploying models with FastAPI. Bring your laptop — you'll build and deploy a real image classifier by the end of the day.",
    date: "2025-03-20",
    time: "09:30",
    venue: "SJT Seminar Hall 3, 2nd Floor",
    category: "workshop",
    price: 300,
    totalSeats: 120,
    availableSeats: 45,
    organizerId: "org-004",
    organizerName: "AI Club VIT",
    imageUrl: "https://placehold.co/800x400?text=AI+ML+Workshop",
    status: "published",
    tags: ["AI", "machine-learning", "workshop", "hands-on"],
    createdAt: "2025-01-18T13:00:00Z",
  },
  {
    id: "evt-007",
    title: "Saarang — EDM & Bollywood DJ Night",
    description:
      "The grand finale night featuring DJ Nucleya spinning Bollywood remixes and bass-heavy EDM. Laser show, fog machines, and a dance floor for 3 000 people. Gates open at 7 PM — last entry 9 PM.",
    date: "2025-03-21",
    time: "19:00",
    venue: "Main Ground, North Campus",
    category: "cultural",
    price: 750,
    totalSeats: 3000,
    availableSeats: 1120,
    organizerId: "org-002",
    organizerName: "Cultural Committee",
    imageUrl: "https://placehold.co/800x400?text=DJ+Night+Saarang",
    status: "published",
    tags: ["DJ", "EDM", "bollywood", "party", "cultural-fest"],
    createdAt: "2025-01-20T15:00:00Z",
  },
  {
    id: "evt-008",
    title: "Capture the Flag — Cybersecurity Challenge",
    description:
      "A thrilling CTF competition with challenges in web exploitation, binary analysis, cryptography, and forensics. Solo or teams of up to 3. Top scorers win gaming laptops and cybersecurity course vouchers.",
    date: "2025-03-22",
    time: "10:00",
    venue: "TT Lab 5, Technology Tower",
    category: "technical",
    price: 0,
    totalSeats: 200,
    availableSeats: 67,
    organizerId: "org-005",
    organizerName: "CyberSec Club",
    imageUrl: "https://placehold.co/800x400?text=CTF+Challenge",
    status: "published",
    tags: ["cybersecurity", "CTF", "hacking", "competition"],
    createdAt: "2025-01-22T10:00:00Z",
  },
];

/** Users — empty, populated at runtime */
export const users: User[] = [];

/** Organizers — empty, populated at runtime */
export const organizers: Organizer[] = [];

/** Tickets — empty, populated at runtime */
export const tickets: Ticket[] = [];

/** Bookings — empty, populated at runtime */
export const bookings: Booking[] = [];

/** Attendance records — stored in a Map keyed by ticketId for O(1) lookup */
export const attendance: Map<string, Attendance> = new Map();
