"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-4 left-4 right-4 flex justify-center z-50">
      <div className="flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full backdrop-blur-md bg-white border border-white/20 shadow-lg">

        <Image
          src="/images/fitness-logo.png"
          alt="Logo"
          width={160}
          height={40}
          className="object-contain"
        />

        <div className="hidden md:flex md:px-1 md:max-w-xl">
          <Navbar />
        </div>

        {/* mobile view */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6">
              <div className="flex flex-col space-y-4 text-lg">
                <a href="/" className="font-medium">Home</a>
                <a href="#" className="font-medium">About</a>
                <a href="/login" className="font-medium">Login</a>
                <a href="/register" className="font-medium">Sign Up</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}
