import Access from "./components/Access";
import Download from "./components/Download";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import References from "./components/References";
import Snippets from "./components/Snippets";
import SuperCharge from "./components/SuperCharge";

export default function App() {
  return (
    <>
      <Hero />
      <Snippets />
      <Features />
      <Access />
      <SuperCharge />
      <References />
      <Download />
      <Footer />
    </>
  );
}
