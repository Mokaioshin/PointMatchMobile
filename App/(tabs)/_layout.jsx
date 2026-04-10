import { Tabs } from "expo-router";
import BottomTabBar from "../../components/BottomTabBar";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="coaches" options={{ title: "Coachs" }} />
      <Tabs.Screen name="planning" options={{ title: "Planning" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}
