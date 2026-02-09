//import BlogHighlights from "./BlogHighlights";
import Hero from "../../components/ui/Hero";
import Foodstuff from "../Foodstuff";

//import Footer from "../../components/Footer";
import Recipes from "../Recipes";
import Section from "../../components/Section";
import { Container } from "react-bootstrap";

function HomePage() {
  return (
    <main style={{ backgroundColor: "#fdfaf6", minHeight: "100vh" }}>
      <Hero />
      {/* Produtos da Época */}
      <Section title="Produtos da Época">
        <Container className="py-5">
          <Foodstuff />
        </Container>
      </Section>
      {/* Receitas */}
      <Section title="Receitas">
        <Container className="py-5">
          <Recipes />
        </Container>
      </Section>
      {
        //todo:
        //<BlogHighlights />
        //<Footer />
      }
    </main>
  );
}

export default HomePage;
