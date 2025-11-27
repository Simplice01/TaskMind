import { useState } from "react";
import { createTask } from "../services/taskService";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function CreateTask() {
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    deadline: "",
    importance: 3,
    urgency: 3,
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!task.title) {
      alert("Le titre est obligatoire.");
      return;
    }

    createTask(task);
    navigate("/tasks");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Créer une tâche</h2>

        <Input
          name="title"
          placeholder="Titre"
          value={task.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-3"
        />

        <Input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
          className="mt-3"
        />

        <Input
          type="number"
          name="importance"
          value={task.importance}
          min="1"
          max="5"
          onChange={handleChange}
          className="mt-3"
        />

        <Input
          type="number"
          name="urgency"
          value={task.urgency}
          min="1"
          max="5"
          onChange={handleChange}
          className="mt-3"
        />

        <Button onClick={handleSubmit} className="mt-4 w-full">
          Enregistrer
        </Button>
      </Card>
    </div>
  );
}
