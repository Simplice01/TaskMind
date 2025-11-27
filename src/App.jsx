import './App.css';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/ui/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />      {/* 🔥 La Navbar est ici */}
      <AppRouter />   {/* 🔥 Router en dessous */}
    </div>
  );
}
