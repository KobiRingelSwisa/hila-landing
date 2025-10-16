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
        <section id="hero" className="section-y mt-32 md:mt-40">
          <div className="container-max">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text Content */}
              <div className="text-right order-2 md:order-1">
                <div className="text-base md:text-[18px] leading-7 md:leading-8 spiritual-text-on-dark space-y-4 animate-fade-in">
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

                  <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-gold-1/20">
                    <div className="space-y-3 md:space-y-4 text-sm md:text-[16px] leading-6 md:leading-7 spiritual-text-on-dark">
                      <p>
                        כל מסע של ריפוי מתחיל ברגע שבו אנחנו עוצרים, נושמים,
                        ומסכימים להביט פנימה — מעבר לסיפור, מעבר לכאב, אל תוך
                        המקום השקט שבו הנשמה זוכרת. שם, במקום הזה, מתחיל הריפוי.
                      </p>
                      <p>
                        המסע שאני מלווה אליו הוא מסע של אמת – לא עוד חיפוש
                        חיצוני, אלא גילוי של האור שכבר נמצא בתוכך.
                      </p>
                      <p>
                        דרך התקשור, אנחנו לומדים להקשיב לא רק למה שהמוח מספר,
                        אלא למה שהנשמה לוחשת. כל מסר שמתקבל הוא מפתח, וכל מפתח
                        פותח שכבה נוספת של הבנה, רוך ואהבה עצמית.
                      </p>
                      <p>
                        תהליכי ה־RESET שאני מלמדת אינם רק כלים – הם שערים. שערים
                        לשחרור, להיזכרות, ולהתעוררות אל עצמך. כי כשאת מתחברת
                        למקור שלך – כל מה שמסביב מתחיל להתבהר.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="text-center order-1 md:order-2">
                <div className="relative inline-block max-w-sm md:max-w-md mx-auto">
                  <Image
                    src={hilaPhoto}
                    alt="הילה תחכמוני - מתקשרת ומטפלת רגשית"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-2xl object-cover w-full h-auto"
                    priority
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
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center">
              <a
                href="https://www.facebook.com/groups/385840256440426"
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

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-gold-1/10 to-gold-2/10 rounded-lg border border-gold-1/30">
              <div className="space-y-3 md:space-y-4 text-sm md:text-[16px] leading-6 md:leading-7 spiritual-text-on-dark text-center">
                <p>
                  הקהילה שלי נולדה מתוך הלב, כדי שכל אחת ואחד יוכל לזכור שהוא לא
                  לבד בדרך הזו. אנחנו צועדים יחד — משתפים, לומדים, נפתחים
                  ומתרחבים.
                </p>
                <p>
                  בכל יום אני רואה איך אור קטן של אמת אחת, מסר אחד, או הבנה אחת
                  עמוקה — מסוגלים לשנות חיים שלמים.
                </p>
                <p>
                  הקהילה הזו היא לא רק מקום — היא שדה של תודעה. שדה שבו אנשים
                  חוזרים אל הלב שלהם, ומגלים כמה כוח, חמלה וידיעה יש בהם מאז
                  ומתמיד.
                </p>
              </div>
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

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-lg border border-purple-400/30">
              <div className="space-y-3 md:space-y-4 text-sm md:text-[16px] leading-6 md:leading-7 spiritual-text-on-dark text-center">
                <p>
                  כל מפגש, כל קורס, כל שיחה — נולדים מתוך אותה שליחות אחת:
                  להזכיר לך שאת.ה הרבה יותר ממה שנדמה לך. להזכיר לך שהאור שאת.ה
                  מחפש — כבר נמצא בתוכך.
                </p>
                <p>
                  בין אם זו קריאה ראשונה בלבך לצאת למסע הזה, ובין אם כבר הלכת
                  דרך ארוכה — אני כאן כדי להחזיק עבורך את המראה הרכה שבה תוכלי
                  לראות את עצמך באמת. ומשם, הכול מתחיל להיפתח.
                </p>
              </div>
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
