import React from "react";
import { 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity, 
  StatusBar 
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { styles } from "../../styles/HomeScreen.styles"; 

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header de bienvenue (Ready to Fight) */}
        <View style={styles.welcomeHeader}>
          <Text style={styles.mainTitle}>
            READY TO <Text style={styles.highlightText}>FIGHT?</Text>
          </Text>
          <Text style={styles.welcomeSubtitle}>CONTENT DE TE REVOIR, JEAN.</Text>
        </View>

        {/* Section Prochain Rendez-vous */}
        <Text style={styles.sectionLabel}>// PROCHAIN RENDEZ-VOUS</Text>
        <View style={styles.appointmentCard}>
          <Text style={styles.noMatchText}>AUCUN MATCH PRÉVU</Text>
          <TouchableOpacity 
            style={styles.findCoachBtn}
            onPress={() => router.push("/coachs")} 
          >
            <Text style={styles.findCoachText}>TROUVER UN COACH</Text>
          </TouchableOpacity>
        </View>

        {/* Section Statistiques */}
        <Text style={styles.sectionLabel}>// TES STATS</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <View>
              <Text style={styles.statValue}>1</Text>
              <Text style={styles.statDesc}>JOUÉS</Text>
            </View>
            <MaterialCommunityIcons name="trophy" size={24} color="#f1c40f" />
          </View>

          <View style={styles.statBox}>
            <View>
              <Text style={styles.statValue}>2</Text>
              <Text style={styles.statDesc}>SPORTS</Text>
            </View>
            <MaterialCommunityIcons name="shoe-sneaker" size={24} color="#9b59b6" />
          </View>

          {/* Lien vers le profil (Modifier mes infos) */}
          <TouchableOpacity 
            style={styles.profileLinkBox}
            onPress={() => router.push("/profil")}
          >
            <Text style={styles.profileLinkText}>PROFIL</Text>
            <Text style={styles.profileLinkSubtext}>Modifier mes infos →</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}