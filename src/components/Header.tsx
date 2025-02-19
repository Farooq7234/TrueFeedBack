"use client";
import { Button } from "@/components/ui/button";
import { MessageSquareHeart, MoonIcon, SunIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";

const Header = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.push("/");
  };
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquareHeart className="h-5 w-5 sm:h-6 sm:w-6" />
          <Link href={"/"} className="text-base sm:text-xl font-bold">
            TrueFeedBack
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
          {!session ? (
            <Button variant="outline">
              {" "}
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          ) : (
            <Button variant="destructive" onClick={() => handleLogout()}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
