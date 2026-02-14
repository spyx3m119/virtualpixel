import { Link } from "react-router";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <span className="font-bold text-white text-lg">V</span>
                        </div>
                        <span className="font-bold text-lg text-white">Virtual Pixel</span>
                    </div>

                    <div className="flex gap-8 text-sm text-slate-400">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
                        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                    </div>

                    <div className="text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Virtual Pixel. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
