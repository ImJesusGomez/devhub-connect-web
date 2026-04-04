import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

export const NavImage = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="p-0 m-0">
            <Link to="/" className="block w-fit">
              <img
                src="/devhub_horizontal.svg"
                alt="DevHub logo"
                className="w-25 h-15 drop-shadow-sm"
              />
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
