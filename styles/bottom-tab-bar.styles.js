import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20, // Légèrement remonté pour l'esthétique
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%", // Réduit légèrement la largeur pour un look plus "pilule"
    maxWidth: 400,
    backgroundColor: "#d92d20",
    borderRadius: 30, // Plus arrondi pour compenser la finesse
    paddingHorizontal: 10,
    paddingVertical: 6, // RÉDUIT (était à 12) : C'est ici que l'épaisseur diminue
    shadowColor: "#7f1d1d",
    shadowOpacity: 0.22,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2, // RÉDUIT (était à 6) : Rapproche l'icône du texte
    minHeight: 44, // RÉDUIT (était à 56) : C'est la hauteur propre de chaque bouton
    borderRadius: 24,
    paddingVertical: 4,
  },
  activeTab: {
    backgroundColor: "#ef4a3a",
  },
  label: {
    color: "#ffe3df",
    fontSize: 10, // RÉDUIT (était à 11) : Pour rester proportionnel à la finesse
    fontWeight: "700",
    letterSpacing: 0.3, // Un peu d'espacement pour la lisibilité
  },
  activeLabel: {
    color: "#ffffff",
  },
});