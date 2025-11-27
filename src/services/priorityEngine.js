export function calculatePriority(task) {
  const { importance, urgency, deadline } = task;

  let score = importance * 2 + urgency * 2;

  if (deadline) {
    const today = new Date();
    const diffDays =
      (new Date(deadline) - today) / (1000 * 60 * 60 * 24);

    if (diffDays <= 3) score += 3;   // Très urgent
    else if (diffDays <= 7) score += 2;
    else if (diffDays <= 14) score += 1;
  }

  if (score >= 12) return "high";
  if (score >= 7) return "medium";
  return "low";
}
