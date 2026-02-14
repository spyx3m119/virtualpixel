import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Apps", href: "/#apps" },
        { name: "Features", href: "/#features" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
                }`}
        >
            <div
                className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${isScrolled
                    ? "glass rounded-full py-3 mx-4 max-w-[calc(100%-2rem)] md:mx-auto"
                    : ""
                    }`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
                            <Sparkles className="w-6 h-6 text-white" />
                            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Virtual Pixel
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a
                            href="#apps"
                            className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-all hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 p-4 glass rounded-2xl md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-slate-300 hover:text-white px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="h-px bg-white/10 my-2" />
                        <a
                            href="#apps"
                            className="w-full text-center px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/25"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
