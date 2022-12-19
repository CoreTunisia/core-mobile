import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button title='Click me' onPress={() => setCount(count + 1)} />
      <Text> Test !</Text>
      <Text>Count: {count}</Text>
      {/* make a footer */}
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 36 }}>
        <Text>My Footer</Text>

        {/* make a button */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
