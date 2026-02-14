import { motion } from "framer-motion";
import { Zap, ShieldCheck, HeartHandshake, Code2 } from "lucide-react";

const features = [
    {
        title: "Blazing Fast Performance",
        description: "Our apps are optimized for speed, ensuring zero impact on your store's load time.",
        icon: Zap,
        color: "bg-amber-500/10 text-amber-500",
    },
    {
        title: "Enterprise-Grade Security",
        description: "Built with the highest security standards to keep your data and customers safe.",
        icon: ShieldCheck,
        color: "bg-emerald-500/10 text-emerald-500",
    },
    {
        title: "24/7 Priority Support",
        description: "Get help when you need it. Our team of experts is always ready to assist you.",
        icon: HeartHandshake,
        color: "bg-pink-500/10 text-pink-500",
    },
    {
        title: "Clean, Modern Code",
        description: "Built using the latest technologies for stability, scalability, and compatibility.",
        icon: Code2,
        color: "bg-blue-500/10 text-blue-500",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-indigo-900/10 -skew-y-3 pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Why Choose <br /> <span className="text-gradient">Virtual Pixel?</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            We don't just build apps. We build solutions that drive growth.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <a href="#contact" className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors flex items-center gap-2">
                            Learn more about us &rarr;
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={key(feature.title)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors border-l-4 border-l-indigo-500/0 hover:border-l-indigo-500"
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function key(str: string) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
