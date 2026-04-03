import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";
import RootLayout from "./layouts/RootLayout";
import Accueil from "./app/(tabs)/Accueil";
import Dashboard from "./pages/admins/Dashboard";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Profile from "./pages/auth/Profile.jsx";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import ManageAvailabilities from "./pages/availability/ManageAvailabilities.jsx";
import MyBookings from "./pages/bookings/MyBookings.jsx";
import MySessions from "./pages/sessions/MySessions.jsx";
import SportDetail from "./pages/sports/SportDetail.jsx";
import SportsList from "./pages/sports/SportsList";

// Configuration du Router
const router = createBrowserRouter([
  {
    // 1. LE SUPER PARENT : Il injecte l'Auth dans le contexte du Router
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    // Gestion des erreurs globale
    errorElement: (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center p-10 text-center text-white font-black uppercase italic">
        <h1>Oops! Cette page n'existe pas.</h1>
      </div>
    ),
    children: [
      {
        // 2. LE LAYOUT PRINCIPAL : Contient la Navbar et la logique de blocage Coach
        path: "/",
        element: <RootLayout />,
        children: [
          // --- ACCUEIL ---
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ),
          },

          // --- AUTHENTIFICATION ---
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
          { path: "forgot-password", element: <ForgotPassword /> },
          { path: "reset-password", element: <ResetPassword /> },

          // --- ZONE ADMIN ---
          {
            path: "admin",
            element: (
              <ProtectedRoute roles={["ROLE_ADMIN"]}>
                <Dashboard />
              </ProtectedRoute>
            ),
          },

          // --- ZONE CLIENT (ÉLÈVE) ---
          {
            path: "sports",
            element: (
              <ProtectedRoute userTypeRequired="particular">
                <SportsList />
              </ProtectedRoute>
            ),
          },
          {
            path: "sports/:id",
            element: (
              <ProtectedRoute userTypeRequired="particular">
                <SportDetail />
              </ProtectedRoute>
            ),
          },
          {
            path: "my-bookings",
            element: (
              <ProtectedRoute userTypeRequired="particular">
                <MyBookings />
              </ProtectedRoute>
            ),
          },

          // --- ZONE PRO (COACH) ---
          {
            path: "profile/availabilities",
            element: (
              <ProtectedRoute userTypeRequired="professional">
                <ManageAvailabilities />
              </ProtectedRoute>
            ),
          },
          {
            path: "my-sessions",
            element: (
              <ProtectedRoute userTypeRequired="professional">
                <MySessions />
              </ProtectedRoute>
            ),
          },

          // --- ZONE COMMUNE ---
          {
            path: "profile",
            element: (
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default function App() {
  // Rendu minimaliste : tout est géré par la config de 'router'
  return <RouterProvider router={router} />;
}
