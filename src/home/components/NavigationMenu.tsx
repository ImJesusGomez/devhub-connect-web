import { NavImage } from "./NavImage";
import { Navbar } from "./Navbar";

export const NavigationMenu = () => {
  return (
    <div className="container mx-auto px-4 h-14 flex flex-row justify-between items-center bg-linear-to-r from-blue-900 via-blue-700 to-blue-900">
      <NavImage />
      <Navbar />
    </div>
  );
};
