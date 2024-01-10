"use client";

import { useRouter } from "next/navigation";

export const ToDoList = () => {
  const { push } = useRouter();

  const todoData = [
    { id: "1", title: "片付け" },
    { id: "2", title: "買い物" },
    { id: "3", title: "振込" },
  ];

  return (
    <div>
      {todoData.map((todo) => (
        <ul
          key={todo.id}
          className={"flex space-x-2 border-b-2 p-2 items-center"}
        >
          <li
            onClick={() => push(`/todo/view/${todo.id}`)}
            className={"cursor-pointer flex-1"}
          >
            {todo.title}
          </li>
          <button
            onClick={() => push(`/todo/edit/${todo.id}`)}
            className={"w-32 bg-blue-300 rounded-md p-1"}
          >
            編集
          </button>
        </ul>
      ))}
    </div>
  );
};
