import type { Route } from "./+types/faq";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "FAQ - Virtual Pixel" },
        { name: "description", content: "Frequently Asked Questions about Virtual Pixel Shopify Apps." },
    ];
}

const faqs = [
    {
        question: "Do your apps work with all Shopify themes?",
        answer: "Yes! All our apps are designed to be compatible with Shopify Online Store 2.0 themes and most legacy themes. If you encounter any display issues, our support team can help you fix them for free.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Absolutely. Each of our apps comes with a 14-day free trial so you can test all the features and see the results before you pay a dime.",
    },
    {
        question: "Will installing your apps slow down my store?",
        answer: "No. Performance is our top priority. We use modern, lightweight code and load our scripts asynchronously to ensure there is zero impact on your store's loading speed or Core Web Vitals.",
    },
    {
        question: "How do I get support if I have a problem?",
        answer: "You can reach our support team 24/7 via the in-app chat widget or by emailing support@virtualpixel.com. We typically respond within 2 hours.",
    },
    {
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can uninstall the app at any time, and the billing cycle will stop immediately. There are no long-term contracts or hidden fees.",
    },
    {
        question: "Do you offer custom app development?",
        answer: "Yes, we do! If you need a custom feature or a bespoke app for your store, please contact us to discuss your requirements.",
    },
];

export default function FAQ() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 font-sans">
            <Navbar />
            <main className="pt-32 pb-20 px-6 container mx-auto relative z-10">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-2 block">Support</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h1>
                        <p className="text-slate-400 text-lg">
                            Everything you need to know about our products and billing.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-400 mb-4">Still have questions?</p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all backdrop-blur-sm"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="glass rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 border border-white/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{question}</span>
                <span className={`ml-4 p-2 rounded-full bg-white/5 transition-all duration-300 ${isOpen ? 'rotate-180 bg-indigo-500/20 text-indigo-400' : 'text-slate-400'}`}>
                    <ChevronDown size={20} />
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
