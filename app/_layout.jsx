import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/root-layout.styles";

export default function RootLayout() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack screenOptions={{ headerShown: false }} />

      <Pressable
        style={styles.matchButton}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.matchText}>.MATCH</Text>
      </Pressable>
    </View>
  );
}
