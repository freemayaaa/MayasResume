export function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-6 py-3 rounded-xl transition-all duration-300 font-medium text-base";
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 hover:shadow-soft active:scale-95",
    secondary: "bg-blue-100 text-primary hover:bg-blue-200",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
