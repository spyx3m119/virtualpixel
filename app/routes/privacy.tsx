import type { Route } from "./+types/privacy";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Privacy Policy - Virtual Pixel" },
        { name: "description", content: "Privacy Policy for Virtual Pixel and our Shopify Apps." },
    ];
}

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 font-sans">
            <Navbar />
            <main className="pt-32 pb-20 px-6 container mx-auto relative z-10">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[20%] left-[5%] w-[20%] h-[20%] bg-purple-600/10 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Privacy Policy</h1>
                    <p className="text-slate-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        <p>
                            Virtual Pixel ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your information when you use our Shopify applications ("Apps") and our website.
                        </p>

                        <h3>1. Information We Collect</h3>
                        <p>
                            When you install our Apps through the Shopify App Store, we represent a "Data Processor" and collect information from your Shopify store ("Merchant Data") and your customers ("Customer Data").
                        </p>
                        <ul>
                            <li><strong>Merchant Information:</strong> Shop name, email, address, phone number, and Shopify plan.</li>
                            <li><strong>Customer Information:</strong> Name, email, shipping address, and order details (only as required for App functionality).</li>
                            <li><strong>Usage Data:</strong> Information about how you use our Apps, including logs and device information.</li>
                        </ul>

                        <h3>2. How We Use Your Information</h3>
                        <p>We use the collected information to:</p>
                        <ul>
                            <li>Provide and maintain our Apps and services.</li>
                            <li>Process transactions and manage your account.</li>
                            <li>Improve and optimize our Apps.</li>
                            <li>Communicate with you regarding updates, support, and marketing (with consent).</li>
                            <li>Comply with legal obligations.</li>
                        </ul>

                        <h3>3. Data Sharing and Disclosure</h3>
                        <p>
                            We do not sell your personal data. We may share information with:
                        </p>
                        <ul>
                            <li><strong>Service Providers:</strong> Third-party vendors who assist with hosting, analytics, and support (e.g., AWS, Google Analytics).</li>
                            <li><strong>Legal Requirements:</strong> If required by law or to protect our rights.</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, sale, or asset transfer.</li>
                        </ul>

                        <h3>4. Data Retention</h3>
                        <p>
                            We retain your information only for as long as necessary to provide our services or as required by law. When you uninstall our App, we may retain certain data for a limited period for reporting and backup purposes before deletion.
                        </p>

                        <h3>5. Your Rights (GDPR & CCPA)</h3>
                        <p>
                            Depending on your location, you may have rights regarding your personal data, including:
                        </p>
                        <ul>
                            <li><strong>Access:</strong> Request a copy of your data.</li>
                            <li><strong>Correction:</strong> Update inaccurate information.</li>
                            <li><strong>Deletion:</strong> Request deletion of your data ("Right to be Forgotten").</li>
                        </ul>
                        <p>
                            If you are a merchant, please contact Shopify directly for data requests regarding your store. If you are a customer of a merchant, please contact the merchant directly.
                        </p>

                        <h3>6. Security</h3>
                        <p>
                            We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:support@virtualpixel.com" className="text-indigo-400 hover:text-indigo-300">support@virtualpixel.com</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
