import { ActionArgs, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { addTodo, getTodos } from "~/db.server";

export async function loader() {
  return json({
    todos: await getTodos(),
  });
}

export async function action({ request }: ActionArgs) {
  const text = (await request.formData()).get("text") as string;

  await addTodo(text);

  return redirect("/");
}

export default function Index() {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
      <Form method="post" reloadDocument>
        <label>
          Enter another todo
          <br />
          <input name="text" autoFocus />
        </label>
        <br />
        <button>Submit</button>
      </Form>
    </>
  );
}
