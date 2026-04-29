import React from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView, 
  TouchableOpacity, 
  Platform, 
  StatusBar 
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Configure la barre de statut du téléphone en blanc sur fond sombre */}
      <StatusBar barStyle="light-content" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* HEADER : Titre et bouton déconnexion */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>
              MON <Text style={styles.highlight}>PROFIL</Text>
            </Text>
            <Text style={styles.subtitle}>STATUT : PARTICULIER</Text>
          </View>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>DÉCONNEXION</Text>
          </TouchableOpacity>
        </View>

        {/* CARTE PRINCIPALE */}
        <View style={styles.profileCard}>
          {/* Bannière supérieure avec l'avatar qui chevauche */}
          <View style={styles.banner}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
          </View>

          <View style={styles.cardBody}>
            {/* IDENTITÉ */}
            <View style={styles.section}>
              <Text style={styles.label}>IDENTITÉ DU COMBATTANT</Text>
              <Text style={styles.userName}>JEAN DUPONT</Text>
              <Text style={styles.userEmail}>USER1@EXAMPLE.COM</Text>
            </View>

            {/* GRILLE D'INFO : Téléphone et Ville */}
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.label}>TÉLÉPHONE</Text>
                <Text style={styles.infoValue}>0601000000</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.label}>LOCALISATION</Text>
                <View style={styles.row}>
                  <MaterialCommunityIcons name="map-marker" size={14} color="#E74C3C" />
                  <Text style={styles.infoValue}> Paris</Text>
                </View>
              </View>
            </View>

            {/* DISCIPLINES : Badges horizontaux */}
            <View style={styles.section}>
              <Text style={styles.labelRed}>MES DISCIPLINES</Text>
              <View style={styles.badgeRow}>
                <View style={styles.sportBadge}>
                  <MaterialCommunityIcons name="basketball" size={14} color="white" />
                  <Text style={styles.sportBadgeText}>BASKETBALL</Text>
                </View>
                <View style={styles.sportBadge}>
                  <MaterialCommunityIcons name="tennis" size={14} color="white" />
                  <Text style={styles.sportBadgeText}>TENNIS</Text>
                </View>
              </View>
            </View>

            {/* ACTION : Modifier */}
            <TouchableOpacity style={styles.editButton}>
              <MaterialCommunityIcons name="pencil" size={16} color="white" />
              <Text style={styles.editButtonText}>MODIFIER PROFIL</Text>
            </TouchableOpacity>

            {/* STATISTIQUES ET DATES */}
            <View style={styles.accountStats}>
               <View style={styles.statRow}>
                  <Text style={styles.statLabel}>STATUT</Text>
                  <Text style={styles.statusActive}>OPÉRATIONNEL</Text>
               </View>
               <View style={styles.statRow}>
                  <Text style={styles.statLabel}>MEMBRE DEPUIS</Text>
                  <Text style={styles.statDate}>18/03/2026</Text>
               </View>
               <View style={styles.statRow}>
                  <Text style={styles.statLabel}>DERNIÈRE MISE À JOUR</Text>
                  <Text style={styles.statDate}>26/03/2026</Text>
               </View>
            </View>

            {/* ACTION CRITIQUE */}
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteText}>SUPPRIMER LE COMPTE DÉFINITIVEMENT</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#06131f", 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
  },
  scrollContent: { padding: 20 },
  
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 25 },
  title: { color: "white", fontSize: 26, fontWeight: "900" },
  highlight: { color: "#E74C3C", fontStyle: "italic" },
  subtitle: { color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: "700" },
  
  logoutButton: { 
    backgroundColor: "rgba(255,255,255,0.05)", 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 6, 
    borderWidth: 1, 
    borderColor: "rgba(255,255,255,0.1)" 
  },
  logoutText: { color: "white", fontSize: 9, fontWeight: "800" },

  profileCard: { 
    backgroundColor: "rgba(255,255,255,0.03)", 
    borderRadius: 20, 
    overflow: 'hidden', 
    borderWidth: 1, 
    borderColor: "rgba(255,255,255,0.05)" 
  },
  banner: { height: 80, backgroundColor: "rgba(231, 76, 60, 0.15)", justifyContent: 'flex-end', paddingLeft: 20 },
  avatarContainer: { 
    width: 70, 
    height: 70, 
    backgroundColor: "#E74C3C", 
    borderRadius: 12, 
    marginBottom: -35, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4 
  },
  avatarText: { color: 'white', fontSize: 28, fontWeight: '900' },
  
  cardBody: { padding: 20, paddingTop: 45 },
  section: { marginBottom: 20 },
  label: { color: "rgba(255,255,255,0.3)", fontSize: 9, fontWeight: "800", marginBottom: 5 },
  labelRed: { color: "#E74C3C", fontSize: 10, fontWeight: "900", marginBottom: 10 },
  userName: { color: "white", fontSize: 24, fontWeight: "900" },
  userEmail: { color: "#E74C3C", fontSize: 12, fontWeight: "700", fontStyle: "italic" },

  infoGrid: { flexDirection: 'row', marginBottom: 25 },
  infoItem: { flex: 1 },
  infoValue: { color: "white", fontSize: 14, fontWeight: "700" },
  row: { flexDirection: 'row', alignItems: 'center' },

  badgeRow: { flexDirection: 'row', gap: 10 },
  sportBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6, 
    backgroundColor: "rgba(255,255,255,0.05)", 
    paddingHorizontal: 10, 
    paddingVertical: 6, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: "rgba(255,255,255,0.1)" 
  },
  sportBadgeText: { color: 'white', fontSize: 10, fontWeight: '800' },

  editButton: { 
    backgroundColor: '#E74C3C', 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 8, 
    paddingVertical: 14, 
    borderRadius: 12, 
    marginVertical: 20 
  },
  editButtonText: { color: 'white', fontSize: 13, fontWeight: '900', fontStyle: 'italic' },

  accountStats: { backgroundColor: "rgba(0,0,0,0.2)", padding: 15, borderRadius: 12, gap: 10 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statLabel: { color: 'rgba(255,255,255,0.3)', fontSize: 9, fontWeight: '700' },
  statusActive: { 
    color: '#2ECC71', 
    backgroundColor: 'rgba(46, 204, 113, 0.1)', 
    paddingHorizontal: 8, 
    paddingVertical: 2, 
    borderRadius: 4, 
    fontSize: 9, 
    fontWeight: '900' 
  },
  statDate: { color: 'white', fontSize: 11, fontWeight: '700' },

  deleteButton: { marginTop: 25, alignItems: 'center' },
  deleteText: { color: '#E74C3C', fontSize: 11, fontWeight: '900', letterSpacing: 0.5 }
});