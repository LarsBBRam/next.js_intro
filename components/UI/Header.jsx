import Link from "next/link";

export const Header = () => {
    return(
          <header className="bg-slate-500 h-20 text-x1 flex justify-end items-center px-6 gap-6 text-white">
            <Link href="/">Home</Link>
            <Link href="/">SubPage</Link>
            <Link href="/">DeepPage</Link>
          </header>

    );
};