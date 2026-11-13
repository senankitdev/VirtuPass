import { events } from "../data/store";
import type { Event } from "../types";

/**
 * Return all published events.
 */
export function getAllEvents(): Event[] {
  return events.filter((e) => e.status === "published");
}

/**
 * Return a single event by ID (any status).
 */
export function getEventById(id: string): Event | undefined {
  return events.find((e) => e.id === id);
}
