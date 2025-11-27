export default function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none text-black ${className}`}
    />
  );
}
