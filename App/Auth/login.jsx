import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkLoggedUser = async () => {
      const currentUser = await AsyncStorage.getItem('currentUser');
      if (currentUser) router.replace('/(tabs)');
    };
    checkLoggedUser();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) return Alert.alert("Erreur", "Tous les champs sont requis !");

    setLoading(true);
    try {
      // Mock API si backend pas prêt
      const response = { ok: true, json: async () => ({ token: 'abc123', user: { role: 'user' } }) };
      const data = await response.json();

      if (!response.ok) return Alert.alert("Erreur", data.message || "Identifiants incorrects");

      await AsyncStorage.setItem('token', data.token);
      await AsyncStorage.setItem('currentUser', JSON.stringify(data.user));

      if (data.user.role === 'coach' || data.user.role === 'referee') {
        router.replace('/(tabs)/planning');
      } else {
        router.replace('/(tabs)');
      }

    } catch (e) {
      console.error(e);
      Alert.alert("Erreur", "Impossible de joindre le serveur");
    } finally {
      setLoading(false);
    }
  };

  const CustomButton = ({ title, onPress, disabled }) => (
    <Pressable style={[styles.button, disabled && { opacity: 0.5 }]} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.brand}><Text style={styles.dot}>.</Text>Match</Text>
      <Text style={styles.title}>Se connecter</Text>

      <TextInput placeholder="Email" placeholderTextColor="#3a4a6a" value={email} onChangeText={setEmail}
        style={styles.input} keyboardType="email-address" autoCapitalize="none" />
      <TextInput placeholder="Mot de passe" placeholderTextColor="#3a4a6a" value={password} onChangeText={setPassword}
        secureTextEntry style={styles.input} />

      <CustomButton title={loading ? "Connexion..." : "Se connecter"} onPress={handleLogin} disabled={loading} />
      <CustomButton title="Pas encore inscrit ? S'inscrire" onPress={() => router.push('/signupScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#060d1e' },
  brand: { fontSize: 42, fontWeight: '900', color: '#fff', marginBottom: 8, letterSpacing: -1 },
  dot: { color: '#D42535' },
  title: { fontSize: 18, color: '#4a5a7a', marginBottom: 28, fontWeight: '500' },
  input: { width: '100%', borderWidth: 1, borderColor: '#1a2c55', padding: 14, borderRadius: 12,
           marginBottom: 14, color: '#fff', backgroundColor: '#0d1630', fontSize: 15 },
  button: { backgroundColor: '#D42535', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 14,
            width: '100%', marginBottom: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
