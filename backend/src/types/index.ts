import { z } from "zod";

// ──────────────────────────── Enums ────────────────────────────

export const EventCategory = z.enum([
  "cultural",
  "technical",
  "sports",
  "workshop",
]);
export type EventCategory = z.infer<typeof EventCategory>;

export const EventStatus = z.enum(["published", "draft", "pending"]);
export type EventStatus = z.infer<typeof EventStatus>;

export const UserRole = z.enum(["user", "admin", "organizer"]);
export type UserRole = z.infer<typeof UserRole>;

export const TicketStatus = z.enum([
  "valid",
  "used",
  "cancelled",
  "expired",
]);
export type TicketStatus = z.infer<typeof TicketStatus>;

export const BookingStatus = z.enum([
  "confirmed",
  "pending",
  "cancelled",
  "refunded",
]);
export type BookingStatus = z.infer<typeof BookingStatus>;

// ──────────────────────────── Core Schemas ────────────────────────────

export const EventSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string(),
  time: z.string(),
  venue: z.string(),
  category: EventCategory,
  price: z.number().min(0),
  totalSeats: z.number().int().positive(),
  availableSeats: z.number().int().min(0),
  organizerId: z.string(),
  organizerName: z.string(),
  imageUrl: z.string().url(),
  status: EventStatus,
  tags: z.array(z.string()),
  createdAt: z.string(),
});
export type Event = z.infer<typeof EventSchema>;

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: UserRole,
  phone: z.string().optional(),
  college: z.string().optional(),
  createdAt: z.string(),
});
export type User = z.infer<typeof UserSchema>;

export const OrganizerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  organization: z.string(),
  phone: z.string().optional(),
  verified: z.boolean(),
  createdAt: z.string(),
});
export type Organizer = z.infer<typeof OrganizerSchema>;

export const TicketSchema = z.object({
  id: z.string(),
  bookingId: z.string(),
  eventId: z.string(),
  userId: z.string(),
  qrCode: z.string(),
  status: TicketStatus,
  checkedInAt: z.string().optional(),
  createdAt: z.string(),
});
export type Ticket = z.infer<typeof TicketSchema>;

export const BookingSchema = z.object({
  id: z.string(),
  eventId: z.string(),
  userId: z.string(),
  quantity: z.number().int().positive(),
  totalAmount: z.number().min(0),
  status: BookingStatus,
  tickets: z.array(z.string()), // ticket IDs
  createdAt: z.string(),
});
export type Booking = z.infer<typeof BookingSchema>;

export const AttendanceSchema = z.object({
  id: z.string(),
  ticketId: z.string(),
  eventId: z.string(),
  userId: z.string(),
  checkedInAt: z.string(),
  checkedInBy: z.string(),
});
export type Attendance = z.infer<typeof AttendanceSchema>;

// ──────────────────────────── API Response ────────────────────────────

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}
