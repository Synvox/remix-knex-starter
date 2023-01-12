import knex from "./knex";

export async function getTodos() {
  return await knex("todos");
}

export async function addTodo(text: string) {
  await knex("todos").insert({ text });
}
