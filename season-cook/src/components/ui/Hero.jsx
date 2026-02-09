export default function Hero() {
  return (
    <section
      className="bg-green-50 py-16 px-3 text-center"
      style={{ marginBottom: "2rem" }} 
    >
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
        Receitas Sustentáveis e Saudáveis
      </h1>
      <p className="text-lg md:text-xl text-green-700 mb-8 max-w-2xl mx-auto">
        Descubra como comer bem, respeitar o planeta e manter uma dieta equilibrada, 
        com receitas deliciosas, nutritivas e amigas do ambiente.
      </p>
      <a
        href="#receitas"
        className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
      >
        Explorar Receitas
      </a>
    </section>
  );
}
