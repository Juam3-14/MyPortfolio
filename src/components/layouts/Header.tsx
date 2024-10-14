// Header.tsx
import Link from 'next/link';

const Header = () => {
    return (
        <header className=" w-full max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="/">
                <span className="sr-only">Juan Pablo Piemonte</span>
                <span className="h-6 w-6 text-2xl font-bold">MyPortfolio</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#aboutMe">
                    About Me
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#projects">
                    Projects
                </Link>
                <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
                    Contact Info
                </Link>
            </nav>
        </header>
    );
};

export default Header;
