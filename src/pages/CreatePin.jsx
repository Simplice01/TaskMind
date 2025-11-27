import { useState } from "react";
import { savePin } from "../services/pinService";
import { useNavigate } from "react-router-dom";

export default function CreatePin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (pin.length < 4) {
      setError("Le PIN doit contenir au moins 4 chiffres.");
      return;
    }

    savePin(pin);
    navigate("/lock");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-xl rounded-3xl px-10 py-12 max-w-sm w-full text-center animate-fadeIn">

        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Créer un PIN 🔒
        </h1>

        {/* Sous-texte */}
        <p className="text-gray-600 mb-8 text-sm">
          Ce code sécurisera l’accès à votre application.
        </p>

        {/* Champ PIN */}
        <input
          type="password"
          value={pin}
          maxLength={5}
          onChange={(e) => {
            setPin(e.target.value);
            setError("");
          }}
          placeholder="•••••"
          className="
            w-full text-center text-3xl font-bold tracking-widest
            bg-white border border-gray-300 rounded-xl py-3
            focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
            outline-none transition mb-4
          "
        />

        {/* Erreur affichée */}
        {error && (
          <p className="text-red-600 font-medium mb-4 animate-pulse">
            {error}
          </p>
        )}

        {/* Bouton Enregistrer (noir premium) */}
        <button
          onClick={handleSave}
          className="
            w-full bg-black text-white font-semibold py-3 rounded-xl
            hover:bg-gray-900 transition shadow-sm hover:shadow-lg text-lg
          "
        >
          Enregistrer
        </button>

        {/* Bouton Retour */}
        <button
          onClick={() => navigate("/lock")}
          className="
            w-full mt-4 text-gray-600 hover:text-gray-900
            font-medium transition text-sm
          "
        >
          Retour ➜
        </button>

        {/* 🔥 Lien stylé vers l'accueil */}
        <button
          onClick={() => navigate("/")}
          className="
            mt-6 inline-flex items-center gap-2 text-gray-700 
            font-medium hover:text-indigo-700 transition 
            hover:translate-x-1 duration-150
          "
        >
          <span className="text-lg">🏠</span>
          <span>Retour à l’accueil</span>
        </button>

      </div>
    </div>
  );
}
