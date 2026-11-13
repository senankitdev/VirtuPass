import type { FastifyReply } from "fastify";
import type { ApiResponse } from "../types";

/**
 * Send a success response.
 */
export function sendSuccess<T>(
  reply: FastifyReply,
  data: T,
  statusCode = 200,
  meta?: ApiResponse["meta"]
): void {
  const body: ApiResponse<T> = { success: true, data };
  if (meta) body.meta = meta;
  reply.status(statusCode).send(body);
}

/**
 * Send an error response.
 */
export function sendError(
  reply: FastifyReply,
  message: string,
  code: string,
  statusCode = 400
): void {
  const body: ApiResponse = {
    success: false,
    error: { message, code },
  };
  reply.status(statusCode).send(body);
}
