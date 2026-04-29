import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CoachsSearchScreen() {
  const sports = [
    { id: 1, name: 'BASKETBALL', icon: 'basketball' },
    { id: 2, name: 'TENNIS', icon: 'tennis-ball' },
    { id: 3, name: 'FOOTBALL', icon: 'soccer' },
    { id: 4, name: 'NATATION', icon: 'swim' },
    { id: 5, name: 'RUGBY', icon: 'rugby' },
    { id: 6, name: 'VOLLEYBALL', icon: 'volleyball' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>TROUVER UN <Text style={styles.highlight}>COACH</Text></Text>
          <Text style={styles.subtitle}>DOMINEZ LE TERRAIN DANS VOTRE VILLE.</Text>
        </View>

        <View style={styles.searchBox}>
          <View style={styles.inputWrap}>
            <MaterialCommunityIcons name="magnify" size={20} color="rgba(255,255,255,0.3)" />
            <TextInput placeholder="DISCIPLINE" placeholderTextColor="#555" style={styles.input} />
          </View>
          <View style={styles.inputWrap}>
            <MaterialCommunityIcons name="map-marker" size={20} color="rgba(255,255,255,0.3)" />
            <TextInput placeholder="VILLE OU CODE POSTAL" placeholderTextColor="#555" style={styles.input} />
          </View>
          <TouchableOpacity style={styles.btnSearch}>
            <Text style={styles.btnSearchText}>RECHERCHER</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>FILTRE RAPIDE</Text>
        <View style={styles.grid}>
          {sports.map(sport => (
            <TouchableOpacity key={sport.id} style={styles.card}>
              <MaterialCommunityIcons name={sport.icon} size={32} color="#E74C3C" />
              <Text style={styles.cardText}>{sport.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.titleResults}>RÉSULTATS</Text>
        <View style={styles.emptyResults}>
            <Text style={styles.emptyText}>Utilisez les filtres pour trouver votre coach.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#06131f" },
  scrollContent: { padding: 20 },
  header: { marginBottom: 25, marginTop: 10 },
  title: { color: "white", fontSize: 26, fontWeight: "900" },
  highlight: { color: "#E74C3C", fontStyle: "italic" },
  subtitle: { color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: 1 },
  searchBox: { backgroundColor: "rgba(255,255,255,0.03)", padding: 15, borderRadius: 15, gap: 10, marginBottom: 30 },
  inputWrap: { flexDirection: "row", alignItems: "center", backgroundColor: "#0d1f2d", paddingHorizontal: 15, borderRadius: 10 },
  input: { flex: 1, color: "white", height: 48, fontSize: 13 },
  btnSearch: { backgroundColor: "#E74C3C", height: 50, borderRadius: 10, justifyContent: "center", alignItems: "center", marginTop: 5 },
  btnSearchText: { color: "white", fontWeight: "900" },
  label: { color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: "700", marginBottom: 15 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: { width: "48%", backgroundColor: "rgba(255,255,255,0.05)", aspectRatio: 1.3, borderRadius: 15, justifyContent: "center", alignItems: "center", marginBottom: 15, borderWidth: 1, borderColor: "rgba(255,255,255,0.08)" },
  cardText: { color: "white", fontSize: 10, fontWeight: "800", marginTop: 10 },
  titleResults: { color: "white", fontSize: 22, fontWeight: "900", marginTop: 10, marginBottom: 20 },
  emptyResults: { height: 150, justifyContent: 'center', alignItems: 'center', borderStyle: 'dashed', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', borderRadius: 15 },
  emptyText: { color: 'rgba(255,255,255,0.3)', fontSize: 12 }
});