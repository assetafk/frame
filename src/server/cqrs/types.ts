export type Command<TType extends string = string, TPayload = unknown> = {
  type: TType;
  payload: TPayload;
};

export type Query<TType extends string = string, TPayload = unknown> = {
  type: TType;
  payload: TPayload;
};

export type CommandHandler<TCommand extends Command = Command, TResult = void> = (
  command: TCommand
) => Promise<TResult> | TResult;

export type QueryHandler<TQuery extends Query = Query, TResult = unknown> = (
  query: TQuery
) => Promise<TResult> | TResult;

