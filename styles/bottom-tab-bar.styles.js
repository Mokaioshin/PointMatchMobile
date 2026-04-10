import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 18,
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 420,
    backgroundColor: "#d92d20",
    borderRadius: 28,
    paddingHorizontal: 14,
    paddingVertical: 12,
    shadowColor: "#7f1d1d",
    shadowOpacity: 0.22,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    minHeight: 56,
    borderRadius: 22,
    paddingVertical: 8,
  },
  activeTab: {
    backgroundColor: "#ef4a3a",
  },
  label: {
    color: "#ffe3df",
    fontSize: 11,
    fontWeight: "700",
  },
  activeLabel: {
    color: "#ffffff",
  },
});
