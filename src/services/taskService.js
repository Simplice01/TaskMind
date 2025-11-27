import { calculatePriority } from "./priorityEngine";

const TASK_KEY = "ai_tasks";

export function getTasks() {
  const tasks = localStorage.getItem(TASK_KEY);
  return tasks ? JSON.parse(tasks) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks));
}

export function createTask(task) {
  const tasks = getTasks();

  const newTask = {
    id: Date.now(),
    title: task.title,
    description: task.description,
    deadline: task.deadline,
    importance: task.importance,
    urgency: task.urgency,
    priority: calculatePriority(task),      // IA ici 🔥
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks(tasks);
}

export function updateTask(updatedTask) {
  const tasks = getTasks().map((t) =>
    t.id === updatedTask.id
      ? {
          ...updatedTask,
          priority: calculatePriority(updatedTask), // recalcul IA
        }
      : t
  );

  saveTasks(tasks);
}

export function deleteTask(id) {
  const tasks = getTasks().filter((t) => t.id !== id);
  saveTasks(tasks);
}

export function getTaskById(id) {
  return getTasks().find((t) => t.id === Number(id));
}
