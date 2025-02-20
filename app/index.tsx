import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { Link } from "expo-router";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
//import Activity from "@/components/Activity";
import { FlashList } from "@shopify/flash-list";
import SwipeableActivity from "@/components/SwipeableActivity";

export default function HomeScreen(): React.ReactElement {
  const { activities, deleteAllActivities } = useActivitiesContext();

  const handleDeleteAll = () => {
    Alert.alert(
      "Delete All Activities",
      "Are you sure you want to delete all activities? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete All",
          style: "destructive",
          onPress: () => deleteAllActivities(),
        },
      ]
    );
  };

  return (
    <View style={styles.view}>
      <FlashList
        renderItem={({ item }) => <SwipeableActivity activity={item} />}
        data={activities}
        estimatedItemSize={50}
      />
      <View style={styles.buttonContainer}>
        <Link style={styles.button} href={"/add-activity-screen"} replace>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Link>
        <Pressable
          style={[styles.button, styles.deleteButton]}
          onPress={handleDeleteAll}
        >
          <Text style={styles.buttonText}>Delete All Activities</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    width: "100%",
    height: "100%",
    margin: "auto",
    paddingTop: 20,
    backgroundColor: "#FEF9E6",
  },
  buttonContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  button: {
    backgroundColor: "#1ED2AF",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: "#D00414",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
