import { BiCross } from "react-icons/bi";

const CustomSeparator = () => {
  return (
    <div className="relative flex text-muted-foreground/35 items-center my-10 sm:my-20 z-10">
      <BiCross className="absolute hidden sm:block h-4 w-4" />
      <div className="bg-muted-foreground/15 w-[calc(100%-30px)] h-[1.2px] mx-auto" />
      <BiCross className="absolute hidden sm:block h-4 w-4 right-0" />
    </div>
  );
};

export default CustomSeparator;
