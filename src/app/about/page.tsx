"use client";

import Image from "next/image";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <main id="main" className="min-h-screen">
        <Header />

        {/* About Section */}
        <section id="about" className="section-y mt-40">
          <div className="container-max max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              המסע הרוחני שלי
            </h1>

            <div className="space-y-8">
              <div className="spiritual-card p-8 md:p-12">
                <div className="text-[18px] leading-8 spiritual-text space-y-6">
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

                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-gold-1/20">
                    <div className="space-y-4 text-[16px] leading-7 spiritual-text">
                      <p>
                        כל אדם נושא בתוכו סיפור עתיק – סיפור של נשמה שחוזרת שוב
                        ושוב כדי לזכור מי היא באמת. המסע שלי הוא גם המסע שלך –
                        מסע של התעוררות, של חיבור, של אמון מחדש בקול הפנימי.
                      </p>
                      <p>
                        לא בחרתי להיות מתקשרת. זו הייתה הקריאה של הנשמה שלי,
                        שביקשה להחזיר אותי הביתה — אל התדר שבו יש בהירות, שקט,
                        ואמת פשוטה. וכשנעניתי לקריאה הזו, החיים התחילו להיפתח
                        בשערים של אור והבנה.
                      </p>
                      <p>
                        מה שאני מלמדת היום נולד מתוך ניסיון חי, מתוך עשרות רגעים
                        שבהם ריפוי התרחש מול עיניי, מתוך ההבנה שהיקום כולו מדבר
                        אלינו, כל הזמן — אם רק נלמד להקשיב.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spiritual-card p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6 gradient-text text-center">
                  הכלים והשיטות שלי:
                </h2>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-semibold text-dark-blue">
                          NLP (Neuro-Linguistic Programming)
                        </h3>
                        <p className="text-sm text-dark-blue">
                          עבודה עם דפוסי חשיבה והתנהגות לשינוי עמוק וקבוע.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-semibold text-dark-blue">
                          EMR (Eye Movement Reprocessing)
                        </h3>
                        <p className="text-sm text-dark-blue">
                          שחרור טראומות וזיכרונות כואבים דרך תנועות עיניים
                          מבוקרות.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-semibold text-dark-blue">
                          תרפיית מימדים
                        </h3>
                        <p className="text-sm text-dark-blue">
                          עבודה עם מימדים שונים של התודעה לריפוי עמוק.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-semibold text-dark-blue">
                          הילינג אנרגטי
                        </h3>
                        <p className="text-sm text-dark-blue">
                          ריפוי דרך עבודה עם אנרגיות וערוצי התודעה.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-semibold text-dark-blue">
                          שחזור גלגולים
                        </h3>
                        <p className="text-sm text-dark-blue">
                          גילוי וטיפול בדפוסים שמקורם בחיים קודמים.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-semibold text-dark-blue">
                          תקשור מתקדם
                        </h3>
                        <p className="text-sm text-dark-blue">
                          קבלת מסרים מהמימדים הגבוהים וממדריכים רוחניים.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-gold-1/10 to-gold-2/10 rounded-lg border border-gold-1/30">
                    <div className="space-y-4 text-[16px] leading-7 spiritual-text text-center">
                      <p>
                        כל שיטה שאני מלמדת או משלבת היא לא רק טכניקה — היא שער.
                        שער לזיכרון, להבנה, לשחרור. כשאנחנו עובדים עם התודעה, עם
                        האנרגיה, עם הגוף — אנחנו לא "מתקנים" משהו שבור, אלא
                        מזכירים לתאים שלנו את האור הטבעי שבהם.
                      </p>
                      <p>
                        בכל מפגש אני רואה איך ברגע של אמת — כשאדם נושם ונפתח —
                        היקום כולו מגיב. והלב נרפא. והגוף נרגע. והנשמה מחייכת,
                        כי סוף־סוף רואים אותה.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="spiritual-card p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6 gradient-text text-center">
                  החזון שלי:
                </h2>
                <p className="text-[18px] leading-8 spiritual-text mb-4">
                  החזון שלי הוא להעניק לכם את הכלים וההבנה העמוקה ביותר שתאפשר
                  לכם לחיות חיים מלאים, משוחררים ומחוברים לאמת הפנימית שלכם. אני
                  מאמינה שכל אחד יכול לחיות מתוך שפע, שמחה ומימוש עצמי, ואני כאן
                  כדי ללוות אתכם במסע הזה.
                </p>
                <p className="text-[18px] leading-8 spiritual-text mb-4">
                  אני מזמינה אתכם להצטרף אליי למסע של גילוי, ריפוי והתפתחות
                  תודעתית, שבו תלמדו לשחרר את מה שתוקע אתכם, להתחבר לכוח הפנימי
                  שלכם, ולחיות את החיים שתמיד רציתם.
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-lg border border-purple-400/30">
                  <div className="space-y-4 text-[16px] leading-7 spiritual-text text-center">
                    <p>
                      החזון שלי אינו רק מילים — הוא תדר. תדר של אמונה בכך שכל
                      נשמה זכאית לאור שלה. אני מאמינה בריפוי שהוא רך אך עמוק,
                      פשוט אך משנה חיים.
                    </p>
                    <p>
                      העבודה שלי נועדה להזכיר לאנשים שהם כבר מחוברים, שהם כבר
                      יודעים, שהם כבר ראויים. ואם יש בי שליחות אחת – היא לעורר
                      את הזיכרון הזה בתוככם. להזכיר לכם שהאהבה שאתם מחפשים – אתם
                      היא.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
