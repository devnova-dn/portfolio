import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { ModeToggle } from "../ui/mode-toggle";

type navProps = {
    navElements: { path: string, element: string, ref: any }[];
};

export default function NavBar({ navElements }: navProps) {
    const [selectedSection, setSelectedSection] = useState<string>("home");
    const [openMenu, setOpenMenu] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll to show/hide navbar
    useEffect(() => {
        const handleScroll = () => {
            // Show navbar after scrolling 50px
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const selectSection = (section: string) => {
        setSelectedSection(section);
        setOpenMenu(false);
    };

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out
                border-b border-border/40 bg-background/80 backdrop-blur-md
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="flex flex-col items-center w-full relative">
                <div className="flex px-5 md:container items-center justify-between py-4 w-full">
                    
                    {/* 1. LEFT: Logo */}
                    <div className="flex items-center justify-start w-auto md:w-48 z-20">
                        <div className="flex items-center group cursor-pointer">
                            <ScrollIntoView selector="#home">
                                <div className="relative rounded-full p-1 bg-linear-to-tr from-primary/20 to-transparent group-hover:from-primary/40 transition-all duration-500">
                                    <img 
                                        src="https://img.sanishtech.com/u/b108d3a7e707e0b27a1331b1505b8019.png" 
                                        alt="Logo" 
                                        className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover bg-background" 
                                    />
                                </div>
                            </ScrollIntoView>
                        </div>
                    </div>

                    {/* 2. MIDDLE: Navigation Links (Absolute Centered for Desktop) */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:block z-10">
                        <ul className="flex items-center gap-1 bg-muted/40 px-1 py-1 rounded-full border border-border/50 shadow-sm">
                            {navElements.map((navElement) => (
                                <ScrollIntoView key={navElement.element} selector={`#${navElement.element.toLowerCase()}`}>
                                    <li
                                        onClick={() => selectSection(navElement.element.toLowerCase())}
                                        className={`
                                            relative px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300
                                            ${selectedSection === navElement.element.toLowerCase()
                                                ? 'text-primary bg-primary/10 shadow-sm' 
                                                : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                                            }
                                        `}
                                    >
                                        {navElement.element}
                                        {selectedSection === navElement.element.toLowerCase() && (
                                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                                        )}
                                    </li>
                                </ScrollIntoView>
                            ))}
                        </ul>
                    </div>

                    {/* 3. RIGHT: Mode Toggle / Mobile Menu */}
                    <div className="flex items-center justify-end w-auto md:w-48 z-20">
                        {/* Desktop Toggle */}
                        <div className="hidden md:block">
                            <ModeToggle />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setOpenMenu(!openMenu)}
                                className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-accent"
                                aria-label="Toggle menu"
                            >
                                {openMenu ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {openMenu && (
                    <div className="md:hidden w-full border-t border-border bg-background/95 backdrop-blur-xl absolute top-full left-0 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                        <ul className="flex flex-col gap-2 p-6">
                            {navElements.map((navElement, index) => (
                                <ScrollIntoView key={index} selector={`#${navElement.element.toLowerCase()}`}>
                                    <li
                                        onClick={() => selectSection(navElement.element.toLowerCase())}
                                        className={`
                                            flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 border
                                            ${selectedSection === navElement.element.toLowerCase()
                                                ? 'bg-primary/10 border-primary/20 text-primary font-medium' 
                                                : 'border-transparent hover:bg-accent/50 text-muted-foreground hover:text-foreground'
                                            }
                                        `}
                                    >
                                        {navElement.element}
                                        {selectedSection === navElement.element.toLowerCase() && (
                                            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(42,198,158,0.6)]" />
                                        )}
                                    </li>
                                </ScrollIntoView>
                            ))}
                            <li className="mt-4 pt-4 border-t border-border flex justify-center">
                                <ModeToggle />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}