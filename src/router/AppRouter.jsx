import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import CreatePin from "../pages/CreatePin";
import LockScreen from "../pages/LockScreen";
import ChangePin from "../pages/ChangePin";
import Tasks from "../pages/Tasks";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lock" element={<LockScreen />} />
      <Route path="/create-pin" element={<CreatePin />} />

      <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
      <Route path="/create-task" element={<ProtectedRoute><CreateTask /></ProtectedRoute>} />
      <Route path="/edit-task/:id" element={<ProtectedRoute><EditTask /></ProtectedRoute>} />
      <Route path="/change-pin" element={<ProtectedRoute><ChangePin /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
