import { Hero } from "../components/Hero";
import { NavigationMenu } from "../components/NavigationMenu";

export const HomePage = () => {
  return (
    <>
      {/* Navigation Menu */}
      <NavigationMenu />

      {/* Hero */}
      <Hero />
    </>
  );
};
