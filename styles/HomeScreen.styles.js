import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#06131f",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Espace pour ne pas cacher le contenu derrière la barre de navigation
  },
  
  // Titre Principal "READY TO FIGHT?"
  welcomeHeader: {
    marginBottom: 30,
    marginTop: 10,
  },
  mainTitle: {
    color: "white",
    fontSize: 34,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  highlightText: {
    color: "#E74C3C",
    fontStyle: "italic",
  },
  welcomeSubtitle: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },

  // Labels de section (// PROCHAIN RENDEZ-VOUS)
  sectionLabel: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 11,
    fontWeight: "800",
    marginBottom: 15,
    letterSpacing: 1,
  },

  // Carte de rendez-vous (Dotted)
  appointmentCard: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
    borderStyle: "dashed",
    marginBottom: 35,
  },
  noMatchText: {
    color: "rgba(255,255,255,0.3)",
    fontSize: 13,
    fontWeight: "800",
    fontStyle: "italic",
    marginBottom: 20,
  },
  findCoachBtn: {
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },
  findCoachText: {
    color: "#06131f",
    fontWeight: "900",
    fontSize: 13,
  },

  // Statistiques
  statsContainer: {
    gap: 15,
  },
  statBox: {
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  statValue: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 35,
  },
  statDesc: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 10,
    fontWeight: "800",
  },

  // Bloc Profil (Modifier mes infos)
  profileLinkBox: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 18,
    padding: 20,
    marginTop: 5,
  },
  profileLinkText: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 4,
  },
  profileLinkSubtext: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    fontStyle: "italic",
  },
});