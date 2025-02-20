import { ActivitiesProvider } from "@/components/ActivitiesProvider";
import { DatabaseProvider } from "@/components/DatabaseProvider";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <DatabaseProvider>
        <ActivitiesProvider>
          <Stack />
        </ActivitiesProvider>
      </DatabaseProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});