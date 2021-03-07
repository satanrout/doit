import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <TaskList />
      <AddTodo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12131C",
    padding: 10,
  },
});
