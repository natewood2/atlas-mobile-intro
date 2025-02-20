import { StyleSheet, Text, View, Alert } from "react-native";
import Activity from "./Activity";
import { Swipeable } from "react-native-gesture-handler";
import { useActivitiesContext } from "./ActivitiesProvider";
import { useRef } from "react";

type SwipeableActivityProps = {
  activity: {
    id: number;
    steps?: number;
    date?: string | number | Date;
  };
};

export default function SwipeableActivity({ activity }: SwipeableActivityProps) {
  const { deleteActivity } = useActivitiesContext();
  const swipeableRef = useRef<any>(null);

  const handleDelete = () => {
    Alert.alert(
      "Delete Activity",
      "You sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {
            if (swipeableRef.current) {
              swipeableRef.current.close();
            }
          }
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteActivity(activity.id)
        }
      ]
    );
  };

  const renderRightActions = () => {
    return (
      <View style={styles.deleteButton}>
        <Text style={styles.text}>Delete</Text>
      </View>
    );
  };

  return (
    <View key={activity.id}>
      <Swipeable
        ref={swipeableRef}
        renderRightActions={renderRightActions}
        onSwipeableOpen={handleDelete}
      >
        <Activity 
          id={activity.id}
          steps={activity.steps}
          date={activity.date}
        />
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});