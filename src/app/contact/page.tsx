import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Petitmot French Learning App",
  description: "Get in touch with the Petitmot team. We'd love to hear your feedback and suggestions for improving your French learning experience.",
};

export default function ContactPage() {
  return (
    <div className="container-french">
      <div className="main-french">
        <div className="mb-8 w-full">
          <h1 className="heading-french-large mb-6">Contact Us 📧</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="phrase-card-french p-6">
              <h2 className="heading-french-medium mb-4">Get in Touch</h2>
              <p className="english-text mb-6">
                We'd love to hear from you! Whether you have questions about using Petitmot, 
                suggestions for new features, or feedback on your learning experience, 
                we're here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <h3 className="heading-french-small">Email</h3>
                    <p className="english-text text-sm">
                      <Link 
                        href="mailto:hello@petitmot.app" 
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        hello@petitmot.app
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg">🐙</span>
                  </div>
                  <div>
                    <h3 className="heading-french-small">GitHub</h3>
                    <p className="english-text text-sm">
                      <Link 
                        href="https://github.com/mollybeach" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        github.com/mollybeach
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg">💬</span>
                  </div>
                  <div>
                    <h3 className="heading-french-small">Feedback</h3>
                    <p className="english-text text-sm">
                      Share your thoughts and suggestions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="phrase-card-french p-6">
              <h2 className="heading-french-medium mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="heading-french-small mb-2">How do I use the pronunciation feature?</h3>
                  <p className="english-text text-sm">
                    Simply click the "Speak French" button next to any phrase to hear the pronunciation. 
                    The text-to-speech feature uses high-quality French voices.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-french-small mb-2">Are there more lessons coming?</h3>
                  <p className="english-text text-sm">
                    Yes! We're constantly adding new lessons and phrases. 
                    Check back regularly for updates and new content.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-french-small mb-2">Can I suggest new phrases or lessons?</h3>
                  <p className="english-text text-sm">
                    Absolutely! We welcome suggestions for new content. 
                    Send us your ideas via email or GitHub.
                  </p>
                </div>
                
                <div>
                  <h3 className="heading-french-small mb-2">Is Petitmot free to use?</h3>
                  <p className="english-text text-sm">
                    Yes, Petitmot is completely free to use. 
                    We believe language learning should be accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="phrase-card-french p-6">
            <h2 className="heading-french-medium mb-4">Send Us a Message</h2>
            <p className="english-text mb-4">
              Have a specific question or suggestion? We'd love to hear from you!
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="english-text text-sm text-gray-600 mb-4">
                For now, please reach out to us via email or GitHub. 
                We're working on adding a contact form in a future update.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="mailto:hello@petitmot.app?subject=Petitmot Feedback"
                  className="btn-french text-center"
                >
                  📧 Send Email
                </Link>
                <Link 
                  href="https://github.com/mollybeach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-french text-center"
                >
                  🐙 Visit GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
