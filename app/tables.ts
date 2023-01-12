import { Knex } from "knex";

export type Todo = {
  id: string;
  text: string;
};

type MaybeRaw<T> = { [K in keyof T]: T[K] | Knex.Raw };
type TableHelper<T> = Knex.CompositeTableType<
  T,
  MaybeRaw<Partial<T>>,
  MaybeRaw<Partial<T>>
>;

declare module "knex/types/tables" {
  interface Tables {
    todos: TableHelper<Todo>;
  }
}
