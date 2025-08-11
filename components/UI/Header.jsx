"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Header = () => {
    const currentUrl = usePathname();

    useEffect(() =>{
      console.log(currentUrl);
  
    }, [currentUrl]);
    return(
          <header className="bg-slate-500 h-20 text-x1 flex justify-end items-center px-6 gap-6 text-white">
            {/* <button className = " text-orange-500 underline"> */}

            <Link href="/" className = {`${currentUrl === "/" && "underline text-orange-500" } underline-offset-2`}>Home</Link>
            {/* </button> */}
            <Link href="/subPage" className = {`${currentUrl === "/" && "underline" } underline-offset-2`}>SubPage</Link>
            <Link href="/deepPage" className = {`${currentUrl === "/" && "underline" } underline-offset-2`} >DeepPage</Link>
          </header>

    );
};