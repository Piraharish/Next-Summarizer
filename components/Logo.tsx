import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="bg-foreground p-2 w-fit rounded-md gap-x-1 flex items-center text-lg font-semibold shadow-sm shadow-muted-foreground"
    >
      <span className="text-background">Sum</span>
      <span className="bg-background text-primary px-1 rounded">.ai</span>
    </Link>
  );
};

export default Logo;
