import { Text, View } from "react-native";

export default function HomeScreen() {
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
        Accueil
      </Text>
    </View>
  );
}
