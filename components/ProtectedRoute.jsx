import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

// On ajoute "roles" dans les props (par défaut un tableau vide)
const ProtectedRoute = ({ children, roles = [], userTypeRequired = null }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // Ou ton loader

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Sécurité par RÔLE (ex: ROLE_ADMIN)
  if (roles.length > 0) {
    const hasRole = roles.some((role) => user.roles?.includes(role));
    if (!hasRole) return <Navigate to="/" replace />;
  }

  // Sécurité par TYPE (ex: professional / particular)
  if (userTypeRequired && user.userType !== userTypeRequired) {
    // Si l'admin essaie d'aller sur une page Pro, on le redirige vers son dashboard
    if (user.roles.includes("ROLE_ADMIN")) {
      return <Navigate to="/admin" replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
