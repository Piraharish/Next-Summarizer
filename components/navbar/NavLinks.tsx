import Link from "next/link";
import { Button } from "../ui/button";

const NavLink = ({ href, text }: { href: string; text: string }) => (
  <Button asChild variant="ghost" className="font-medium px-3 md:px-4">
    <Link href={href}>{text}</Link>
  </Button>
);

const NavLinks = () => {
  return (
    <>
      <NavLink href="/profile" text="Profile" />
      <NavLink href="/settings" text="Settings" />
      <NavLink href="/#contact" text="Contact" />
      <NavLink href="/#faqs" text="FAQs" />
    </>
  );
};

export default NavLinks;
