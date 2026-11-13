export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: 'cultural' | 'technical' | 'sports' | 'workshop' | 'other';
  price: number;
  totalSeats: number;
  availableSeats: number;
  organizerId: string;
  organizerName: string;
  imageUrl?: string;
  status: 'published' | 'draft' | 'pending' | 'cancelled';
  tags: string[];
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin' | 'organizer';
  university?: string;
  studentId?: string;
  cgpa?: number;
  isVerified: boolean;
  avatarUrl?: string;
  createdAt: string;
}

export interface Organizer {
  id: string;
  name: string;
  email: string;
  organization: string;
  category: string;
  status: 'active' | 'pending' | 'suspended';
  eventsCount: number;
  createdAt: string;
}

export interface Ticket {
  id: string;
  bookingId: string;
  eventId: string;
  eventTitle: string;
  userId: string;
  userName: string;
  qrCode: string;
  status: 'active' | 'used' | 'cancelled' | 'expired';
  pricePaid: number;
  purchaseDate: string;
  gateEntryTime?: string;
}

export interface Booking {
  id: string;
  userId: string;
  userName: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  ticketsCount: number;
  totalAmount: number;
  discountApplied: number;
  status: 'confirmed' | 'pending' | 'cancelled' | 'refunded';
  createdAt: string;
}

export interface Attendance {
  id: string;
  eventId: string;
  ticketId: string;
  userId: string;
  userName: string;
  checkedInAt: string;
  checkedInBy: string;
  gate: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: Record<string, unknown>;
  error?: {
    message: string;
    code: string;
    details?: unknown;
  };
}

export interface SystemInfo {
  name: string;
  version: string;
  environment: string;
  portals: string[];
}

