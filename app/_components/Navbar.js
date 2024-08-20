"use client";

import { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [slideOpen, setSlideOpen] = useState(false);
  return (
    <>
      <header className="z-40 sticky top-4 max-w-[1280px] mx-auto flex items-center gap-24 py-3 md:px-4 min-[1440px]:px-8">
        <Logo />
        <ul className="hidden min-[1440px]:flex gap-8">
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/" ? "color" : "gray"}`} content="label-only">
              <Link href="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/features" ? "color" : "gray"}`} content="label-only">
              <Link href="/features">Features</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/pricing" ? "color" : "gray"}`} content="label-only">
              <Link href="/pricing">Pricing</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/about" ? "color" : "gray"}`} content="label-only">
              <Link href="/about">About us</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/contact" ? "color" : "gray"}`} content="label-only">
              <Link href="/contact">Contact</Link>
            </Button>
          </li>
        </ul>
        <div className="hidden min-[1440px]:flex ml-auto gap-4">
          <Button size="lg" hierarchy="secondary" content="label-only">
            Learn more
          </Button>
          <Button size="lg" hierarchy="primary" content="label-only">
            See pricing
          </Button>
        </div>
        <button onClick={() => setSlideOpen(!slideOpen)} className="ml-auto min-[1440px]:hidden w-5 h-5 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-600">
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>
      </header>
      {/* slide out menu */}
      <div
        className={`fixed top-0 ${
          slideOpen ? "left-0" : "-left-full"
        } transition-[left] duration-[800ms] z-50 w-[359px] h-[812px] bg-white flex flex-col gap-6 px-4 pt-6 pb-4`}
      >
        <div className="flex items-center">
          <Logo />
          <button onClick={() => setSlideOpen(false)} className="ml-auto min-[1440px]:hidden w-5 h-5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-neutral-600">
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2">
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/" ? "color" : "gray"}`} content="label-only">
              <Link href="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/features" ? "color" : "gray"}`} content="label-only">
              <Link href="/features">Features</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/pricing" ? "color" : "gray"}`} content="label-only">
              <Link href="/pricing">Pricing</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/about" ? "color" : "gray"}`} content="label-only">
              <Link href="/about">About us</Link>
            </Button>
          </li>
          <li>
            <Button size="lg" hierarchy={`link-${pathname === "/contact" ? "color" : "gray"}`} content="label-only">
              <Link href="/contact">Contact</Link>
            </Button>
          </li>
        </ul>
        <div className="flex flex-col mt-auto gap-4">
          <Button size="lg" hierarchy="secondary" content="label-only" display="block">
            Learn more
          </Button>
          <Button size="lg" hierarchy="primary" content="label-only" display="block">
            See pricing
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
