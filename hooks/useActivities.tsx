import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";

type Activity = {
  steps: number | undefined;
  id: number;
  step: number;
  description: string;
  date: string;
};

export function useActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const db = useSQLiteContext();

  function getActivities() {
    return db.getAllSync<Activity>("SELECT * FROM activities");
  }

  const deleteActivity = (id: number) => {
    db.execSync(`DELETE FROM activities WHERE id = ${id}`);
    reload();
  };

  function deleteAllActivities() {
    db.execSync("DELETE FROM activities");
    reload();
  }

  async function reload() {
    const data = getActivities();
    setActivities(data);
  }

  function insertActivity(steps: number, date: Date) {
    db.execSync(
      `INSERT INTO activities (steps, date) VALUES (${steps}, ${date.getTime()})`
    );
    reload();
  }

  useEffect(() => {
    reload();
  }, []);
  return { getActivities, activities, insertActivity, deleteActivity, deleteAllActivities };
}


