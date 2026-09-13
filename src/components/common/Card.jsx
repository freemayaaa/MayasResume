export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-softer hover:shadow-soft transition-all duration-300 p-6 border border-gray-100 ${className}`}>
      {children}
    </div>
  );
}
