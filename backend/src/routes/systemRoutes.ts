import type { FastifyInstance } from "fastify";
import { getSystemInfo } from "../controllers";

export async function systemRoutes(app: FastifyInstance): Promise<void> {
  app.get("/system/info", getSystemInfo);
}
