import { useState } from "react";
import { changePin } from "../services/pinService";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function ChangePin() {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {
    if (newPin.length !== 5) {
      setError("Le nouveau PIN doit contenir 5 chiffres.");
      return;
    }

    if (changePin(oldPin, newPin)) {
      navigate("/lock");
    } else {
      setError("Ancien PIN incorrect.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <Card>
        <h1 className="text-2xl font-bold text-center mb-6">
          Modifier votre PIN
        </h1>

        <Input
          type="password"
          placeholder="Ancien PIN"
          value={oldPin}
          onChange={(e) => setOldPin(e.target.value)}
          maxLength="5"
        />
        <Input
          type="password"
          placeholder="Nouveau PIN (5 chiffres)"
          value={newPin}
          onChange={(e) => setNewPin(e.target.value)}
          maxLength="5"
          className="mt-3"
        />

        {error && (
          <p className="text-red-500 text-center mt-2">{error}</p>
        )}

        <Button onClick={handleChange} className="w-full mt-4">
          Modifier le PIN
        </Button>
      </Card>
    </div>
  );
}
