import Logo from "../Logo";

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Logo />
      <p className="text-foreground font-extrabold text-2xl text-center">
        {label}
      </p>
    </div>
  );
};
