import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

export default function TodoItem({ item }) {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          style={checked ? styles.colorLeft : styles.colorleft}
        ></TouchableOpacity>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    backgroundColor: "#191930",
    borderRadius: 10,
  },
  itemText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
  },
  colorLeft: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "yellow",
    width: 20,
    marginRight: 15,
    backgroundColor: " rgba(123, 239, 178, 0)",
  },
  colorleft: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "yellow",
    width: 20,
    marginRight: 15,
    backgroundColor: "rgba(123, 239, 178, 1)",
  },
});
