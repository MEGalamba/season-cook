function Section({ title, children }) {
  return (
    <section className="m-5">
      {/* margin top e bottom */}
      <h2 className="text-2xl font-semibold text-green-800 mb-4">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
