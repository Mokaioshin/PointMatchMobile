import { TextInput } from "react-native";
import { styles } from "../styles/auth-input.styles";

export default function AuthInput({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
}) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#6f7d90"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      style={styles.input}
    />
  );
}
