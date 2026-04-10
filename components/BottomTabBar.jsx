import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/bottom-tab-bar.styles";

const ICONS = {
  index: "home",
  coaches: "people",
  planning: "calendar",
  profile: "person",
};

export default function BottomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={[styles.tab, isFocused && styles.activeTab]}
            >
              <Ionicons
                name={ICONS[route.name] || "ellipse"}
                size={22}
                color={isFocused ? "#ffffff" : "#ffd5d0"}
              />
              <Text style={[styles.label, isFocused && styles.activeLabel]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
