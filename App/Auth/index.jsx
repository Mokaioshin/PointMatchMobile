import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function IndexScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Charge l'utilisateur connecté au démarrage
  useEffect(() => {
    const loadUser = async () => {
      try {
        const stored = await AsyncStorage.getItem('currentUser');
        if (stored) {
          setUser(JSON.parse(stored));
        } else {
          // Pas connecté → redirige vers login
          router.replace('/loginScreen');
        }
      } catch (e) {
        console.error(e);
        router.replace('/loginScreen');
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      "Déconnexion",
      "Confirmer la déconnexion ?",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Se déconnecter",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem('currentUser');
            await AsyncStorage.removeItem('token');
            router.replace('/loginScreen');
          },
        },
      ]
    );
  };

  // Écran de chargement
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#D42535" />
      </View>
    );
  }

  // Écran principal si connecté
  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.brand}><Text style={styles.dot}>.</Text>Match</Text>

      {/* Carte utilisateur */}
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.username?.charAt(0).toUpperCase() ?? '?'}
          </Text>
        </View>
        <Text style={styles.welcome}>Bienvenue 👋</Text>
        <Text style={styles.username}>{user?.username ?? 'Utilisateur'}</Text>
        <Text style={styles.email}>{user?.email ?? ''}</Text>

        {/* Badge rôle */}
        <View style={[styles.badge, roleStyle(user?.role)]}>
          <Text style={styles.badgeText}>
            {user?.role === 'coach' ? '🎯 Coach' :
             user?.role === 'referee' ? '🟡 Arbitre' :
             '👤 Utilisateur'}
          </Text>
        </View>
      </View>

      {/* Infos token (debug) */}
      <View style={styles.debugBox}>
        <Text style={styles.debugTitle}>DEBUG · AsyncStorage</Text>
        <Text style={styles.debugText}>
          currentUser ✓ {'\n'}
          role : {user?.role ?? 'non défini'}{'\n'}
          token : {user?.token ? '✓ présent' : '⚠ absent'}
        </Text>
      </View>

      {/* Bouton déconnexion */}
      <Pressable style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </Pressable>

    </View>
  );
}

// Couleur du badge selon le rôle
const roleStyle = (role) => {
  if (role === 'coach') return { backgroundColor: '#0f2050', borderColor: '#2147B0' };
  if (role === 'referee') return { backgroundColor: '#1a1a0a', borderColor: '#f59e0b' };
  return { backgroundColor: '#0a2015', borderColor: '#22c55e' };
};

const styles = StyleSheet.create({
  centered: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#060d1e',
  },
  container: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    padding: 24, backgroundColor: '#060d1e',
  },
  brand: {
    fontSize: 42, fontWeight: '900', color: '#fff',
    marginBottom: 32, letterSpacing: -1,
  },
  dot: { color: '#D42535' },

  // Carte
  card: {
    width: '100%', backgroundColor: '#0d1630',
    borderRadius: 20, padding: 24, alignItems: 'center',
    borderWidth: 0.5, borderColor: '#1a2444', marginBottom: 16,
  },
  avatar: {
    width: 72, height: 72, borderRadius: 24,
    backgroundColor: '#D42535', justifyContent: 'center',
    alignItems: 'center', marginBottom: 14,
  },
  avatarText: { fontSize: 28, fontWeight: '900', color: '#fff' },
  welcome: { fontSize: 14, color: '#4a5a7a', marginBottom: 4 },
  username: { fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 4 },
  email: { fontSize: 13, color: '#4a5a7a', marginBottom: 14 },
  badge: {
    paddingVertical: 6, paddingHorizontal: 16,
    borderRadius: 20, borderWidth: 1,
  },
  badgeText: { fontSize: 13, fontWeight: '700', color: '#fff' },

  // Debug
  debugBox: {
    width: '100%', backgroundColor: '#0a1020',
    borderRadius: 14, padding: 16, marginBottom: 24,
    borderWidth: 0.5, borderColor: '#1a2444',
  },
  debugTitle: {
    fontSize: 11, fontWeight: '700', color: '#D42535',
    letterSpacing: 0.08, marginBottom: 8,
  },
  debugText: { fontSize: 13, color: '#4a5a7a', lineHeight: 22 },

  // Logout
  logoutBtn: {
    width: '100%', backgroundColor: '#100a12',
    borderWidth: 1, borderColor: '#2a1020',
    borderRadius: 14, paddingVertical: 15, alignItems: 'center',
  },
  logoutText: { color: '#D42535', fontSize: 16, fontWeight: '700' },
});