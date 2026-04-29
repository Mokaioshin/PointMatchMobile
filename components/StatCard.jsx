import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StatCard = ({ value, label, iconName }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <MaterialCommunityIcons name={iconName} size={24} color="rgba(255, 255, 255, 0.5)" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  label: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default StatCard;