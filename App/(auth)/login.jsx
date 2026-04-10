import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import { styles } from "../../styles/login.styles";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkLoggedUser = async () => {
      const currentUser = await AsyncStorage.getItem("currentUser");
      if (currentUser) {
        router.replace("/(tabs)");
      }
    };

    checkLoggedUser();
  }, [router]);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert("Erreur", "Tous les champs sont requis.");
    }

    setLoading(true);

    try {
      const response = {
        ok: true,
        json: async () => ({
          token: "abc123",
          user: {
            username: "Jean",
            email,
            role: "user",
          },
        }),
      };

      const data = await response.json();

      if (!response.ok) {
        return Alert.alert("Erreur", data.message || "Identifiants incorrects");
      }

      await AsyncStorage.setItem("token", data.token);
      await AsyncStorage.setItem("currentUser", JSON.stringify(data.user));

      if (data.user.role === "coach" || data.user.role === "referee") {
        router.replace("/(tabs)/planning");
      } else {
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erreur", "Impossible de joindre le serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.brand}>
          <Text style={styles.brandAccent}>.</Text>Match
        </Text>

        <Text style={styles.title}>Connexion</Text>
        <Text style={styles.subtitle}>
          Connecte-toi pour retrouver tes coachs et tes matchs.
        </Text>

        <AuthInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <AuthInput
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <AuthButton
          title={loading ? "Connexion..." : "Se connecter"}
          onPress={handleLogin}
          disabled={loading}
        />

        <AuthButton
          title="Créer un compte"
          onPress={() => router.push("/(auth)/register")}
          variant="secondary"
        />
      </View>
    </View>
  );
}
