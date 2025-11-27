export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-neutral-800 active:scale-95 transition ${className}`}
    >
      {children}
    </button>
  );
}
