"use client";

import { logout } from "@/actions/logout";
import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };
  return (
    <Button variant="destructive" className="w-full" onClick={onClick}>
      <ExitIcon className="mr-3" />
      {children}
    </Button>
  );
};
