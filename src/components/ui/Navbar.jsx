import { Link, useNavigate } from "react-router-dom";
import { logout, isLoggedIn } from "../../services/authService";

export default function Navbar() {
  const navigate = useNavigate();

  // 🔒 Si pas connecté, on n'affiche rien → évite les erreurs
  if (!isLoggedIn()) return null;

  const handleLogout = () => {
    logout();
    navigate("/lock");
  };

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-900">
        AI Task Assistant
      </h1>

      <div className="flex items-center gap-5">
        <Link className="text-gray-700 hover:text-black" to="/tasks">
          Tâches
        </Link>

        <Link className="text-gray-700 hover:text-black" to="/create-task">
          Nouvelle tâche
        </Link>

        <Link className="text-gray-700 hover:text-black" to="/change-pin">
          Modifier PIN
        </Link>

        <button
          onClick={handleLogout}
          className="text-red-600 hover:text-red-800 font-medium"
        >
          Déconnexion
        </button>
      </div>
    </nav>
  );
}
