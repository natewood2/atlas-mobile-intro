import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { router } from "expo-router";
import { useActivitiesContext } from "@/components/ActivitiesProvider";

export default function AddActivityScreen(): React.ReactElement {
  const [steps, setSteps] = useState<number>(0);
  const { insertActivity } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter Steps"
        keyboardType="number-pad"
        placeholderTextColor="black"
        onChangeText={(value) => value ? setSteps(parseInt(value)) : setSteps(0)}
      />
      
      <Pressable
        style={styles.addButton}
        onPress={() => {
          insertActivity(steps, new Date());
          router.push("/");
        }}
      >
        <Text style={styles.buttonText}>Add activity</Text>
      </Pressable>
      
      <Pressable
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.buttonText}>Go back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FEF9E6",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "black",
  },
  input: {
    height: 50,
    borderWidth: 3,
    borderColor: "#000",
    padding: 10,
    fontSize: 16,
    backgroundColor: "white",
    marginBottom: 20,
    width: "100%"
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: "100%",
  },
  backButton: {
    backgroundColor: "#D00414",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: "100%"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  }
});