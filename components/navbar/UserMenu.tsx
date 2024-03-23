import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { currentUser } from "@/lib/auth";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FaGear, FaUser } from "react-icons/fa6";
import { LogoutButton } from "../auth/logout-button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export async function UserMenu() {
  const user = await currentUser();

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button asChild size="icon" className="rounded-full w-12 h-12">
              <Avatar>
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback className="bg-primary">
                  <FaUser className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center">
                  <FaUser className="mr-3" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/summarizer" className="flex items-center">
                  <LightningBoltIcon className="mr-3" />
                  Summarizer
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center">
                  <FaGear className="mr-3" />
                  Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <LogoutButton>Sign out</LogoutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex space-x-1 sm:space-x-2">
          <Button asChild variant="ghost" className="text-primary px-3 md:px-4">
            <Link href="/auth/login">Sign in</Link>
          </Button>
          <Button asChild className="px-3 md:px-4">
            <Link href="/auth/register">Sign up</Link>
          </Button>
        </div>
      )}
    </>
  );
}
