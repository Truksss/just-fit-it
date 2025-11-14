import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" passHref>
            <Button>Home</Button>
          </Link>

          <NavigationMenuTrigger>About</NavigationMenuTrigger>

          <Link href="/login" passHref>
            <Button variant="secondary" className="mr-2">Login</Button>
          </Link>

          <Link href="/register" passHref>
            <Button variant="tertiary">Sign Up</Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
