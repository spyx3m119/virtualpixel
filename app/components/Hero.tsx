import { motion } from "framer-motion";
import { ArrowRight, Zap, ShoppingBag } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-pink-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">
                            Powering Next-Gen Commerce
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Building the <span className="text-gradient">Future</span> of <br />
                        Shopify Apps
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        We create stunning, high-performance apps that transform your Shopify store.
                        Elevate your customer experience with Virtual Pixel.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#apps"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2 group"
                        >
                            Explore Our Apps
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all backdrop-blur-sm"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>

                {/* Floating Cards (Decorative) */}
                <div className="relative h-[300px] md:h-[400px] max-w-5xl mx-auto mt-12 hidden md:block">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -6 }}
                        animate={{ opacity: 1, x: 0, rotate: -6 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute left-[10%] top-10 w-64 glass-card z-10"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                                <ShoppingBag size={20} />
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm">CartSnap</div>
                                <div className="text-slate-400 text-xs text-nowrap">Conversion Booster</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 bg-white/10 rounded-full w-full"></div>
                            <div className="h-2 bg-white/10 rounded-full w-2/3"></div>
                        </div>
                    </motion.div>

                    {/* Card 2 (Center) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute left-1/2 -translate-x-1/2 top-0 w-80 glass-card z-20 border-indigo-500/30 shadow-indigo-500/20"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm font-medium text-slate-300">Total Revenue</span>
                            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">+12.5%</span>
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">$124,500</div>
                        <div className="h-16 flex items-end gap-1 mt-4">
                            {[40, 70, 45, 90, 60, 80, 55].map((h, i) => (
                                <div key={i} className="flex-1 bg-indigo-500/50 rounded-t-sm hover:bg-indigo-400 transition-colors" style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 6 }}
                        animate={{ opacity: 1, x: 0, rotate: 6 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute right-[10%] top-10 w-64 glass-card z-10"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
                                <Zap size={20} />
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm">SpeedBoost</div>
                                <div className="text-slate-400 text-xs">Performance Optimizer</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-300">
                            <span>Score</span>
                            <span className="text-emerald-400 font-bold">98/100</span>
                        </div>
                        <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-emerald-500 h-full w-[98%]"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
