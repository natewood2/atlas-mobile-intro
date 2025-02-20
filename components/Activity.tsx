import { Text, View, StyleSheet } from "react-native";

type ActivityProps = {
  id: number;
  steps?: number;
  date?: string | number | Date;
};

export const Action = ({ text }: { text: string }) => (
  <View style={styles.view}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

export default function Activity({
  steps = 0,
  date = new Date(),
}: ActivityProps) {
  const formattedDate = date ? new Date(date).toLocaleDateString() : "Unknown date";
  const formattedTime = date ? new Date(date).toLocaleTimeString() : "Unknown time";

  return (
    <View style={styles.container}>
      <View style={styles.dateBox}>
        <Text style={styles.date}>{formattedDate}</Text>
        <Text style={styles.time}>{formattedTime}</Text>
      </View>
      <Text style={styles.steps}>Steps: {steps.toLocaleString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderWidth: 2,
    width: "100%",
    margin: 5,
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 16,
    marginRight: 10,
  },
  time: {
    fontSize: 16,
  },
  steps: {
    fontSize: 24,
    marginTop: 10,
  },
  view: {
    backgroundColor: "#ff0000",
    alignItems: "center",
    width: 75,
    height: "100%",
    margin: 5,
  },
  text: {
    color: "red",
    fontWeight: "bold",
  },
});
