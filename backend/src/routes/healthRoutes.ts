import type { FastifyInstance } from "fastify";
import { healthCheck } from "../controllers";

export async function healthRoutes(app: FastifyInstance): Promise<void> {
  app.get("/health", healthCheck);
}
