import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

export default function TaskList() {
  const [todos, setTodo] = useState("");

  useEffect(() => {
    fetch("https://pernntodoapi.herokuapp.com/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((err) => err.message);
  }, []);

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  );
}
