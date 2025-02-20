import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { Suspense, useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

async function loadDatabase() {
  const name = "activities.db";
  const dbPath = `${FileSystem.documentDirectory}SQLite/${name}`;
  const fileInfo = await FileSystem.getInfoAsync(dbPath);

  if (!fileInfo.exists) {
    const asset = require("@/assets/" + name);
    const dbUri = Asset.fromModule(asset).uri;
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbPath);
  }
}

function useDB() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadDatabase().then(() => setLoaded(true));
  }, []);
  return loaded;
}

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const loaded = useDB();

  if (!loaded) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <SQLite.SQLiteProvider databaseName="activities.db">
        {children}
      </SQLite.SQLiteProvider>
    </Suspense>
  );
}
