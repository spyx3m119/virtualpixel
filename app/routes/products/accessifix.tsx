import type { Route } from "./+types/accessifix";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Check, Shield, Zap, FileText, Cpu, Settings, Search, Globe, Lock, BarChart3, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "AccessiFix AI - AI-Powered Shopify Accessibility Compliance" },
        { name: "description", content: "Automated accessibility scans, AI-driven fixes, and WCAG 2.2/ADA compliance reports for your Shopify store." },
    ];
}

const features = {
    core: [
        { title: "Automated Scans", desc: "Enterprise-grade accessibility scanning using industry-standard axe-core engine.", icon: Search },
        { title: "AI-Suggested Fixes", desc: "Get intelligent suggestions for alt text, color contrast, and ARIA attributes.", icon: Cpu },
        { title: "Code-Level Review", desc: "Review and apply accessibility improvements directly to your theme code.", icon: Settings },
        { title: "Compliance Reports", desc: "Generate and download detailed reports for WCAG 2.2, ADA, and EAA compliance.", icon: FileText },
        { title: "WCAG 2.2 Support", desc: "Stay up to date with the latest international accessibility guidelines.", icon: Shield },
    ],
    automation: [
        { title: "God Mode Patching", desc: "Automatically fix common accessibility issues without manual code changes.", icon: Zap },
        { title: "Continuous Monitoring", desc: "Real-time scanning as you update your store and products.", icon: BarChart3 },
        { title: "Headless Support", desc: "Works seamlessly with Online Store 2.0 and custom headless setups.", icon: Globe },
    ],
    branding: [
        { title: "Custom Widget", desc: "A fully customizable accessibility widget that matches your brand identity.", icon: Settings },
        { title: "White-Label Reports", desc: "Brand reports with your own logo and colors for clients or internal review.", icon: FileText },
        { title: "Multi-Store Management", desc: "Manage accessibility across up to 10 stores from a single dashboard.", icon: Users },
    ]
};

const pricing = [
    {
        name: "Free",
        price: "$0",
        features: ["5 scans per month", "Basic widget", "Email Support", "WCAG 2.2 Guidelines"]
    },
    {
        name: "Starter",
        price: "$9",
        features: ["Automatic scans", "AI fixes (50/month)", "Custom widget", "Standard branding", "14-day free trial"],
        popular: false
    },
    {
        name: "Pro",
        price: "$19",
        features: ["Unlimited scans", "Unlimited AI fixes", "White-label reports", "God Mode patching", "Custom widget", "14-day free trial"],
        popular: true
    },
    {
        name: "Agency",
        price: "$79",
        features: ["Multi-store (Max 10)", "Full white-label branding", "Priority Support", "Dedicated Manager", "14-day free trial"]
    },
];

export default function AccessiFix() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 container mx-auto relative z-10 text-center">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-emerald-600/20 rounded-full blur-[120px]" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium mb-8">
                    <Shield size={16} />
                    <span>Accessibility Solution</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    AccessiFix <span className="text-emerald-400">AI</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                    AI-powered accessibility scans, fixes, and compliance reports for WCAG 2.2, ADA, and EAA. Make your store inclusive for everyone.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1">
                        Start 14-Day Free Trial
                    </button>
                    <button className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all backdrop-blur-sm">
                        View Sample Report
                    </button>
                </div>
            </header>

            {/* Feature Grid */}
            <main className="container mx-auto px-6 pb-24 space-y-24">

                {/* Core Features */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Intelligent <span className="text-gradient">Compliance</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.core.map((f, i) => (
                            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} color="text-emerald-400" />
                        ))}
                    </div>
                </section>

                {/* Automation & Branding (Split) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                            <Zap className="text-amber-400" /> Automation & Scale
                        </h2>
                        <div className="space-y-4">
                            {features.automation.map((f, i) => (
                                <div key={i} className="glass p-6 rounded-xl flex gap-4 items-start">
                                    <div className="mt-1 text-amber-400"><f.icon size={20} /></div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">{f.title}</h3>
                                        <p className="text-slate-400 text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                            <CheckCircle className="text-emerald-400" /> Professional Branding
                        </h2>
                        <div className="space-y-4">
                            {features.branding.map((f, i) => (
                                <div key={i} className="glass p-6 rounded-xl flex gap-4 items-start">
                                    <div className="mt-1 text-emerald-400"><f.icon size={20} /></div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">{f.title}</h3>
                                        <p className="text-slate-400 text-sm">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Compliance Section */}
                <section className="glass rounded-3xl p-8 md:p-12 border border-emerald-500/20 bg-emerald-900/10">
                    <div className="text-center mb-12">
                        <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Global Standards</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Full Compliance Coverage</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 font-bold text-xl">
                                WCAG
                            </div>
                            <h3 className="text-xl font-bold mb-3">WCAG 2.2 (A, AA, AAA)</h3>
                            <p className="text-slate-400 leading-relaxed">Meet the latest international standards for web content accessibility.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 font-bold text-xl">
                                ADA
                            </div>
                            <h3 className="text-xl font-bold mb-3">ADA Title III</h3>
                            <p className="text-slate-400 leading-relaxed">Protect your business from accessibility-related lawsuits in the US.</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 font-bold text-xl">
                                EAA
                            </div>
                            <h3 className="text-xl font-bold mb-3">European Act</h3>
                            <p className="text-slate-400 leading-relaxed">Ensure compliance with the European Accessibility Act requirements.</p>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section id="pricing">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Simple, Transparent Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricing.map((tier, i) => (
                            <div key={i} className={`glass rounded-2xl p-8 hover:bg-white/5 transition-colors relative ${tier.popular ? 'border-emerald-500 shadow-emerald-500/20 shadow-lg' : 'border-white/10'}`}>
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                <div className="text-4xl font-bold mb-6">{tier.price}<span className="text-lg text-slate-500 font-normal">{tier.price !== "Free" ? "/mo" : ""}</span></div>
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                                            <Check size={16} className="text-emerald-400 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${tier.popular ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                                    Choose {tier.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
    return (
        <div className="glass p-8 rounded-2xl hover:scale-[1.02] transition-transform duration-300 border border-white/5">
            <div className={`w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center mb-6 ${color}`}>
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    );
}
