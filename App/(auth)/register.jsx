import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import { styles } from "../../styles/register.styles";

export default function RegisterScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!username || !email || !password) {
      return Alert.alert("Erreur", "Tous les champs sont requis.");
    }

    Alert.alert("Succès", "Compte créé avec succès.");
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.brand}>
          <Text style={styles.brandAccent}>.</Text>Match
        </Text>

        <Text style={styles.title}>Inscription</Text>
        <Text style={styles.subtitle}>
          Crée ton compte pour réserver un coach et gérer ton planning.
        </Text>

        <AuthInput
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />

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

        <AuthButton title="S'inscrire" onPress={handleRegister} />

        <AuthButton
          title="Déjà un compte ? Se connecter"
          onPress={() => router.replace("/(auth)/login")}
          variant="secondary"
        />
      </View>
    </View>
  );
}
