"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FaUser } from "react-icons/fa6";

const ProfilePage = () => {
  const user = useCurrentUser();

  return (
    <div className="h-page flex items-center justify-center">
      <Card className="w-full sm:w-[500px] bg-muted/55">
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-center grad">Profile</h2>
          <Avatar className="w-20 h-20">
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="bg-primary">
              <FaUser className="h-[2rem] w-[2rem]" />
            </AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderProfileDetail("ID", user?.id as string)}
          {renderProfileDetail("Name", user?.name as string)}
          {renderProfileDetail("Email", user?.email as string)}
          {renderProfileDetail(
            "Two Factor Authentication",
            user?.isTwoFactorEnabled ? "ON" : "OFF",
            user?.isTwoFactorEnabled
              ? "bg-emerald-500  py-px px-1 rounded"
              : "bg-destructive py-px px-1 rounded"
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const renderProfileDetail = (
  label: string,
  value: string,
  className?: string | undefined
) => (
  <div className="flex items-center justify-between p-3 border rounded-lg shadow-sm">
    <p className="font-medium">{label}</p>
    <p className={`truncate text-sm max-w-[180px] ${className}`}>{value}</p>
  </div>
);

export default ProfilePage;
