export default function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-neutral-200">
      {children}
    </div>
  );
}
