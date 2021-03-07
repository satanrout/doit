import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function AddTodo(item) {
  const [newTodo, setNewTodo] = useState("");
  return (
    <View style={styles.addtodo}>
      <TextInput
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="add todo"
        value={newTodo}
        style={styles.add}
        label="TextInputWithIcon"
      />
      <Entypo
        style={styles.addicon}
        name="add-to-list"
        size={30}
        color="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  add: {
    padding: 15,
    backgroundColor: "#ddaf58",
    borderRadius: 10,
    position: "relative",
    color: "#444444",
    fontSize: 15,
  },
  addicon: {
    position: "absolute",
    right: 5,
    marginVertical: "auto",
  },
  addtodo: {
    display: "flex",
    justifyContent: "center",
  },
});
