# VirtuPass — Smart College Fest Ticketing Platform

> **Tagline:** One Identity. One Verified Pass. One Seamless Entry.

VirtuPass is a modern, full-stack, college fest ticketing and access-management platform built specifically for high-throughput campus events. It unifies student attendees, club organizers, and campus security through a single high-performance architecture.

---

## 1. Project Overview

VirtuPass addresses common campus fest bottlenecks:
- Long lines at physical registration desks
- Counterfeit or duplicate paper and screenshot passes
- Fragmented event communication across disparate social media groups
- Lack of recognition or perks for high-achieving academic students

With VirtuPass, students verify their academic credentials once, unlock merit-linked event ticket discounts (based on cumulative GPA tiers), receive dynamic digital passes, and experience sub-second gate admission via QR validation.

---

## 2. Three Dedicated Portals

VirtuPass provides three distinct, tailored user interfaces connected to a shared backend:

| Portal | Target Audience | Primary Capabilities | Accent Theme | Route Prefix |
| :--- | :--- | :--- | :--- | :--- |
| **Student Portal** | Students & Attendees | Event discovery, academic verification, CGPA tier discounts, digital passes, booking ledger | Indigo / Blue | `/user/*` |
| **Organizer Portal** | Clubs, Departments & Committees | Event authoring, seat allocation, revenue analytics, attendee rosters, gate scanner | Purple / Violet | `/organizer/*` |
| **Admin Command** | Dean's Office & Fest Security | Platform-wide user oversight, organizer approvals, gate attendance monitoring, audit logs | Slate / Dark | `/admin/*` |

---

## 3. Technology Stack

### Frontend (`/frontend`)
- **Core:** React 18 with TypeScript
- **Tooling:** Vite 5 (fast HMR, optimized bundler)
- **Styling:** Tailwind CSS with customized color palettes and typography
- **Routing:** React Router v6 with modular layouts and route guards
- **Data Fetching:** TanStack Query v5 with automatic caching and retry policies
- **Forms & Validation:** React Hook Form + Zod schema validation
- **Icons:** Lucide React

### Backend (`/backend`)
- **Core:** Node.js with TypeScript
- **Web Framework:** Fastify v5 (low-overhead, high-throughput REST APIs)
- **Validation:** Zod request schemas
- **Architecture:** Clean layered design (`routes` -> `controllers` -> `services` -> `data`)
- **CORS:** `@fastify/cors` with configurable origin binding
- **Environment:** Dotenv configuration

---

## 4. Architectural Principles & Non-Negotiable Rules

1. **Zero Database Architecture:**
   - **No SQL or NoSQL database is installed or used** (no MongoDB, PostgreSQL, MySQL, SQLite, Firebase, Supabase, Prisma, or Drizzle).
   - All operational data is stored in structured, type-safe in-memory collections (TypeScript objects, arrays, and Maps).
   - **Data resets when the backend restarts.** This design guarantees microsecond query times and eliminates database latency during high-volume hackathon demonstrations.

2. **Zero Blockchain:**
   - No blockchain, smart contracts, Solidity, Web3, or NFTs. Security and anti-fraud are achieved via cryptographic signing and centralized verification.

3. **Strict Separation of Concerns:**
   - Frontend and backend are completely decoupled standalone applications with independent `package.json`, dependencies, scripts, and build lifecycles.
   - Frontend communicates with the backend solely through standardized REST HTTP endpoints (`/api/v1/*`).

---

## 5. Directory Structure

```
SamVITya/
├── backend/
│   ├── src/
│   │   ├── controllers/         # Request handling and HTTP responses
│   │   │   ├── eventController.ts
│   │   │   ├── healthController.ts
│   │   │   ├── systemController.ts
│   │   │   └── index.ts
│   │   ├── data/                # In-memory store seeded with sample events
│   │   │   └── store.ts
│   │   ├── middleware/          # Centralized error handler and CORS
│   │   │   ├── errorHandler.ts
│   │   │   └── index.ts
│   │   ├── routes/              # Fastify API route registration
│   │   │   ├── eventRoutes.ts
│   │   │   ├── healthRoutes.ts
│   │   │   ├── systemRoutes.ts
│   │   │   └── index.ts
│   │   ├── services/            # In-memory business logic
│   │   │   ├── eventService.ts
│   │   │   └── index.ts
│   │   ├── types/               # TypeScript definitions
│   │   │   └── index.ts
│   │   ├── utils/               # Standard response formatting
│   │   │   ├── response.ts
│   │   │   └── index.ts
│   │   ├── app.ts               # Fastify app setup
│   │   └── server.ts            # Server entrypoint
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── portals/             # Three dedicated portal interfaces
│   │   │   ├── admin/
│   │   │   │   ├── layouts/     # AdminLayout.tsx
│   │   │   │   └── pages/       # Dashboard, Users, Organizers, Events, Tickets, Attendance, AuditLog
│   │   │   ├── organizer/
│   │   │   │   ├── layouts/     # OrganizerLayout.tsx
│   │   │   │   └── pages/       # Dashboard, Events, CreateEvent, Bookings, Attendance, Scanner, Profile
│   │   │   └── user/
│   │   │       ├── layouts/     # UserLayout.tsx
│   │   │       └── pages/       # Dashboard, Verification, Events, Tickets, Bookings, Profile
│   │   ├── public/              # Public-facing web pages
│   │   │   ├── layouts/         # PublicLayout.tsx (Navbar + Footer)
│   │   │   └── pages/           # LandingPage, PublicEventsPage, EventDetailPage, LoginPage, RegisterPage
│   │   ├── shared/              # Reusable design system
│   │   │   ├── components/      # Button, Input, Card, Badge, Modal, Sidebar, Navbar, PageHeader, StatCard, EventCard, etc.
│   │   │   ├── hooks/           # TanStack useEvents, useHealthCheck, useSystemInfo
│   │   │   ├── services/        # Centralized ApiService with fetch
│   │   │   ├── types/           # Domain interfaces (Event, User, Ticket, Booking, etc.)
│   │   │   └── utils/           # Formatters (currency, dates) and cn helper
│   │   ├── App.tsx              # React Router v6 configuration
│   │   ├── index.css            # Tailwind directives
│   │   ├── main.tsx             # Application bootstrap
│   │   └── vite-env.d.ts        # Vite environment types
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

---

## 6. Prerequisites

- **Node.js**: v18.0.0 or later (tested on v24.20.0)
- **Package Manager**: npm (v9+), pnpm (v8+), or yarn

---

## 7. Environment Variables

### Backend (`backend/.env`)
Copy `backend/.env.example` to `backend/.env`:
```env
PORT=4000
HOST=0.0.0.0
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
JWT_SECRET=your-secret-key-change-in-production
```

### Frontend (`frontend/.env`)
Copy `frontend/.env.example` to `frontend/.env`:
```env
VITE_API_BASE_URL=http://localhost:4000/api/v1
```

---

## 8. Installation & Running Instructions

### Backend Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Start development server (with hot reload via tsx)
npm run dev

# Or build and run production bundle
npm run build
npm start
```
The backend will start at: `http://localhost:4000`

### Frontend Setup

```bash
# 1. Open a new terminal and navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start Vite dev server
npm run dev

# Or build for production preview
npm run build
npm run preview
```
The frontend will start at: `http://localhost:5173`

---

## 9. API Health Checks & Verification

You can verify the backend health and system info using curl or PowerShell:

```bash
# Health check
curl http://localhost:4000/api/v1/health

# System info
curl http://localhost:4000/api/v1/system/info

# Sample fest events
curl http://localhost:4000/api/v1/events
```

Sample health response:
```json
{
  "success": true,
  "data": {
    "status": "ok",
    "timestamp": "2025-02-16T12:00:00.000Z",
    "uptime": 45.2
  }
}
```

Sample system info response:
```json
{
  "success": true,
  "data": {
    "name": "VirtuPass",
    "version": "1.0.0",
    "environment": "development",
    "portals": ["user", "admin", "organizer"]
  }
}
```

---

## 10. Current Phase Limitations (Phase 1)

This foundation release (Phase 1 of 6) establishes the architecture, layout system, component library, and all three portal views:

- **Authentication:** Login and registration forms are design scaffolds; credential validation and token issuance will be implemented in Phase 2.
- **Academic Verification:** Form validation is active; automated integration with college ERP/SIS registries will arrive in Phase 2.
- **Ticketing & Booking:** In-memory store serves sample events; actual order checkout and dynamic pass generation activate in Phase 4.
- **Gate Scanner:** Interactive viewfinder UI is active; live camera scanning and cryptographic gate validation activate in Phase 5.
- **Data Persistence:** All backend data is in-memory and will reset upon process restart.

---

## 11. Roadmap: Future Phases

- **Phase 2:** Authentication, Session Management & Academic Verification Flow
- **Phase 3:** Event Management & Organizer Approval Workflows
- **Phase 4:** Smart Ticketing, CGPA Discount Engine & Booking Process
- **Phase 5:** Gate Attendance, Anti-Fraud & Real-Time QR Scanner
- **Phase 6:** Analytics Dashboards, Production Optimization & Final Polish

