'use client'

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar"
import { RouteURL } from "@/consts/route"
import { usePathname } from "next/navigation";

const disableNavbar = [
    RouteURL.login, RouteURL.register,
    RouteURL.benmaxRegister, RouteURL.beproRegister,
    RouteURL.benmaxFinal
];

export const LayoutProvider = ({ children }: {children: React.ReactNode}) => {
    const pathname = usePathname();

    return (
        <>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            {!disableNavbar.includes(pathname) && <Footer />}
        </>
    );
}