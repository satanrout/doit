import React, { useState } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

export default function TaskList() {
  const [todos, setTodo] = useState([
    { text: "buy ram", id: 1 },
    { text: "buy ssd", id: 2 },
    { text: "buy headphones", id: 3 },
  ]);
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} />}
    />
  );
}
