import type { Command, CommandHandler, Query, QueryHandler } from "./types";

export class InMemoryCommandBus {
  private handlers = new Map<string, CommandHandler<any, any>>();

  register<TCommand extends Command, TResult>(
    type: TCommand["type"],
    handler: CommandHandler<TCommand, TResult>
  ) {
    this.handlers.set(type, handler as CommandHandler<any, any>);
  }

  async execute<TCommand extends Command, TResult>(command: TCommand): Promise<TResult> {
    const handler = this.handlers.get(command.type);
    if (!handler) {
      throw new Error(`No command handler registered for "${command.type}"`);
    }
    return (await handler(command)) as TResult;
  }
}

export class InMemoryQueryBus {
  private handlers = new Map<string, QueryHandler<any, any>>();

  register<TQuery extends Query, TResult>(
    type: TQuery["type"],
    handler: QueryHandler<TQuery, TResult>
  ) {
    this.handlers.set(type, handler as QueryHandler<any, any>);
  }

  async execute<TQuery extends Query, TResult>(query: TQuery): Promise<TResult> {
    const handler = this.handlers.get(query.type);
    if (!handler) {
      throw new Error(`No query handler registered for "${query.type}"`);
    }
    return (await handler(query)) as TResult;
  }
}

