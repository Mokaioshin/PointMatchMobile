import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = await AsyncStorage.getItem("currentUser");
      setTarget(currentUser ? "/(tabs)" : "/(auth)/login");
    };

    checkUser();
  }, []);

  if (!target) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#06131f",
        }}
      >
        <ActivityIndicator size="large" color="#ef3b2d" />
      </View>
    );
  }

  return <Redirect href={target} />;
}
