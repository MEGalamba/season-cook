//import BlogHighlights from "./BlogHighlights";
import Hero from "./Hero";
import FoodstuffList from "../../components/FoodstuffList";

//import Footer from "../../components/Footer";
import RecipesList from "../../components/RecipesList";
import Section from "../../components/Section";

function HomePage() {
  return (
    <main>
      <Hero />
      <Section title="Produtos da Época">
        <FoodstuffList />
      </Section>
      <Section title="Receitas em Destaque">
        <RecipesList />
      </Section>
      {
        //<BlogHighlights />
        //<Footer />
      }
    </main>
  );
}

export default HomePage;
