import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function BookingDetailsScreen() {
  const { coachId } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#06131f",
        padding: 24,
      }}
    >
      <Text
        style={{
          color: "#ffffff",
          fontSize: 24,
          fontWeight: "700",
          marginBottom: 12,
        }}
      >
        Reservation coach
      </Text>
      <Text style={{ color: "#b7c2d0", fontSize: 16 }}>
        Coach ID: {coachId}
      </Text>
    </View>
  );
}
