import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

export default function TaskList() {
  const [todos, setTodo] = useState("");

  useEffect(() => {
    fetch("http://10.0.2.2:5000/todos")
      .then((res) => res.json())
      .then(({ data }) => setTodo(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(todos);

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  );
}
