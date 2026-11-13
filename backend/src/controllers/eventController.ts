import type { FastifyRequest, FastifyReply } from "fastify";
import { sendSuccess, sendError } from "../utils";
import { getAllEvents, getEventById } from "../services";

export async function listEvents(
  _request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const events = getAllEvents();
  sendSuccess(reply, events, 200, { total: events.length });
}

export async function getEvent(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
): Promise<void> {
  const { id } = request.params;
  const event = getEventById(id);

  if (!event) {
    sendError(reply, `Event with id '${id}' not found`, "EVENT_NOT_FOUND", 404);
    return;
  }

  sendSuccess(reply, event);
}
