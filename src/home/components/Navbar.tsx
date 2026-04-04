import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/devhub.svg)`,
        }}
      ></div>

      <NavigationMenu>
        <NavigationMenuList>
          {/* Inicio */}
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link to={"/"} />}
              className={`
                ${navigationMenuTriggerStyle()}
                text-white mr-2
                hover:bg-blue-950
                active:bg-blue-950
                focus:bg-blue-950
                data-active:bg-blue-950
                data-[state=open]:bg-blue-950
              `}
            >
              Inicio
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Inicio */}
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link to={"/"} />}
              className={`
                ${navigationMenuTriggerStyle()}
                text-white mr-2
                hover:bg-blue-950
                active:bg-blue-950
                focus:bg-blue-950
                data-active:bg-blue-950
                data-[state=open]:bg-blue-950
              `}
            >
              Sobre Nosotros
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Inicio */}
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link to={"/"} />}
              className={`
                ${navigationMenuTriggerStyle()}
                text-white             
                active:bg-cyan-600
                focus:bg-cyan-700
                data-active:bg-cyan-700
                data-[state=open]:bg-cyan-700
                `}
            >
              Iniciar Sesión
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
