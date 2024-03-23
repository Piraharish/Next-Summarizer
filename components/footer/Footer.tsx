import Link from "next/link";
import Logo from "../Logo";
import { Button } from "../ui/button";

const Footer = () => {
  const links = [
    {
      title: "Links",
      items: [
        { href: "/", label: "Home" },
        { href: "/profile", label: "Profile" },
        { href: "/settings", label: "Settings" },
      ],
    },
    {
      title: "Get Started",
      items: [
        { href: "/auth/register", label: "Register" },
        { href: "/auth/login", label: "Login" },
        { href: "/summarizer", label: "Summarize" },
      ],
    },
    {
      title: "Others",
      items: [
        { href: "/terms", label: "Terms of Service" },
        { href: "https://github.com/Piraharish", label: "Rate a Star" },
      ],
    },
  ];

  return (
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col text-center items-center sm:items-start sm:text-left">
              <Logo />
              <span className="text-sm text-muted-foreground mt-2">
                &copy; {new Date().getFullYear()}, All rights reserved
              </span>
            </div>
            <Button variant="link" asChild className="px-0 mt-8">
              <Link
                href="https://piraharish.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Made with ❤️ by Piraharish
              </Link>
            </Button>
          </div>
          <div className="sm:w-7/12 flex justify-between">
            {links.map((linkGroup, index) => (
              <div key={index} className="flex flex-col items-start">
                <h4 className="font-medium mb-2 px-4">{linkGroup.title}</h4>
                {linkGroup.items.map((link, idx) => (
                  <Button key={idx} variant="link" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
