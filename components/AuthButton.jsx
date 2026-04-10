import { Pressable, Text } from "react-native";
import { styles } from "../styles/auth-button.styles";

export default function AuthButton({
  title,
  onPress,
  disabled = false,
  variant = "primary",
}) {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "secondary" && styles.secondaryButton,
        disabled && styles.disabledButton,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "secondary" && styles.secondaryButtonText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
