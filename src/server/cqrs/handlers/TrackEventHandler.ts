import type { CommandHandler } from "../types";
import type { TrackEventCommand } from "../commands/TrackEventCommand";

export const trackEventHandler: CommandHandler<TrackEventCommand, void> = async (
  command
) => {
  // Заглушка: сюда можно подключить PostHog/Segment/свой endpoint и т.д.
  // Сейчас просто "успешно" завершается.
  void command;
};

