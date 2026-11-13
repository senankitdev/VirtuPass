import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

/**
 * Global Fastify error handler.
 * Handles Zod validation errors, known Fastify errors, and unexpected errors.
 */
export function errorHandler(
  error: FastifyError,
  _request: FastifyRequest,
  reply: FastifyReply
): void {
  // Zod validation error
  if (error instanceof ZodError) {
    reply.status(400).send({
      success: false,
      error: {
        message: error.errors.map((e) => e.message).join("; "),
        code: "VALIDATION_ERROR",
      },
    });
    return;
  }

  // Fastify-level errors (404, etc.)
  if (error.statusCode) {
    reply.status(error.statusCode).send({
      success: false,
      error: {
        message: error.message,
        code: error.code ?? "REQUEST_ERROR",
      },
    });
    return;
  }

  // Unexpected / unhandled
  console.error("Unhandled error:", error);
  reply.status(500).send({
    success: false,
    error: {
      message: "Internal server error",
      code: "INTERNAL_ERROR",
    },
  });
}
