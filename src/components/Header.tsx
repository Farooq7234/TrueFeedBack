"use client";
import { Button } from "@/components/ui/button";
import { MessageSquareHeart, MoonIcon, SunIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";

import React from "react";

const Header = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquareHeart className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="text-base sm:text-xl font-bold">FeedbackFlow</span>
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
            <Button variant="destructive" onClick={() => signOut()}>
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
