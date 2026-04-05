import { AboutUs } from "../components/AboutUs";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavigationMenu } from "../components/NavigationMenu";
import { TechGrid } from "../components/TechGrid";

export const HomePage = () => {
  return (
    <>
      {/* Navigation Menu */}
      <NavigationMenu />

      {/* Hero */}
      <Hero />

      {/* About Us */}
      <AboutUs />

      {/* Tech Grid */}
      <TechGrid />

      {/* Footer */}
      <Footer />
    </>
  );
};
