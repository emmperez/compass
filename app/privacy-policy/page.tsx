import Testimonials from "../components/Testimonials/Testimonials"
import Footer from "../components/Footer/Footer"

const PrivacyPolicy = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-lg max-w-none">
                <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
                <p><strong>Last Updated:</strong> 02/2025</p>
                
                <p>Welcome to COMPASS&reg; (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website.</p>
                
                <h2>1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Name, email address, or any other details you provide voluntarily.</li>
                    <li><strong>Usage Data:</strong> Information on how you interact with our website, including IP addresses, browser type, and pages visited.</li>
                    <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience.</li>
                </ul>
                
                <h2>2. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                    <li>To provide, operate, and improve our website.</li>
                    <li>To personalize user experience and deliver relevant content.</li>
                    <li>To analyze website traffic and user behavior.</li>
                    <li>To send updates, newsletters, or promotional materials (if opted-in).</li>
                </ul>
                
                <h2>3. How We Protect Your Information</h2>
                <p>We implement security measures to protect your personal data from unauthorized access, disclosure, or loss. However, no online platform can guarantee complete security.</p>
                
                <h2>4. Third-Party Services</h2>
                <p>We may use third-party services (such as analytics and advertising partners) that collect, monitor, and analyze data. These third parties have their own privacy policies governing data usage.</p>
                
                <h2>5. Cookies and Tracking Technologies</h2>
                <p>We use cookies to improve website functionality and analyze user behavior. You can manage cookie preferences through your browser settings.</p>
                
                <h2>6. Data Retention</h2>
                <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.</p>
                
                <h2>7. Your Rights and Choices</h2>
                <p>Depending on your location, you may have rights to access, update, or delete your personal information. You may also opt out of certain data collection practices by adjusting your settings or contacting us.</p>
                
                <h2>8. Changes to This Privacy Policy</h2>
                <p>We reserve the right to update this policy as needed. Any changes will be posted on this page, and we encourage you to review it periodically.</p>
                
                <h2>9. Contact Information</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:[your-email]" className="no-underline text-pink-300 hover:text-pink-400">[your-email]</a>.</p>
                </div>
            </div>
            <Testimonials />    
            <Footer />
        </>
    );
  };
  
  export default PrivacyPolicy;
  