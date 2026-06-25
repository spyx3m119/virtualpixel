import type { Route } from "./+types/cartsnap";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Check, ShoppingCart, Search, Database, ShieldCheck, Users, Zap, Globe, Lock, BarChart3, Repeat } from "lucide-react";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "CartSnap - B2B Bulk Order for Shopify" },
        { name: "description", content: "Empower your wholesale customers with advanced search, CSV uploads, and smart reordering." },
    ];
}

const features = {
    core: [
        { title: "Advanced Product Search", desc: "Find products by SKU, title, or barcode with instant results.", icon: Search },
        { title: "CSV Bulk Upload", desc: "Upload CSV files with SKU/quantity pairs for rapid order entry.", icon: Database },
        { title: "Saved Templates", desc: "Save frequent orders as reusable templates for quick checkout.", icon: Check },
        { title: "Smart Reorder", desc: "AI-powered suggestions based on previous purchase history.", icon: Repeat },
        { title: "Quick Order Widget", desc: "Embedded storefront widget for lightning-fast ordering.", icon: ShoppingCart },
    ],
    b2b: [
        { title: "Sales Rep Mode", desc: "Reps can order on behalf of customers with custom pricing.", icon: Users },
        { title: "Tiered Billing", desc: "Flexible plans from Free Trial to Plus ($99.99/mo).", icon: BarChart3 },
        { title: "Customer Access Control", desc: "Guest mode and strict B2B-only mode options.", icon: Lock },
    ],
    performance: [
        { title: "High-Performance Search", desc: "Optimized for catalogs with 100k+ SKUs.", icon: Zap },
        { title: "Redis Caching", desc: "Ultra-fast search results and reduced database load.", icon: Database },
        { title: "Rate Limiting", desc: "Protection against abuse and API overload.", icon: ShieldCheck },
    ],
    enterprise: [
        { title: "Multi-Variant Support", desc: "Handle products with multiple sizes, colors, and options.", icon: ShoppingCart },
        { title: "Inventory Visibility", desc: "Real-time stock levels for accurate ordering.", icon: BarChart3 },
        { title: "Webhook Integration", desc: "Real-time product and order updates.", icon: Globe },
    ]
};

const pricing = [
    { name: "Starter", price: "$9.99", features: ["Up to 500 SKUs", "Basic Search", "CSV Upload", "Email Support"] },
    { name: "Growth", price: "$29.99", features: ["Up to 5,000 SKUs", "Advanced Search", "Saved Templates", "Smart Reorder", "Priority Support"], popular: true },
    { name: "Pro", price: "$49.99", features: ["Up to 50,000 SKUs", "Sales Rep Mode", "B2B Only Mode", "Quick Order Widget", "Live Chat Support"] },
    { name: "Plus", price: "$99.99", features: ["Unlimited SKUs", "Dedicated Account Manager", "Custom Integrations", "SLA Guarantee", "API Access"] },
];

export default function CartSnap() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 font-sans">
            <Navbar />

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 container mx-auto relative z-10 text-center">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]" />
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium mb-8">
                    <ShoppingCart size={16} />
                    <span>B2B Bulk Order App</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    CartSnap
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                    The ultimate B2B bulk ordering solution for Shopify. Enable wholesale customers to place large orders in seconds, not hours.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1">
                        Start 14-Day Free Trial
                    </button>
                    <button className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all backdrop-blur-sm">
                        View Demo Store
                    </button>
                </div>
            </header>

            {/* Feature Grid */}
            <main className="container mx-auto px-6 pb-24 space-y-24">

                {/* Core Features */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Ordering <span className="text-gradient">Powers</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.core.map((f, i) => (
                            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} color="text-blue-400" />
                        ))}
                    </div>
                </section>

                {/* Performance & Enterprise (Split) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                            <Zap className="text-amber-400" /> Performance & Reliability
                        </h2>
                        <div className="space-y-4">
                            {features.performance.map((f, i) => (
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
                            <ShieldCheck className="text-emerald-400" /> Enterprise Grade
                        </h2>
                        <div className="space-y-4">
                            {features.enterprise.map((f, i) => (
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

                {/* B2B Features */}
                <section className="glass rounded-3xl p-8 md:p-12 border border-indigo-500/20 bg-indigo-900/10">
                    <div className="text-center mb-12">
                        <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-2 block">For Sales Professionals</span>
                        <h2 className="text-3xl md:text-4xl font-bold">Advanced B2B Features</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.b2b.map((f, i) => (
                            <div key={i} className="text-center">
                                <div className="mx-auto w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                                    <f.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing */}
                <section id="pricing">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Simple, Transparent Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pricing.map((tier, i) => (
                            <div key={i} className={`glass rounded-2xl p-8 hover:bg-white/5 transition-colors relative ${tier.popular ? 'border-indigo-500 shadow-indigo-500/20 shadow-lg' : 'border-white/10'}`}>
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                <div className="text-4xl font-bold mb-6">{tier.price}<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feat, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                                            <Check size={16} className="text-emerald-400 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${tier.popular ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
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
