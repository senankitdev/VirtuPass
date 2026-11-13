import type { FastifyInstance } from "fastify";
import { healthRoutes } from "./healthRoutes";
import { systemRoutes } from "./systemRoutes";
import { eventRoutes } from "./eventRoutes";

export async function registerRoutes(app: FastifyInstance): Promise<void> {
  await app.register(healthRoutes);
  await app.register(systemRoutes);
  await app.register(eventRoutes);
}
