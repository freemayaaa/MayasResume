export function Section({ children, id = "", className = "" }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {children}
    </section>
  );
}
