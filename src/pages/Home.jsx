import HomeHero from "../components/HomeHero";
import "../components/HomeHero.css";
import StatsSection from "../components/StatsSection";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";

import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
  <title>
    AurigaX - Compare Ola, Uber & Rapido
  </title>

  <meta
    name="description"
    content="Compare ride fares across Ola, Uber and Rapido in one place."
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="AurigaX - Compare Ola, Uber & Rapido"
  />

  <meta
    property="og:description"
    content="Compare ride fares across Ola, Uber and Rapido in one place."
  />

  <meta
    property="og:image"
    content="https://aurigax.com/og-image.png"
  />

  <meta
    property="og:url"
    content="https://aurigax.com"
  />

  <meta property="og:type" content="website" />
</Helmet>

      <HomeHero />
      <StatsSection />
      <Testimonials />
      <FAQSection />
    </>
  );
}

export default Home;