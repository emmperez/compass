import Testimonials from "../components/Testimonials/Testimonials"
import Footer from "../components/Footer/Footer"

export default function TermsAndConditions() {
    return (
        <>
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-lg max-w-none">
                    <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
                    <p className="text-gray-600 mb-8"><strong>Last Updated:</strong> 02/2025</p>
                    
                    <p className="text-gray-700">Welcome to COMPASS&reg; (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue use of our site.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Our Website</h2>
                    <p className="text-gray-700">You agree to use this website for lawful and ethical purposes only. The following actions are strictly prohibited:</p>
                    <ul className="list-disc pl-6 mt-2 mb-6 text-gray-700">
                        <li>Engaging in fraudulent, abusive, or illegal activity.</li>
                        <li>Attempting to hack, disrupt, or interfere with our website&rsquo;s functionality.</li>
                        <li>Posting or distributing harmful, offensive, or misleading content.</li>
                    </ul>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Intellectual Property Rights</h2>
                    <p className="text-gray-700">All content on this site, including text, graphics, logos, and images, is owned by us or licensed for use. You may not reproduce, distribute, or create derivative works from our content without explicit permission.</p>
                    <p className="text-gray-700">You may, however, share content with proper attribution and a link back to the original source.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Contributions</h2>
                    <p className="text-gray-700">By submitting content (e.g., comments, feedback, or guest posts), you grant us a non-exclusive, royalty-free, perpetual license to use, modify, and display such content. We reserve the right to remove any contributions that violate these terms.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Links</h2>
                    <p className="text-gray-700">Our website may include links to third-party websites for additional resources or recommendations. We are not responsible for the content, privacy policies, or practices of these external sites.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer of Warranties</h2>
                    <p className="text-gray-700">We provide our content for informational purposes only. The information on this site should not be considered professional, legal, medical, or financial advice.</p>
                    <p className="text-gray-700">We do not warrant that our website will always be available, uninterrupted, error-free, or secure. You use this site at your own risk.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
                    <p className="text-gray-700">Under no circumstances shall we be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website. This includes, but is not limited to, loss of data, profits, or business disruptions.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy Policy</h2>
                    <p className="text-gray-700">By using our website, you also agree to our <a href="/privacy-policy" className="text-pink-300 hover:text-pink-400 no-underline">Privacy Policy</a>, which outlines how we collect, use, and protect your personal information.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to These Terms</h2>
                    <p className="text-gray-700">We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting. It is your responsibility to review these terms periodically.</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
                    <p className="text-gray-700">These terms shall be governed by and interpreted under the laws of [Your Country/State]. Any disputes arising under these terms shall be subject to the jurisdiction of the courts in [Your Location].</p>
                    
                    <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
                    <p className="text-gray-700 mb-12">If you have any questions or concerns about these Terms and Conditions, please contact us at <a href="mailto:[your-email]" className="text-pink-300 hover:text-pink-400 no-underline">[your-email]</a>.</p>
                </div>
            </section>
            <Testimonials />
            <Footer />
        </>
    )
}