import Navbar from "./components/navbar";
import Sponsors from "./home/sponsors";
import Hero from "./home/hero";
import Advantages from "./home/advantages";
import Shopify from "./home/shopify";
import Support from "./home/support";
import Path from "./home/path";
import Footer from "./components/footer";

function App() {
  return (
    <main className='min-h-screen relative overflow-hidden bg-white container mx-auto px-5 lg:px-28'>
      <Navbar />
      <Hero />
      <Sponsors />
      <Advantages />
      <Shopify />
      <Support />
      <Path />
      <Footer/>
    </main>
  );
}

export default App;
