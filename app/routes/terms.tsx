import type { Route } from "./+types/terms";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Terms of Service - Virtual Pixel" },
        { name: "description", content: "Terms of Service for Virtual Pixel and our Shopify Apps." },
    ];
}

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 font-sans">
            <Navbar />
            <main className="pt-32 pb-20 px-6 container mx-auto relative z-10">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[10%] right-[10%] w-[20%] h-[20%] bg-emerald-600/10 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">Terms of Service</h1>
                    <p className="text-slate-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                        <p>
                            Welcome to Virtual Pixel. By installing or using our Shopify applications ("Apps") or accessing our website, you agree to be bound by these Terms of Service ("Terms").
                        </p>

                        <h3>1. Use of Services</h3>
                        <p>
                            Virtual Pixel grants you a limited, non-exclusive, non-transferable, and revocable license to use our Apps for your Shopify store in accordance with these Terms.
                        </p>
                        <ul>
                            <li>You must be at least 18 years old to use our Services.</li>
                            <li>You are responsible for maintaining the security of your Shopify account.</li>
                            <li>You agree not to use our Services for any illegal or unauthorized purpose.</li>
                        </ul>

                        <h3>2. Billing and Payments</h3>
                        <p>
                            Our Apps are billed through the Shopify billing system.
                        </p>
                        <ul>
                            <li><strong>Subscription Fees:</strong> Recurring charges are billed every 30 days.</li>
                            <li><strong>Usage Fees:</strong> Some features may incur usage-based charges.</li>
                            <li><strong>Refunds:</strong> We generally do not offer refunds, but exceptions may be made on a case-by-case basis. Please contact support.</li>
                        </ul>

                        <h3>3. Intellectual Property</h3>
                        <p>
                            All rights, title, and interest in and to the Apps and Services, including all intellectual property rights, are and will remain the exclusive property of Virtual Pixel.
                        </p>

                        <h3>4. Limitation of Liability</h3>
                        <p>
                            To the maximum extent permitted by law, Virtual Pixel shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of our Services.
                        </p>

                        <h3>5. Disclaimer of Warranties</h3>
                        <p>
                            Our Services are provided "as is" and "as available" without any warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.
                        </p>

                        <h3>6. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
                        </p>

                        <h3>7. Governing Law</h3>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                        </p>

                        <h3>8. Contact Us</h3>
                        <p>
                            If you have any questions about these Terms, please contact us at: <a href="mailto:support@virtualpixel.com" className="text-indigo-400 hover:text-indigo-300">support@virtualpixel.com</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
