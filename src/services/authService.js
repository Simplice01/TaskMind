export function login() {
  localStorage.setItem("session", "true");
}

export function logout() {
  localStorage.removeItem("session");
}

export function isLoggedIn() {
  return localStorage.getItem("session") === "true";
}
