import { useState } from "react";
import { getPin } from "../services/pinService";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function LockScreen() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const savedPin = getPin();

    if (pin === savedPin) {
      login();
      navigate("/tasks");
    } else {
      setError("PIN incorrect");
      setPin("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-xl rounded-3xl px-10 py-12 max-w-sm w-full text-center animate-fadeIn">

        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Déverrouiller l’accès 🔐
        </h1>

        <p className="text-gray-600 mb-8">
          Entrez votre code sécurisé pour accéder à vos tâches.
        </p>

        {/* Champ PIN */}
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength={5}
          placeholder="•••••"
          className="
            w-full text-center text-3xl font-bold tracking-widest
            bg-white border border-gray-300 rounded-xl py-3
            focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
            outline-none transition mb-4
          "
        />

        {/* Erreur */}
        {error && (
          <p className="text-red-600 font-medium mb-4 animate-pulse">
            {error}
          </p>
        )}

        {/* Bouton Déverrouiller */}
        <button
          onClick={handleSubmit}
          className="
            w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold
            py-3 rounded-xl shadow-md hover:shadow-lg transition text-lg mb-4
          "
        >
          Déverrouiller
        </button>

        {/* Bouton Créer un PIN (noir premium) */}
        <button
          onClick={() => navigate('/create-pin')}
          className="
            w-full bg-black text-white font-semibold py-3 rounded-xl
            hover:bg-gray-900 transition shadow-sm hover:shadow-lg text-lg
          "
        >
          Créer un nouveau PIN
        </button>

      </div>
    </div>
  );
}
