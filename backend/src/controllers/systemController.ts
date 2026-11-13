import type { FastifyRequest, FastifyReply } from "fastify";
import { sendSuccess } from "../utils";

export async function getSystemInfo(
  _request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  sendSuccess(reply, {
    name: "VirtuPass",
    version: "1.0.0",
    environment: process.env.NODE_ENV ?? "development",
    portals: ["user", "admin", "organizer"],
  });
}
