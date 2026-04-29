import { StyleSheet, Platform, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#06131f",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  // En-tête de recherche
  headerSection: {
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  subtitle: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 4,
  },

  // Formulaire de recherche
  searchCard: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 8,
    letterSpacing: 1,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  inputText: {
    color: "white",
    marginLeft: 10,
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
  },
  searchButton: {
    backgroundColor: "#E74C3C",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 14,
    fontStyle: "italic",
  },

  // Filtre Rapide (Grille de sports)
  filterTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  sportItem: {
    width: "30%", // 3 colonnes
    alignItems: "center",
    marginBottom: 20,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E74C3C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    elevation: 4,
    shadowColor: "#E74C3C",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  sportName: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
  }
});