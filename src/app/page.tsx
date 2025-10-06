"use client";

import Image from "next/image";
import hilaPhoto from "../../public/images/hila-photo.jpg";
import Link from "next/link";
import { Header } from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "הילה תחכמוני",
            jobTitle: "מתקשרת ומטפלת רגשית",
            description:
              "מתקשרת ומטפלת רגשית עם כלים מתקדמים לתקשור, ריפוי רגשי ותהליכי RESET",
            url: "https://hila-communication.com",
            sameAs: [
              "https://www.facebook.com/hila.tahkmoni",
              "https://www.youtube.com/channel/UC_hila_channel",
              "https://wa.me/972XXXXXXXXX",
            ],
            image: "/images/hila-photo.jpg",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "תקשור וריפוי רגשי",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "תקשור אישי",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "תהליך RESET 360°",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "קורס RESET ME",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "קורס תקשור",
                  },
                },
              ],
            },
          }),
        }}
      />
      <main id="main" className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section id="hero" className="section-y mt-40">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-right">
                <div className="text-[18px] leading-8 spiritual-text-on-dark space-y-4 animate-fade-in">
                  <p className="text-xl font-medium">
                    מאז ילדותי ליוו אותי שאלות מהותיות על טבע היקום, על מה
                    שמתרחש מעבר לזמן ולמרחב ועל מסע הנשמה בין העולמות...
                  </p>
                  <p>
                    אני הילה תחכמוני, מתקשרת ומטפלת רגשית עם כלים מתקדמים
                    לתקשור, ריפוי רגשי ותהליכי RESET. המסע שלי החל עם רצון עמוק
                    להבין את נסתרות החיים ולהעניק ריפוי אמיתי לכל מי שזקוק לו.
                  </p>
                  <p>
                    היום אני מציעה מגוון רחב של שירותים: מתקשור אישי ועד קורסים
                    מקיפים להתפתחות תודעתית ורוחנית. כל אחד מהכלים שלי נועד
                    לעזור לך לשחרר רגשות תקועים, להתחבר למסרים מהמימדים הגבוהים,
                    ולצאת למסע של התפתחות והעצמה אישית.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="text-center">
                <div className="relative inline-block">
                  <Image
                    src={hilaPhoto}
                    alt="הילה תחכמוני - מתקשרת ומטפלת רגשית"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* External Links Section */}
        <section className="section-y">
          <div className="container-max max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 gold-text-on-dark">
              הצטרפו לקהילה שלי
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="https://www.facebook.com/groups/hila.tahkmoni.community"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                הצטרפו לקהילה – תקשור ומסרים מהמימד החמישי (18,000+ חברים)
              </a>
              <a
                href="https://www.youtube.com/channel/UC_hila_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                צפו בסרטונים ומסרים חדשים ביוטיוב
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section - Bottom */}
        <section className="section-y">
          <div className="container-max max-w-3xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <Link
                href="/appointment"
                className="btn btn-primary text-lg px-8 py-4"
              >
                להתחלת המסע שלך לאיזון רגשי
              </Link>
            </div>

            <div className="text-sm gold-text-on-dark opacity-90 animate-fade-in">
              <span>תקשור אישי ומדויק</span>
              <span className="mx-2">•</span>
              <span>כלים מתקדמים לריפוי רגשי</span>
              <span className="mx-2">•</span>
              <span>קורסים מקיפים להתפתחות תודעתית</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--ink)] text-white py-12">
        <div className="container-max">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 הילה תחכמוני - כל הזכויות שמורות
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
