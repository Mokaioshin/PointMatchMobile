import { Stack, useRouter, usePathname } from "expo-router";
import { Pressable, Text, View, SafeAreaView } from "react-native";
import { styles } from "../styles/root-layout.styles";

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname(); 
  const isProfilePage = pathname.includes("profil");

  return (
    <View style={styles.container}>
      {/* On n'affiche la barre que si on n'est PAS sur le profil */}
      {!isProfilePage && (
        <SafeAreaView style={{ backgroundColor: "#E74C3C" }}> 
          <View style={{ 
            height: 60, 
            backgroundColor: "#E74C3C", 
            justifyContent: "center", 
            paddingHorizontal: 15 
          }}>
            <Pressable
              style={styles.matchButton}
              onPress={() => router.push("/(tabs)")}
            >
              <Text style={styles.matchText}>.MATCH</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      )}

      {/* Le Stack contient toutes tes pages */}
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}