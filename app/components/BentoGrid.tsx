import { motion } from "framer-motion";
import { Link } from "react-router";
import { ShoppingCart, Zap, BarChart3, Users, Globe, Lock } from "lucide-react";

const apps = [
    {
        title: "CartSnap",
        category: "Cart & Checkout",
        description: "Enable wholesale customers to place large orders in seconds.",
        icon: ShoppingCart,
        color: "from-blue-500 to-indigo-500",
        size: "large", // spans 2 cols
        href: "/products/cartsnap",
    },
    {
        title: "Accessifix AI",
        category: "Performance",
        description: "AI-powered for accessibility scanning and reporting.",
        icon: Users,
        color: "from-amber-400 to-orange-500",
        size: "small",
        href: "#",
    },
    {
        title: "Analytics Pro",
        category: "Analytics",
        description: "Deep dive into your customer behavior and sales data.",
        icon: BarChart3,
        color: "from-emerald-400 to-teal-500",
        size: "small",
        href: "#",
    },
    {
        title: "Social Proof",
        category: "Marketing",
        description: "Showcase real customer reviews and sales notifications.",
        icon: Zap,
        color: "from-pink-500 to-rose-500",
        size: "small",
        href: "#",
    },
    {
        title: "Global Markets",
        category: "Expansion",
        description: "Localize your store for international markets automatically.",
        icon: Globe,
        color: "from-cyan-400 to-blue-500",
        size: "small",
        href: "#",
    },
    {
        title: "Secure Access",
        category: "Security",
        description: "Manage staff permissions and secure sensitive store data.",
        icon: Lock,
        color: "from-purple-500 to-violet-600",
        size: "large",
        href: "#",
    },
];

export function BentoGrid() {
    return (
        <section id="apps" className="py-24 relative">
            <div className="container px-6 mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Our Ecosystem of <span className="text-gradient">Apps</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Tools designed to help you sell more, scale faster, and manage better.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {apps.map((app, index) => (
                        <Link
                            to={app.href}
                            key={app.title}
                            className={`group relative overflow-hidden rounded-3xl p-8 transition-all hover:scale-[1.01] ${app.size === "large" ? "md:col-span-2" : "md:col-span-1"
                                } glass border border-white/5 bg-slate-900/50 hover:bg-slate-800/50 block`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                {/* Hover Gradient Background */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${app.color}`}
                                />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${app.color} mb-6 shadow-lg`}>
                                            <app.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{app.title}</h3>
                                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                                            {app.description}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full border border-white/5">
                                            {app.category}
                                        </span>
                                        <button className="text-sm font-semibold text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1">
                                            View App <div className="w-1.5 h-1.5 rounded-full bg-white ml-1"></div>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function key(str: string) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
