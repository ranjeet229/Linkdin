import Image from "next/image";
import React from "react";
import SearchInput from "./SearchInput";
import Navitems from "./Navitems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
        {/* Left side: Logo + Search */}
        <div className="flex items-center gap-2">
          <Image src={"/icon.jpg"} alt="App Logo" width={40} height={40} />
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>

        {/* Right side: Nav + Auth */}
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <Navitems />
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="rounded-full cursor-pointer" variant="secondary">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
