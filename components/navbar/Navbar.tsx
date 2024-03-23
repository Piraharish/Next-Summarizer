import Logo from "../Logo";
import NavLinks from "./NavLinks";
import { UserMenu } from "./UserMenu";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="w-1/2 sm:w-1/3 flex">
        <Logo />
      </div>
      <div className="hidden sm:w-fit sm:flex items-center justify-center gap-1 md:gap-2">
        <NavLinks />
      </div>
      <div className="w-1/2 sm:w-1/3 flex justify-end items-center gap-2">
        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;
