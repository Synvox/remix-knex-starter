import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import knex from "~/knex";

export async function loader({ params }: LoaderArgs) {
  const todo = await knex("todos").where("id", params.todoId).first();

  return json({
    todo: todo!,
  });
}

export default function () {
  const { todo } = useLoaderData<typeof loader>();

  return (
    <>
      <div>todo id: {todo.id}</div>
      <div>todo text: {todo.text}</div>
    </>
  );
}
