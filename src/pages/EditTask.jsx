import { useEffect, useState } from "react";
import { getTaskById, updateTask } from "../services/taskService";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";


export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const t = getTaskById(id);
    setTask(t);
  }, [id]);

  if (!task) return <p>Chargement...</p>;

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateTask(task);
    navigate("/tasks");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      <Card>
        <h2 className="text-xl font-semibold mb-4">Modifier la tâche</h2>

        <Input
          name="title"
          value={task.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
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

        <Button onClick={handleSubmit} className="mt-4 w-full">
          Enregistrer les modifications
        </Button>
      </Card>
    </div>
  );
}
