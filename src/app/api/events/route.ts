import { InMemoryCommandBus } from "@/server/cqrs";
import { trackEventHandler } from "@/server/cqrs/handlers/TrackEventHandler";
import { trackEventCommand } from "@/server/cqrs/commands/TrackEventCommand";

export async function POST(req: Request) {
  const data = (await req.json().catch(() => null)) as
    | { name?: unknown; properties?: unknown }
    | null;

  const name = typeof data?.name === "string" ? data.name : null;
  const properties =
    data?.properties && typeof data.properties === "object" && !Array.isArray(data.properties)
      ? (data.properties as Record<string, unknown>)
      : undefined;

  if (!name) {
    return Response.json({ ok: false, error: "Invalid 'name'" }, { status: 400 });
  }

  const commandBus = new InMemoryCommandBus();
  commandBus.register("analytics.track_event", trackEventHandler);
  await commandBus.execute(trackEventCommand(name, properties));

  return Response.json({ ok: true });
}

