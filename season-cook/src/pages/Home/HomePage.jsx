//import BlogHighlights from "./BlogHighlights";
import Hero from "../../components/ui/Hero";
import Foodstuff from "../Foodstuff";

//import Footer from "../../components/Footer";
import Recipes from "../Recipes";
import Section from "../../components/Section";

function HomePage() {
  return (
    <main>
      <Hero />
      <Section title="Produtos da Época">
        <Foodstuff />
      </Section>
      <Section title="Receitas em Destaque">
        <Recipes />
      </Section>
      {
        //<BlogHighlights />
        //<Footer />
      }
    </main>
  );
}

export default HomePage;
