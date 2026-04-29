import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity, 
  Platform, 
  StatusBar,
  Dimensions 
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// --- DONNÉES ET COMPOSANTS INTERNES ---

const matchsData = [
  { id: 1, coach: "COACH BERNARD", sport: "BASKETBALL", date: "28 MARS 2026", time: "09:00", status: "EN ATTENTE", color: "#E74C3C", initiales: "SB" },
  { id: 2, coach: "COACH MARTIN", sport: "TENNIS", date: "27 MARS 2026", time: "09:00", status: "EN ATTENTE", color: "#E74C3C", initiales: "TM" },
  { id: 3, coach: "COACH MARTIN", sport: "TENNIS", date: "20 MARS 2026", time: "09:00", status: "CONFIRMÉ", color: "#3498DB", initiales: "TM" },
  { id: 4, coach: "COACH HAUSER", sport: "BASKETBALL", date: "20 MARS 2026", time: "09:00", status: "TERMINÉ", color: "#2ECC71", initiales: "TH", canReview: true },
];

const MatchCard = ({ match }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <View style={[styles.avatar, { backgroundColor: match.color }]}>
        <Text style={styles.avatarText}>{match.initiales}</Text>
      </View>
      <View style={styles.coachInfo}>
        <View style={styles.badgeRow}>
          <Text style={styles.badgeCoach}>COACH</Text>
          <Text style={[styles.badgeStatus, { borderColor: match.canReview ? '#2ECC71' : '#f1c40f', color: match.canReview ? '#2ECC71' : '#f1c40f' }]}>
            {match.status}
          </Text>
          <Text style={styles.badgeSport}>{match.sport}</Text>
        </View>
        <Text style={styles.coachName}>{match.coach}</Text>
        <View style={styles.dateTimeRow}>
          <MaterialCommunityIcons name="calendar" size={14} color="rgba(255,255,255,0.4)" />
          <Text style={styles.dateTimeText}>{match.date}  •  </Text>
          <MaterialCommunityIcons name="clock-outline" size={14} color="rgba(255,255,255,0.4)" />
          <Text style={styles.dateTimeText}>{match.time}</Text>
        </View>
      </View>
    </View>
    <View style={styles.cardFooter}>
      <View>
        <Text style={styles.locationLabel}>LOCALISATION</Text>
        <View style={styles.locationRow}>
          <MaterialCommunityIcons name="map-marker" size={14} color="#E74C3C" />
          <Text style={styles.locationText}>Terrain Principal</Text>
        </View>
      </View>
      {match.canReview ? (
        <TouchableOpacity style={styles.reviewButton}>
          <Text style={styles.reviewButtonText}>LAISSER UN AVIS</Text>
          <MaterialCommunityIcons name="star" size={14} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>ANNULER LE MATCH</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

// --- COMPOSANT PRINCIPAL ---

export default function MyMatchsScreen() {
  const [viewMode, setViewMode] = useState('liste'); // 'liste' ou 'planning'

  const days = [
    { label: 'LUN.', date: '27' }, { label: 'MAR.', date: '28' },
    { label: 'MER.', date: '29' }, { label: 'JEU.', date: '30' },
    { label: 'VEN.', date: '1' }, { label: 'SAM.', date: '2' },
    { label: 'DIM.', date: '3' },
  ];

  const hours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header avec sélecteur */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>MES <Text style={styles.highlight}>MATCHS</Text></Text>
            <Text style={styles.subtitle}>Gérez votre emploi du temps sportif.</Text>
          </View>
          
          <View style={styles.tabSelector}>
            <TouchableOpacity 
              onPress={() => setViewMode('liste')}
              style={[styles.tabButton, viewMode === 'liste' && styles.tabActive]}
            >
              <Text style={[styles.tabText, viewMode === 'liste' && styles.tabTextActive]}>LISTE</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setViewMode('planning')}
              style={[styles.tabButton, viewMode === 'planning' && styles.tabActive]}
            >
              <Text style={[styles.tabText, viewMode === 'planning' && styles.tabTextActive]}>PLANNING</Text>
            </TouchableOpacity>
          </View>
        </View>

        {viewMode === 'planning' ? (
          <View style={styles.planningContainer}>
            <View style={styles.weekNav}>
              <TouchableOpacity><MaterialCommunityIcons name="chevron-left" size={20} color="#3498DB" /></TouchableOpacity>
              <Text style={styles.weekText}>SEMAINE DU 27 AVR.</Text>
              <TouchableOpacity><MaterialCommunityIcons name="chevron-right" size={20} color="#3498DB" /></TouchableOpacity>
            </View>

            <View style={styles.gridBoard}>
              <View style={styles.gridHeader}>
                <View style={styles.timeLabelCell}><Text style={styles.gridHeaderText}>TIME</Text></View>
                {days.map((day, i) => (
                  <View key={i} style={styles.dayCol}>
                    <Text style={styles.dayLabel}>{day.label}</Text>
                    <Text style={styles.dayDate}>{day.date}</Text>
                  </View>
                ))}
              </View>

              {hours.map((hour, i) => (
                <View key={i} style={styles.gridRow}>
                  <View style={styles.timeLabelCell}>
                    <Text style={styles.timeText}>{hour}</Text>
                  </View>
                  {days.map((_, j) => (
                    <View key={j} style={styles.gridCell}>
                      {i === 1 && j === 1 && <View style={styles.activeSlot} />} 
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View>
            {matchsData.map(match => (
              <MatchCard key={match.id} match={match} />
            ))}
          </View>
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#06131f", paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 },
  scrollContent: { padding: 15 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  title: { color: "white", fontSize: 24, fontWeight: "900" },
  highlight: { color: "#E74C3C", fontStyle: "italic" },
  subtitle: { color: "rgba(255,255,255,0.4)", fontSize: 10 },

  tabSelector: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 3 },
  tabButton: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  tabActive: { backgroundColor: '#E74C3C' },
  tabText: { color: 'rgba(255,255,255,0.5)', fontSize: 9, fontWeight: '800' },
  tabTextActive: { color: 'white' },

  // Styles de la Liste
  card: { backgroundColor: "rgba(255,255,255,0.03)", borderRadius: 16, padding: 15, marginBottom: 15, borderWidth: 1, borderColor: "rgba(255,255,255,0.05)" },
  cardHeader: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)', paddingBottom: 15, marginBottom: 15 },
  avatar: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: 'white', fontWeight: '900', fontSize: 18 },
  coachInfo: { marginLeft: 15, flex: 1 },
  badgeRow: { flexDirection: 'row', gap: 6, marginBottom: 4 },
  badgeCoach: { backgroundColor: '#E74C3C', color: 'white', fontSize: 8, fontWeight: '900', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeStatus: { borderWidth: 1, fontSize: 8, fontWeight: '900', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeSport: { color: 'rgba(255,255,255,0.4)', fontSize: 8, fontWeight: '700', paddingVertical: 2 },
  coachName: { color: 'white', fontSize: 18, fontWeight: '900', marginBottom: 4 },
  dateTimeRow: { flexDirection: 'row', alignItems: 'center' },
  dateTimeText: { color: 'rgba(255,255,255,0.4)', fontSize: 11, marginLeft: 5 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  locationLabel: { color: 'rgba(255,255,255,0.3)', fontSize: 8, fontWeight: '700', marginBottom: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  locationText: { color: 'white', fontSize: 12, fontWeight: '700', marginLeft: 4 },
  cancelButton: { borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  cancelButtonText: { color: 'rgba(255,255,255,0.5)', fontSize: 9, fontWeight: '800' },
  reviewButton: { backgroundColor: '#E74C3C', flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  reviewButtonText: { color: 'white', fontSize: 9, fontWeight: '900', fontStyle: 'italic' },

  // Styles du Planning
  weekNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.03)', padding: 10, borderTopLeftRadius: 12, borderTopRightRadius: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' },
  weekText: { color: 'white', fontSize: 10, fontWeight: '900', fontStyle: 'italic' },
  gridBoard: { backgroundColor: 'rgba(255,255,255,0.02)', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, overflow: 'hidden' },
  gridHeader: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.03)' },
  gridHeaderText: { color: 'rgba(255,255,255,0.2)', fontSize: 8, fontWeight: '700' },
  timeLabelCell: { width: 45, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderRightColor: 'rgba(255,255,255,0.05)' },
  dayCol: { flex: 1, alignItems: 'center', paddingVertical: 8, borderRightWidth: 1, borderRightColor: 'rgba(255,255,255,0.05)' },
  dayLabel: { color: '#E74C3C', fontSize: 8, fontWeight: '900' },
  dayDate: { color: 'white', fontSize: 14, fontWeight: '900' },
  gridRow: { flexDirection: 'row', height: 50, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.05)' },
  timeText: { color: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: '600' },
  gridCell: { flex: 1, borderRightWidth: 1, borderRightColor: 'rgba(255,255,255,0.05)' },
  activeSlot: { position: 'absolute', right: 0, top: 0, bottom: 0, width: 4, backgroundColor: '#E74C3C' },
});