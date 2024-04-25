"use client";
import { useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import Mobile from "./mobile";
import Navigation from "./navigation";
import MobileBtn from "./mobileBtn";
import LoginDropdown from "./login";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black">
      <div className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo />
        </div>

        <div className="flex lg:hidden">
          <MobileBtn handlerToggle={() => setMobileMenuOpen(true)} />
        </div>

        <nav className="hidden lg:flex lg:gap-x-12">
          <Navigation />
        </nav>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="+380505559955"
            className="text-sm font-semibold leading-6 text-white"
          >
            <span>+38 (050) 555-99-55</span>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LoginDropdown/>
        </div>
      </div>

      <Mobile isOpen={mobileMenuOpen} handlerToggle={setMobileMenuOpen} />
    </header>
  );
}
