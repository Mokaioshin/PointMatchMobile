import { Text, View } from "react-native";

export default function PlanningScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#06131f",
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "700" }}>
        Planning
      </Text>
    </View>
  );
}
