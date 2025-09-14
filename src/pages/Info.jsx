import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Info() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen text-white flex flex-col bg-gradient-to-b from-slate-700/30 via-slate-800/10 to-slate-800/30">
      
      {/* Features */}
      <section id="features" className="p-10 border-b border-blue-600/40">
        <h2 className="text-3xl font-bold mb-4 text-blue-300">✨ Features</h2>
        <ul className="text-lg list-disc list-inside space-y-2 text-gray-300">
          <li>Explore hundreds of blogs on various topics</li>
          <li>Create, edit, and manage Blogs effortlessly</li>
          <li>Seamless integration with backend services</li>
          <li>Provides TinyMCE Text Editor for easier blog writing</li>
        </ul>
      </section>

      {/* Pricing */}
      <section id="pricing" className="p-10 border-b border-blue-600/40">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">💰 Pricing</h2>
        <div className="bg-blue-700/40 shadow-lg rounded-xl p-6 max-w-md hover:shadow-blue-500/40 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3">Free of Cost</h3>
          <p className="text-gray-300">
            All features are completely free to use. No hidden charges, no
            subscriptions, and no extra fees. Just sign up and start exploring.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="p-10 border-b border-blue-600/40">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">❓ FAQs</h2>
        <div className="space-y-6">
          {[
            {
              q: "Is this app really free?",
              a: "Yes. The app is completely free of cost. You don’t need to pay for registration or using its features."
            },
            {
              q: "Do I need to create an account?",
              a: "Yes, creating an account is required so you can manage your profile, posts, and preferences securely."
            },
            {
              q: "Can I edit or delete my posts later?",
              a: "Absolutely. You have full control over your posts and can update or remove them anytime."
            },
            {
              q: "Is my personal data safe?",
              a: "Yes. We use secure practices to keep your personal data safe and never share it with third parties."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-800/40 p-5 rounded-lg shadow-md hover:shadow-blue-500/30 transition"
            >
              <h3 className="font-semibold text-xl mb-2">{idx + 1}. {item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Terms */}
      <section id="terms" className="p-10 border-b border-blue-600/40">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">📜 Terms & Conditions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Do not copy, redistribute, or misuse any content without permission.</li>
          <li>Use the app only for personal and lawful purposes.</li>
        </ul>
      </section>
      {/* Contact */}
      <section id="contact" className="p-10 border-b border-blue-600/40">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">📬 Contact Us</h2>
        <p className="mb-6 text-gray-300">
          Have questions, feedback, or suggestions? Reach out to me anytime.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">📧 Email</h3>
            <a
              href="mailto:rushikeshkale18k@gmail.com"
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              rushikeshkale18k@gmail.com
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">💼 LinkedIn</h3>
            <a
              href="https://linkedin.com/in/rushikesh92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              linkedin.com/in/rushikesh92
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold">💻 GitHub</h3>
            <a
              href="https://github.com/rushikesh92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline hover:text-blue-300"
            >
              github.com/rushikesh92
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
