import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Contextes et Protections
// import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

// Écrans
import Accueil from "./app/(tabs)/Accueil";
// import Dashboard from "./pages/admins/Dashboard";
import Profile from "./app/(tabs)/profile";
import Availability from "./app/Availability";
import Planning from "./app/Booking/Planning";
import MySessions from "./app/Booking/MySessions";
import SportDetail from "./pages/sports/SportDetail";
import SportsList from "./pages/sports/SportsList";
import

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        {/* Le Stack.Navigator remplace createBrowserRouter */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#121212" }, // Ton style brand-dark
            headerTintColor: "#fff",
          }}
        >
          {/* --- ACCUEIL --- */}
          <Stack.Screen name="Home">
            {(props) => (
              <ProtectedRoute {...props}>
                <Accueil />
              </ProtectedRoute>
            )}
          </Stack.Screen>

          {/* --- ZONE ADMIN --- */}
          <Stack.Screen name="AdminDashboard">
            {(props) => (
              <ProtectedRoute {...props} roles={["ROLE_ADMIN"]}>
                <Dashboard />
              </ProtectedRoute>
            )}
          </Stack.Screen>

          {/* --- ZONE CLIENT (ÉLÈVE) --- */}
          <Stack.Screen name="Sports">
            {(props) => (
              <ProtectedRoute {...props} userTypeRequired="particular">
                <SportsList />
              </ProtectedRoute>
            )}
          </Stack.Screen>

          <Stack.Screen name="SportDetail">
            {(props) => (
              <ProtectedRoute {...props} userTypeRequired="particular">
                <SportDetail />
              </ProtectedRoute>
            )}
          </Stack.Screen>

          <Stack.Screen name="MyBookings">
            {(props) => (
              <ProtectedRoute {...props} userTypeRequired="particular">
                <MyBookings />
              </ProtectedRoute>
            )}
          </Stack.Screen>

          {/* --- ZONE PRO (COACH) --- */}
          <Stack.Screen name="ManageAvailabilities">
            {(props) => (
              <ProtectedRoute {...props} userTypeRequired="professional">
                <ManageAvailabilities />
              </ProtectedRoute>
            )}
          </Stack.Screen>

          <Stack.Screen name="MySessions">
            {(props) => (
              <ProtectedRoute {...props} userTypeRequired="professional">
                <MySessions />
              </ProtectedRoute>
            )}
          </Stack.Screen>

          {/* --- ZONE COMMUNE --- */}
          <Stack.Screen name="Profile">
            {(props) => (
              <ProtectedRoute {...props}>
                <Profile />
              </ProtectedRoute>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
