import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface UseCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
  isExternal?: boolean;
}

export const UseCard: React.FC<UseCardProps> = ({
  icon,
  title,
  description,
  link,
  linkText,
  isExternal,
}) => {
  return (
    <Card className="border-none bg-transparent px-4 space-y-6">
      <CardHeader className="items-center p-2">
        <span className="rounded-full border-4 border-foreground bg-primary w-fit mb-1 p-4 duration-300 hover:scale-105 hover:-translate-y-2">
          {icon}
        </span>
        <CardTitle className="text-3xl font-extrabold">{title}</CardTitle>
      </CardHeader>
      {description && (
        <CardDescription className="text-base">{description}</CardDescription>
      )}
      {link && linkText && (
        <Button asChild variant="secondary">
          {isExternal ? (
            <Link href={link} target="_black">
              {linkText}
            </Link>
          ) : (
            <Link href={link}>{linkText}</Link>
          )}
        </Button>
      )}
    </Card>
  );
};
