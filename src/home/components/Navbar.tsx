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
                bg-cyan-700      
                hover:bg-cyan-800  
                active:bg-cyan-800
                focus:bg-cyan-800
                data-active:bg-cyan-800
                data-[state=open]:bg-cyan-800
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
