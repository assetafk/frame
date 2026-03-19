import type { Command } from "../types";

export type TrackEventCommand = Command<
  "analytics.track_event",
  {
    name: string;
    properties?: Record<string, unknown>;
  }
>;

export function trackEventCommand(
  name: string,
  properties?: Record<string, unknown>
): TrackEventCommand {
  return {
    type: "analytics.track_event",
    payload: { name, properties }
  };
}

