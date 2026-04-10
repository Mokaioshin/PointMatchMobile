import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  matchButton: {
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 1000,
    backgroundColor: "#d92d20",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    minWidth: 88,
    minHeight: 42,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.94,
  },
  matchText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -0.5,
  },
});
