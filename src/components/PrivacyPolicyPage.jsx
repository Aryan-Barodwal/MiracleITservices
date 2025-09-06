import React from "react";

/**
 * PrivacyPolicyPage.jsx
 * Customized Privacy Policy for MIRACLE IT SERVICES
 */

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 p-6 lg:p-12">
      <div className="max-w-5xl mx-auto bg-black backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        <header className="p-8 md:p-10 border-b border-gray-700">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            Effective date:{" "}
            <time dateTime={new Date().toISOString()}>
              {new Date().toLocaleDateString()}
            </time>
          </p>
          <p className="mt-4 text-gray-300">
            MIRACLE IT SERVICES values your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information when you use our website{" "}
            <strong>MiracleIt</strong>.
          </p>
        </header>

        <div className="md:grid md:grid-cols-4">
          {/* Table of contents */}
          <nav className="hidden md:block md:col-span-1 p-6 border-r border-gray-700">
            <h2 className="text-sm font-semibold text-blue-300 mb-4">
              On this page
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#data-we-collect" className="hover:underline">
                  Data We Collect
                </a>
              </li>
              <li>
                <a href="#how-we-use" className="hover:underline">
                  How We Use Data
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:underline">
                  Cookies & Tracking
                </a>
              </li>
              <li>
                <a href="#security" className="hover:underline">
                  Security
                </a>
              </li>
              <li>
                <a href="#your-rights" className="hover:underline">
                  Your Rights
                </a>
              </li>
              <li>
                <a href="#children" className="hover:underline">
                  Children
                </a>
              </li>
              <li>
                <a href="#changes" className="hover:underline">
                  Changes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <article className="md:col-span-3 p-6 md:p-10 space-y-8">
            <section
              id="data-we-collect"
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-2xl font-bold">1. Data We Collect</h2>
              <p>
                We collect the following types of personal data through our
                website <strong>Miracle IT Services</strong> (including our contact form):
              </p>
              <ul className="list-disc ml-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Your query</li>
                {/* <li>Phone number</li>
                <li>Payment information</li>
                <li>Location (for security purposes)</li> */}
              </ul>
            </section>

            <section id="how-we-use" className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold">2. How We Use Your Data</h2>
              <p>
                We use the information collected for the following purposes:
              </p>
              <ul className="list-disc ml-6">
                <li>To provide customer support.</li>
                <li>To personalize your experience with our services.</li>
                <li>
                  To use feedback for improving our website (not for
                  advertising).
                </li>
                <li>
                  For marketing communications, if you choose to engage with us.
                </li>
                <li>
                  For legal compliance and security monitoring (using location
                  data).
                </li>
              </ul>
            </section>

            <section id="cookies" className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold">3. Cookies and Tracking</h2>
              <p>
                We use cookies only to track how many users visit our website.
                These cookies help us understand traffic and improve our
                services. Users currently do not have the option to disable
                cookies through the site.
              </p>
            </section>

            <section id="security" className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold">4. Security</h2>
              <p>
                We take security seriously and implement safeguards such as
                encryption, secure servers, and access controls to protect your
                data. However, no online system is 100% secure.
              </p>
            </section>

            <section id="your-rights" className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold">5. Your Rights</h2>
              <p>
                You may request correction or deletion of your data by
                contacting us through email or phone. While we do not
                specifically operate under GDPR or CCPA, we respect your rights
                to privacy and data accuracy.
              </p>
            </section>

            <section id="children" className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold">6. Children’s Privacy</h2>
              <p>
                Our services are not intended for children under 13. We do not
                knowingly collect data from children. If such data is
                discovered, it will be deleted immediately.
              </p>
            </section>

            <section id="changes" className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we
                make changes, we will post a notice on our company’s website to
                keep you informed.
              </p>
            </section>

            <section id="contact" className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-gray-900/40 border border-gray-700">
                <p className="text-sm font-semibold">MIRACLE IT SERVICES</p>
                <p className="text-sm">Website/App: MiracleIt</p>
                <p className="text-sm">
                  Address: B-11/4, Mansrovar Building, 90 Nehru Place, Delhi
                  110096
                </p>
                <p className="text-sm">
                  Registered Office: H.N. 680, Azmatgarh, Mansurpur,
                  Muzaffarnagar, Uttar Pradesh-251203, India
                </p>
                <p className="text-sm">
                  Email:{" "}
                  <a href="mailto:info@miracleit.in" className="underline">
                    info@miracleit.in
                  </a>
                </p>
              </div>
            </section>

            <footer className="pt-6 border-t border-gray-700 text-sm text-gray-400">
              <p>
                This Privacy Policy is specific to{" "}
                <strong>MIRACLE IT SERVICES</strong> and its platform{" "}
                <strong>MiracleIt</strong>. It is for informational purposes
                only and does not replace professional legal advice.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}
