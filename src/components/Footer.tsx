import React from "react";
import { Mail, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

interface FooterProps {
  companyName?: string;
  companyAddress?: string;
  companyPhone?: string;
  companyEmail?: string;
}

const Footer = ({
  companyName = "PayNomad Capital Ltd.",
  companyAddress = "810 Quayside Dr. Unit #205, New Westminister, British Columbia, V3M 6B9, Canada",
  companyPhone,
  companyEmail = "info@paynomadcapitalltd.ca",
}: FooterProps) => {
  return (
    <footer
      className="w-full bg-[#2c3e50] text-[#ffffff] py-10"
      style={{ backgroundColor: "#2c3e50", color: "#ffffff" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">
              {companyName}
            </h3>
            <div className="flex items-center mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{companyAddress}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">{companyEmail}</span>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm hover:text-[#0077be] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-[#0077be] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  className="text-sm hover:text-[#0077be] transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-[#0077be] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy-policy"
                  className="text-sm hover:text-[#0077be] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const dialog = document.createElement("dialog");
                    dialog.className =
                      "fixed inset-0 z-50 bg-white p-6 overflow-auto max-w-4xl mx-auto my-10 rounded-lg shadow-lg";
                    dialog.innerHTML = `
                      <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-[#2c3e50]">PayNomad Capital Ltd. Privacy Policy</h2>
                        <button class="text-gray-500 hover:text-gray-700" id="close-privacy-dialog">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>
                      <div class="prose max-w-none">
                        <p><strong>Effective Date: January 5th, 2025</strong></p>
                        <h3>1. Introduction</h3>
                        <p>At PayNomad Capital Ltd. ("PayNomad," "we," "us," or "our"), we are dedicated to safeguarding the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and other applicable Canadian laws, including regulations tied to our Money Service Business (MSB) license issued by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC).</p>
                        <h3>2. Scope</h3>
                        <p>This Privacy Policy applies to all personal information collected from clients, website visitors, and users of our financial services, including cryptocurrency and digital asset management, currency exchange, cross-border payments, remittance services, and multi-currency accounts.</p>
                        <h3>3. Information We Collect</h3>
                        <p>We collect the following types of personal information:</p>
                        <ul>
                          <li>Identification Information: Name, address, date of birth, nationality, and government-issued identification (e.g., passport, driver's license).</li>
                          <li>Contact Information: Email address, phone number, and mailing address.</li>
                          <li>Financial Information: Bank account details, credit/debit card information, transaction history, and cryptocurrency wallet addresses.</li>
                          <li>Verification Information: Data required for anti-money laundering (AML) and counter-terrorist financing (CTF) compliance, such as source of funds and occupation.</li>
                          <li>Technical Information: IP address, browser type, device information, and website usage data.</li>
                          <li>Sensitive Information: In some cases, with your explicit consent, we may collect additional sensitive data, such as biometric information or detailed financial profiles.</li>
                        </ul>
                        <h3>4. How We Use Your Information</h3>
                        <p>We use your personal information to:</p>
                        <ul>
                          <li>Provide and manage our financial services, including account setup, transaction processing, and customer support.</li>
                          <li>Comply with legal and regulatory obligations, including AML and CTF requirements under FINTRAC.</li>
                          <li>Prevent fraud, money laundering, and other illegal activities.</li>
                          <li>Enhance our services, website functionality, and user experience.</li>
                          <li>Communicate with you regarding your account, transactions, and service updates.</li>
                          <li>Conduct risk assessments and maintain the security of our systems.</li>
                        </ul>
                        <h3>5. Disclosure of Your Information</h3>
                        <p>We may disclose your personal information to:</p>
                        <ul>
                          <li>Regulatory authorities, such as FINTRAC, to meet legal requirements.</li>
                          <li>Service providers (e.g., payment processors, IT vendors) under strict confidentiality agreements.</li>
                          <li>Financial institutions and payment networks (e.g., Interac e-Transfer, ACH, SWIFT, IBAN, International Payment Networks (IPN) (Visa/Mastercard) to facilitate transactions.</li>
                          <li>Law enforcement or government agencies, if required by law.</li>
                          <li>Third parties with your consent or as necessary to complete a transaction.</li>
                        </ul>
                        <p>We do not sell or rent your personal information.</p>
                        <h3>6. Data Security</h3>
                        <p>We employ robust safeguards to protect your personal information, including:</p>
                        <ul>
                          <li>Encryption of sensitive data.</li>
                          <li>Secure storage systems and access controls.</li>
                          <li>Regular security audits and vulnerability assessments.</li>
                          <li>Employee training on data protection protocols.</li>
                        </ul>
                        <h3>7. Your Rights</h3>
                        <p>Under PIPEDA, you have the right to:</p>
                        <ul>
                          <li>Access your personal information held by us.</li>
                          <li>Correct inaccurate or incomplete information.</li>
                          <li>Withdraw consent for certain uses of your information (where applicable).</li>
                          <li>Request deletion of your information, subject to legal retention obligations.</li>
                        </ul>
                        <p>To exercise these rights, contact our Privacy Officer at the details provided below.</p>
                        <h3>8. Cross-Border Data Transfers</h3>
                        <p>As a global financial services provider, we may transfer your personal information outside Canada. We ensure such transfers comply with PIPEDA and are protected by appropriate safeguards.</p>
                        <h3>9. Retention of Information</h3>
                        <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law, including FINTRAC retention obligations.</p>
                        <h3>10. Updates to This Policy</h3>
                        <p>We may update this Privacy Policy periodically. Material changes will be communicated via our website or other channels.</p>
                        <h3>11. Contact Us</h3>
                        <p>For questions or concerns about this Privacy Policy, please contact:</p>
                        <p>
                          PayNomad Capital Ltd.<br>
                          Privacy Officer<br>
                          810 Quayside Dr. Unit #205<br>
                          New Westminster, British Columbia<br>
                          V3M 6B9, Canada<br>
                          Email: info@paynomadcapitalltd.ca
                        </p>
                      </div>
                    `;
                    document.body.appendChild(dialog);
                    dialog.showModal();
                    document
                      .getElementById("close-privacy-dialog")
                      .addEventListener("click", () => {
                        dialog.close();
                        document.body.removeChild(dialog);
                      });
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-of-service"
                  className="text-sm hover:text-[#0077be] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const dialog = document.createElement("dialog");
                    dialog.className =
                      "fixed inset-0 z-50 bg-white p-6 overflow-auto max-w-4xl mx-auto my-10 rounded-lg shadow-lg";
                    dialog.innerHTML = `
                      <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-[#2c3e50]">PayNomad Capital Ltd. Terms of Service</h2>
                        <button class="text-gray-500 hover:text-gray-700" id="close-terms-dialog">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>
                      <div class="prose max-w-none">
                        <p><strong>Effective Date: January 5th, 2025</strong></p>
                        <h3>1. Agreement to Terms</h3>
                        <p>By accessing or using the services of PayNomad Capital Ltd. ("PayNomad," "we," "us," or "our"), you agree to these Terms of Service ("Terms"). If you do not agree, you may not use our services.</p>
                        <h3>2. Services Description</h3>
                        <p>PayNomad provides financial services tailored to high-net-worth individuals (HNWIs) with assets exceeding $2 million, including:</p>
                        <ul>
                          <li>Cryptocurrency and digital asset management with non-custodial digital wallets.</li>
                          <li>Currency exchange and cross-border payment solutions.</li>
                          <li>Remittance services for individuals and businesses.</li>
                          <li>Multi-currency accounts connected to payment networks such as Interac e-Transfer (Canada), ACH (USA), SWIFT (international), IBAN (Europe) and International Payment Networks (IPN) (Visa/Mastercard). Debit Card Services for individuals and businesses.</li>
                        </ul>
                        <h3>3. Eligibility</h3>
                        <p>To use our services, you must:</p>
                        <ul>
                          <li>Be at least 18 years old.</li>
                          <li>Provide accurate and complete information during registration.</li>
                          <li>Comply with all applicable laws, including AML and CTF regulations.</li>
                        </ul>
                        <h3>4. Account Management</h3>
                        <ul>
                          <li>Account Opening: Requires identity verification and AML/CTF checks.</li>
                          <li>Account Maintenance: You are responsible for securing your account credentials and reporting unauthorized access immediately.</li>
                          <li>Fees: Service fees will be disclosed prior to transactions.</li>
                          <li>Account Closure: You may close your account at any time, subject to settling outstanding obligations.</li>
                        </ul>
                        <h3>5. Transactions</h3>
                        <ul>
                          <li>Processing: Transactions follow timelines and procedures outlined in our service agreements.</li>
                          <li>Fees and Limits: Details will be provided before transaction confirmation.</li>
                          <li>Irreversibility: Some transactions (e.g., cryptocurrency transfers) may be irreversible; we are not liable for losses from user errors.</li>
                        </ul>
                        <h3>6. Prohibited Activities</h3>
                        <p>You agree not to:</p>
                        <ul>
                          <li>Use our services for illegal purposes (e.g., money laundering, fraud).</li>
                          <li>Provide false or misleading information.</li>
                          <li>Engage in activities that harm our systems or other users.</li>
                        </ul>
                        <h3>7. Liability and Disclaimers</h3>
                        <ul>
                          <li>Limitation of Liability: We are not liable for indirect, incidental, or consequential damages, to the extent permitted by law.</li>
                          <li>Service Availability: We aim for uninterrupted service but do not guarantee constant availability.</li>
                          <li>Market Risks: You accept the volatility of financial markets, including cryptocurrencies, and we are not responsible for related losses.</li>
                        </ul>
                        <h3>8. Intellectual Property</h3>
                        <p>All content, trademarks, and intellectual property related to our services are owned by PayNomad and protected by law.</p>
                        <h3>9. Termination</h3>
                        <p>We may suspend or terminate your account for violations of these Terms or prohibited activities. You may terminate your account by contacting us.</p>
                        <h3>10. Governing Law</h3>
                        <p>These Terms are governed by the laws of British Columbia and Canada. Disputes will be resolved in British Columbia courts.</p>
                        <h3>11. Dispute Resolution</h3>
                        <p>Disputes should first be addressed through negotiation. Unresolved disputes may proceed to arbitration under the British Columbia International Commercial Arbitration Centre rules.</p>
                        <h3>12. Updates to These Terms</h3>
                        <p>We may update these Terms, notifying you of material changes. Continued use constitutes acceptance.</p>
                        <h3>13. Contact Us</h3>
                        <p>For questions about these Terms, contact:</p>
                        <p>
                          PayNomad Capital Ltd.<br>
                          810 Quayside Dr. Unit #205<br>
                          New Westminster, British Columbia<br>
                          V3M 6B9, Canada<br>
                          Email: info@paynomadcapitalltd.ca
                        </p>
                      </div>
                    `;
                    document.body.appendChild(dialog);
                    dialog.showModal();
                    document
                      .getElementById("close-terms-dialog")
                      .addEventListener("click", () => {
                        dialog.close();
                        document.body.removeChild(dialog);
                      });
                  }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#cookie-policy"
                  className="text-sm hover:text-[#0077be] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const dialog = document.createElement("dialog");
                    dialog.className =
                      "fixed inset-0 z-50 bg-white p-6 overflow-auto max-w-4xl mx-auto my-10 rounded-lg shadow-lg";
                    dialog.innerHTML = `
                      <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-[#2c3e50]">PayNomad Capital Ltd. Cookie Policy</h2>
                        <button class="text-gray-500 hover:text-gray-700" id="close-cookie-dialog">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                      </div>
                      <div class="prose max-w-none">
                        <p><strong>Effective Date: January 5th, 2025</strong></p>
                        <h3>1. What Are Cookies?</h3>
                        <p>Cookies are small text files placed on your device when you visit our website, enabling us to enhance functionality and analyze usage.</p>
                        <h3>2. Types of Cookies We Use</h3>
                        <ul>
                          <li>Essential Cookies: Required for website operation (e.g., session management).</li>
                          <li>Analytics Cookies: Track website usage (e.g., Google Analytics).</li>
                          <li>Marketing Cookies: Deliver personalized content and ads.</li>
                        </ul>
                        <h3>3. Purpose of Cookies</h3>
                        <p>We use cookies to:</p>
                        <ul>
                          <li>Ensure website security and functionality.</li>
                          <li>Analyze traffic and user behavior.</li>
                          <li>Personalize your experience.</li>
                        </ul>
                        <h3>4. Your Consent</h3>
                        <p>Using our website implies consent to cookies as outlined here. You may adjust preferences via browser settings.</p>
                        <h3>5. Third-Party Cookies</h3>
                        <p>We may use third-party cookies (e.g., Google Analytics) governed by their respective privacy policies.</p>
                        <h3>6. Managing Cookies</h3>
                        <p>You can disable cookies in your browser, though this may impact website functionality.</p>
                        <h3>7. Updates to This Policy</h3>
                        <p>We may revise this Cookie Policy; please check periodically for updates.</p>
                        <h3>8. Contact Us</h3>
                        <p>For questions about cookies, contact:</p>
                        <p>
                          PayNomad Capital Ltd.<br>
                          810 Quayside Dr. Unit #205<br>
                          New Westminster, British Columbia<br>
                          V3M 6B9, Canada<br>
                          Email: info@paynomadcapitalltd.ca
                        </p>
                      </div>
                    `;
                    document.body.appendChild(dialog);
                    dialog.showModal();
                    document
                      .getElementById("close-cookie-dialog")
                      .addEventListener("click", () => {
                        dialog.close();
                        document.body.removeChild(dialog);
                      });
                  }}
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-600 my-6" />

        <div className="text-center text-sm text-gray-400">
          <p className="text-white">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <p className="mt-1 text-white">
            Registered in the Province of British Columbia, Canada No. BC1368768
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
