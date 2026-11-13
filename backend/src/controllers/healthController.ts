import type { FastifyRequest, FastifyReply } from "fastify";
import { sendSuccess } from "../utils";

export async function healthCheck(
  _request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  sendSuccess(reply, {
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
