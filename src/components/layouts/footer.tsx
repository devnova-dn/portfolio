import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Updated social links - using placeholders for Github/LinkedIn until you create company pages
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/devnova-dn", icon: <Github size={18} /> }, 
        { name: "LinkedIn", url: "https://www.linkedin.com/in/devnova1", icon: <Linkedin size={18} /> },
        { name: "Email", url: "mailto:devnova.dn@gmail.com", icon: <Mail size={18} /> }
    ];

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="relative bg-background border-t border-border pt-16 pb-8 overflow-hidden">
            
            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-5 relative z-10">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Back to Top Button */}
                    <div className="flex justify-center mb-12">
                        <button
                            onClick={scrollToTop}
                            className="group relative p-4 bg-card border border-border hover:border-primary rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(42,198,158,0.3)]"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={24} className="text-primary group-hover:-translate-y-0.5 transition-transform" />
                            {/* Ring Animation on Hover */}
                            <span className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/30 scale-100 group-hover:scale-110 transition-all duration-500" />
                        </button>
                    </div>

                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        
                        {/* Brand Column */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">DevNova</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                                Pioneering the next generation of digital experiences. We transform complex challenges into elegant, scalable software solutions for the modern world.
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target={link.name !== "Email" ? "_blank" : undefined}
                                        rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                                        className="p-2.5 bg-card border border-border text-muted-foreground rounded-lg transition-all duration-300 hover:text-primary hover:border-primary hover:shadow-[0_0_10px_rgba(42,198,158,0.2)] hover:-translate-y-1"
                                        aria-label={link.name}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
                            <ul className="space-y-4 w-full max-w-xs">
                                {quickLinks.map((link) => (
                                    <li key={link.name} className="text-center md:text-left">
                                        <a
                                            href={link.href}
                                            className="relative group inline-block text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                                        >
                                            {link.name}
                                            {/* Animated Underline */}
                                            <span className="absolute left-0 -bottom-2.5 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-right">
                            <h3 className="text-lg font-semibold text-foreground mb-6">Get In Touch</h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:devnova.dn@gmail.com"
                                    className="block text-muted-foreground hover:text-primary transition-colors text-sm font-medium break-all"
                                >
                                    devnova.dn@gmail.com
                                </a>
                                <p className="text-muted-foreground text-sm flex items-center gap-2 justify-center md:justify-end">
                                    <span className="w-2 h-2 rounded-full bg-primary/50"></span>
                                    Global Reach
                                </p>
                                <div className="pt-2">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                                        Open for Partnerships
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Divider */}
                    <div className="border-t border-border/50 pt-8 flex flex-col items-center gap-4">
                        
                        {/* Copyright */}
                        <p className="text-muted-foreground text-sm text-center">
                            © {new Date().getFullYear()} <span className="text-primary font-semibold">DevNova</span>. All rights reserved.
                        </p>

                        {/* Built With */}
                        <p className="text-muted-foreground/80 text-xs flex items-center gap-1.5">
                            Built with{" "}
                            <Heart 
                                size={12} 
                                className="text-primary fill-primary animate-pulse" 
                            />{" "}
                            by the DevNova Team
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}