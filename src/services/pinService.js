// Clé unique et cohérente pour tout le projet
const PIN_KEY = "ai_task_pin";

// Sauvegarde du PIN
export function savePin(pin) {
  localStorage.setItem(PIN_KEY, pin);
}

// Récupération du PIN
export function getPin() {
  return localStorage.getItem(PIN_KEY);
}

// Vérifier si un PIN existe déjà
export function pinExists() {
  return getPin() !== null;
}

// Vérifier si le PIN entré est correct
export function verifyPin(pin) {
  return getPin() === pin;
}

// Changer le PIN
export function changePin(oldPin, newPin) {
  if (verifyPin(oldPin)) {
    savePin(newPin);
    return true;
  }
  return false;
}
