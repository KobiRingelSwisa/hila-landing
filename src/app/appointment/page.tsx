"use client";

import { Header } from "@/components/Header";
import { AppointmentForm } from "@/components/AppointmentForm";

export default function AppointmentPage() {
  return (
    <>
      <main id="main" className="min-h-screen">
        <Header />

        {/* Appointment Section */}
        <section id="appointment" className="section-y mt-40">
          <div className="container-max max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              קביעת פגישה
            </h1>

            <div className="spiritual-card p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-xl spiritual-text mb-6">
                  אני כאן כדי לעזור לך במסע שלך. בואו נקבע פגישה או שיחת ייעוץ
                  שתתאים לך.
                </p>
                <p className="text-lg spiritual-text">
                  מלאו את הטופס ואני אחזור אליכם בהקדם לקביעת הפגישה המתאימה.
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg border border-gold-1/20">
                  <div className="space-y-4 text-[16px] leading-7 spiritual-text">
                    <p>
                      כל פגישה היא מפגש נשמות, ולא סתם "פגישה טיפולית". לפני
                      שאנחנו נפגשים במילים, כבר מתרחש חיבור ברובד עמוק יותר –
                      היקום מסדר את האנרגיות, מכין את השדה, ומזמן את המפגש
                      המדויק לשנינו.
                    </p>
                    <p>
                      כשאנחנו יושבים יחד, אני רואה לא רק את הסיפור, אלא את הנשמה
                      שלך – את האור שמבקש לצאת, את המקומות שעוד מחכים להירפא.
                      אין כאן שיפוט, אין כאן "נכון" או "לא נכון" – יש רק אהבה
                      שמבקשת לזרום שוב.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-gold-1/10 to-gold-2/10 rounded-lg border border-gold-1/30">
                  <div className="space-y-4 text-[16px] leading-7 spiritual-text">
                    <p>
                      הפגישה היא מרחב פתוח שבו אנחנו עוצרים את הרעש, ונכנסים
                      פנימה – אל המקום שבו יש תשובות, גם כשנדמה שאין. אנחנו
                      מדברים, נושמים, מתקשרים, ולעיתים פשוט שותקים – כי לפעמים,
                      בשקט קורה הריפוי העמוק ביותר.
                    </p>
                    <p>
                      כל מפגש הוא מסע קטן בתוך המסע הגדול שלך, ובכל פעם שנפתחת
                      דלת של תודעה, האור מתרחב עוד קצת.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-lg border border-purple-400/30">
                  <div className="space-y-4 text-[16px] leading-7 spiritual-text">
                    <p>
                      אם אתה מרגיש קריאה, אם יש בך תחושת "הגיע הזמן" – תסמוך על
                      זה. הנשמה שלך יודעת בדיוק מתי היא מוכנה לצעד הבא. הטופס
                      כאן הוא רק כלי, אבל הבחירה שלך – היא רגע של שינוי.
                    </p>
                    <p>
                      פגישה אחת יכולה להיות הרגע שבו הכול מתחיל להסתדר מבפנים,
                      כמו פאזל שמוצא את מקומו אחרי שנים.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-r from-gold-1/10 to-gold-2/10 rounded-lg border border-gold-1/30">
                  <div className="space-y-4 text-[16px] leading-7 spiritual-text">
                    <p>
                      אני מאמינה שכל אדם שמגיע אליי כבר עשה את הצעד החשוב ביותר
                      – הוא אמר "כן" לעצמו. ומאותו רגע, כל השאר כבר קורה באופן
                      טבעי.
                    </p>
                    <p>
                      אז אם משהו בתוכך מרגיש שזה הזמן, אם אתה מרגיש את הקריאה
                      בלב – אני כאן. ניפגש מתוך אור, אהבה, וידיעה שכל דבר כבר
                      מדויק כפי שהוא.
                    </p>
                  </div>
                </div>
              </div>

              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
