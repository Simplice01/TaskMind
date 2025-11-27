import { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/taskService";
import { Link } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const list = getTasks();

    const sorted = list.sort((a, b) => {
      const order = { high: 3, medium: 2, low: 1 };
      return order[b.priority] - order[a.priority];
    });

    setTasks(sorted);
  }, []);

  const handleDelete = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 px-4 py-12">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Assistant IA</h1>
            <p className="text-gray-500 mt-1">
              Gérez vos tâches intelligemment ✨
            </p>
          </div>

          <Link
            to="/create-task"
            className="
              px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700
              text-white font-semibold shadow-md hover:shadow-lg transition
            "
          >
            + Nouvelle tâche
          </Link>
        </div>

        {/* EMPTY STATE */}
        {tasks.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🗒️</div>
            <p className="text-lg text-gray-600">
              Aucune tâche enregistrée pour le moment.
            </p>
            <Link
              to="/create-task"
              className="text-indigo-600 underline mt-3 inline-block"
            >
              Ajouter une tâche →
            </Link>
          </div>
        )}

        {/* TASK LIST */}
        <div className="space-y-5">
          {tasks.map((t) => (
            <div
              key={t.id}
              className="
                backdrop-blur-md bg-white/70
                border border-gray-200 rounded-2xl p-6
                shadow-sm hover:shadow-xl transition
                hover:-translate-y-1
              "
            >
              {/* Title */}
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-gray-900">{t.title}</h3>

                {/* Priority Badge */}
                <span
                  className={`
                    px-3 py-1 rounded-full text-sm font-semibold
                    ${t.priority === "high" && "bg-red-100 text-red-700"}
                    ${t.priority === "medium" && "bg-yellow-100 text-yellow-700"}
                    ${t.priority === "low" && "bg-green-100 text-green-700"}
                  `}
                >
                  {t.priority === "high" && "🔥 Haute"}
                  {t.priority === "medium" && "⚡ Moyenne"}
                  {t.priority === "low" && "🕑 Basse"}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mt-3">
                {t.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center mt-6">
                <Link
                  to={`/edit-task/${t.id}`}
                  className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                >
                  ✏️ Modifier
                </Link>

                <button
                  onClick={() => handleDelete(t.id)}
                  className="
                    px-4 py-2 bg-red-500 hover:bg-red-600 text-white 
                    rounded-lg font-semibold transition shadow-sm
                  "
                >
                  🗑️ Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
