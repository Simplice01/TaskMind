import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center px-6">

      <div className="max-w-xl w-full text-center animate-fadeIn">

        {/* Logo / Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3">
          AI Task Assistant
        </h1>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
          Organisez vos tâches, débloquez votre productivité et laissez l’IA vous guider.
          <br />
          <span className="text-indigo-600 font-semibold">
            Simple. Rapide. Intelligent.
          </span>
        </p>

        {/* Illustration glossy */}
        <div className="relative mb-10">
          <div className="w-full h-48 bg-white/40 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/50 flex items-center justify-center">
            <p className="text-5xl">⚡</p>
          </div>

          {/* Glow effect */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-3 bg-indigo-300 blur-xl opacity-60" />
        </div>

        {/* CTA Button */}
        <Link
          to="/lock"
          className="
            inline-block px-10 py-4 text-lg font-semibold
            bg-indigo-600 text-white rounded-xl
            shadow-lg hover:shadow-2xl hover:bg-indigo-700
            transition transform hover:-translate-y-1
          "
        >
          Lancer l’application 🚀
        </Link>

        {/* Footnote */}
        <p className="mt-8 text-sm text-gray-500">
          Accès sécurisé — protégé par code PIN 🔐
        </p>

      </div>
    </div>
  );
}
