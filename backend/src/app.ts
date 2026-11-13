import Fastify from "fastify";
import cors from "@fastify/cors";
import { registerRoutes } from "./routes";
import { errorHandler } from "./middleware";

export async function buildApp() {
  const app = Fastify({
    logger: {
      level: process.env.NODE_ENV === "production" ? "info" : "debug",
    },
  });

  // ── CORS ──────────────────────────────────────────────────────────
  await app.register(cors, {
    origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });

  // ── Global error handler ──────────────────────────────────────────
  app.setErrorHandler(errorHandler);

  // ── Routes under /api/v1 prefix ───────────────────────────────────
  await app.register(registerRoutes, { prefix: "/api/v1" });

  // ── 404 handler ───────────────────────────────────────────────────
  app.setNotFoundHandler((_request, reply) => {
    reply.status(404).send({
      success: false,
      error: {
        message: "Route not found",
        code: "NOT_FOUND",
      },
    });
  });

  return app;
}
