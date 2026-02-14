import type { Route } from "./+types/contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Mail, MessageSquare } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact Us - Virtual Pixel" },
        { name: "description", content: "Get in touch with the Virtual Pixel team for support, sales, or custom development." },
    ];
}

export default function Contact() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 font-sans">
            <Navbar />
            <main className="pt-32 pb-20 px-6 container mx-auto relative z-10">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-pink-600/10 rounded-full blur-[100px]" />
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-2">Get in touch</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-gradient">amazing</span></h1>
                        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                            Have a question about our apps? Need a custom solution? or just want to say hi? We'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                                    <p className="text-slate-400 mb-1">Our friendly team is here to help.</p>
                                    <a href="mailto:support@virtualpixel.com" className="text-indigo-400 hover:text-indigo-300 font-medium">support@virtualpixel.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Live Chat</h3>
                                    <p className="text-slate-400 mb-1">Available Mon-Fri, 9am - 5pm EST.</p>
                                    <span className="text-emerald-400 font-medium cursor-pointer hover:text-emerald-300">Start a chat</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium text-slate-300">First name</label>
                                    <input type="text" id="first-name" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium text-slate-300">Last name</label>
                                    <input type="text" id="last-name" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                <input type="email" id="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                                <select id="subject" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors">
                                    <option>General Inquiry</option>
                                    <option>Technical Support</option>
                                    <option>Billing Question</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-lg transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
