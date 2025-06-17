"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const navLinks = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Academics",
            href: "/academics",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Resume",
            href: "/resume",
        },
        {
            label: "Contact",
            href: "/contact",
        },
    ];
    const isActive = (href: string) => {
        return pathname === href || (href === "/" && pathname === "/");
    };

    return (
    <header className="max-w-[1200px] py-5 flex items-center justify-between bg-[#080e21] mx-auto z-50 transition-all">
        <h1 className="px-4 lg:px-8 flex justify-between items-center text-xl font-bold text-[#9B87F5]">
            AG.
        </h1>
        <nav className="">
            <ul className="flex space-x-2 items-center justify-between">
            {navLinks.map((link) => (
                <li key={link.href} className={`cursor-pointer relative px-3 py-1 group ${isActive(link.href) ? "text-[#9B87F5]" : "text-white hover:text-[#9B87F5] transition duration-300"}`}>
                    <Link href={link.href} className={`text-[0.8rem] font-[500]`}>
                        {link.label}
                        {isActive(link.href) ? (
                            <span className="pointer-events-none absolute left-0 bottom-0 h-[3px] bg-[#9B87F5] rounded-full w-full"></span>
                        ) : (
                            <span className="pointer-events-none absolute left-0 bottom-0 h-[3px] bg-[#9B87F5] rounded-full w-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                        )}
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    </header>
  )
}
