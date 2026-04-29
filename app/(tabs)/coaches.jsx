import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "../../styles/HomeScreen.styles"; 

export default function CoachesScreen() {
  const sportsData = [
    { name: 'BASKETBALL', icon: 'basketball' },
    { name: 'TENNIS', icon: 'tennis-ball' },
    { name: 'FOOTBALL', icon: 'soccer' },
    { name: 'NATATION', icon: 'swim' },
    { name: 'RUGBY', icon: 'rugby' },
    { name: 'BOXE', icon: 'boxing-glove' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Recherche */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>TROUVER UN <Text style={styles.heroHighlight}>COACH</Text></Text>
          <Text style={styles.heroSubtitle}>DOMINEZ LE TERRAIN DANS VOTRE VILLE.</Text>
        </View>

        {/* Barre de Recherche */}
        <View style={styles.searchSection}>
          <View style={styles.inputGroup}>
            <MaterialCommunityIcons name="magnify" color="rgba(255,255,255,0.4)" size={20} />
            <TextInput placeholder="DISCIPLINE" placeholderTextColor="#555" style={styles.input} />
          </View>
          <View style={styles.inputGroup}>
            <MaterialCommunityIcons name="map-marker" color="rgba(255,255,255,0.4)" size={20} />
            <TextInput placeholder="VILLE OU CODE POSTAL" placeholderTextColor="#555" style={styles.input} />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>RECHERCHER</Text>
          </TouchableOpacity>
        </View>

        {/* Grille de Sports */}
        <Text style={styles.sectionLabel}>FILTRE RAPIDE</Text>
        <View style={styles.filterGrid}>
          {sportsData.map((sport) => (
            <TouchableOpacity key={sport.name} style={styles.sportCard}>
              <MaterialCommunityIcons name={sport.icon} size={32} color="#E74C3C" />
              <Text style={styles.sportText}>{sport.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}