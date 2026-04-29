import React from "react";
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "../../styles/coachs-screen.styles";

const SPORTS = [
  { id: 1, name: "BASKETBALL", icon: "basketball" },
  { id: 2, name: "TENNIS", icon: "tennis" },
  { id: 3, name: "FOOTBALL", icon: "soccer" },
  { id: 4, name: "NATATION", icon: "swim" },
  { id: 5, name: "RUGBY", icon: "rugby" },
  { id: 6, name: "BOXE", icon: "boxing-glove" },
];

export default function CoachsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.headerSection}>
          <Text style={styles.title}>TROUVER UN COACH</Text>
          <Text style={styles.subtitle}>DOMINEZ LE TERRAIN DANS VOTRE VILLE.</Text>
        </View>

        <View style={styles.searchCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>DISCIPLINE</Text>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="magnify" size={20} color="#E74C3C" />
              <TextInput placeholder="Quelle discipline ?" placeholderTextColor="rgba(255,255,255,0.3)" style={styles.inputText} />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>VILLE OU CODE POSTAL</Text>
            <View style={styles.inputWrapper}>
              <MaterialCommunityIcons name="map-marker" size={20} color="#E74C3C" />
              <TextInput placeholder="Où cherchez-vous ?" placeholderTextColor="rgba(255,255,255,0.3)" style={styles.inputText} />
            </View>
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>RECHERCHER</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.filterTitle}>FILTRE RAPIDE</Text>
        <View style={styles.grid}>
          {SPORTS.map((sport) => (
            <TouchableOpacity key={sport.id} style={styles.sportItem}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name={sport.icon} size={30} color="white" />
              </View>
              <Text style={styles.sportName}>{sport.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}