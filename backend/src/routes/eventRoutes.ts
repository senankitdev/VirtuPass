import type { FastifyInstance } from "fastify";
import { listEvents, getEvent } from "../controllers";

export async function eventRoutes(app: FastifyInstance): Promise<void> {
  app.get("/events", listEvents);
  app.get("/events/:id", getEvent);
}
