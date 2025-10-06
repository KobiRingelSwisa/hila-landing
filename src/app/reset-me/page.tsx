"use client";

import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";

export default function ResetMePage() {
  return (
    <>
      <main id="main" className="min-h-screen">
        <Header />

        {/* RESET ME Course Section */}
        <section id="reset-me" className="section-y mt-40">
          <div className="container-max max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              קורס RESET ME – הכוח לרפא את עצמך בכל רגע קורס בסיס למטפלים
            </h1>

            <div className="spiritual-card p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-xl spiritual-text mb-6">
                  תארו לכם חיים שבהם בכל פעם שאתם חווים פחד, כאב, כעס, התכווצות
                  או חוסר אונים – יש לכם כלי פשוט, מהיר לשחרר את זה.
                </p>
                <p className="text-xl spiritual-text mb-6">
                  בלי להמתין למטפל. בלי להיתקע בתחושות. בלי לשקוע במחשבות
                  שחוזרות שוב ושוב.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <h2 className="text-xl font-bold mb-3 gradient-text">
                        מה אם הייתם יכולים...
                      </h2>
                      <ul className="space-y-2 text-[16px] spiritual-text">
                        <li>להרגיע את עצמכם לפני מבחן או ראיון עבודה מלחיץ</li>
                        <li>לשחרר כעס ותסכול מיד אחרי ריב או שיחה טעונה</li>
                        <li>לעצור חרדה ברגע שהגוף מתכווץ והנשימה נתקעת</li>
                        <li>לנקות עצב ישן שעולה בלי שליטה</li>
                      </ul>
                      <p className="text-[16px] spiritual-text mt-4">
                        במקום להיסחף – אתם יודעים איך לאפס את עצמכם ולחזור
                        לשלווה וביטחון.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div>
                      <h2 className="text-xl font-bold mb-3 gradient-text">
                        איך זה עובד?
                      </h2>
                      <p className="text-[16px] spiritual-text mb-4">
                        בגוף ובתת־המודע שמורים "קבצי זיכרון" ישנים – חלקם
                        מהילדות, אחרים מטראומות או חוויות כואבות.
                      </p>
                      <p className="text-[16px] spiritual-text mb-4">
                        הקבצים האלה מחוברים לרגשות ולתחושות ומפעילים אותנו
                        אוטומטית שוב ושוב.
                      </p>
                      <p className="text-[16px] spiritual-text mb-4">
                        ב־RESET ME תלמדו פרוטוקול טיפול עצמי:
                      </p>
                      <ul className="space-y-1 text-[14px] spiritual-text">
                        <li>• לאתר את הזיכרון שמעורר את הרגש</li>
                        <li>• לשחרר את המטען האנרגטי מהגוף</li>
                        <li>• ליצור איזון תודעתי ותחושתי</li>
                        <li>
                          • להטמיע במקומו קובץ חדש – ביטחון, שמחה, אהבה עצמית,
                          ערך עצמי, קלילות
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div>
                      <h2 className="text-xl font-bold mb-3 gradient-text">
                        למה דווקא RESET ME?
                      </h2>
                      <ul className="space-y-2 text-[16px] spiritual-text">
                        <li>• לא צריך לחפור בכאב</li>
                        <li>• לא צריך לשתף או להסביר</li>
                        <li>• לא עוד תהליך אין־סופי</li>
                      </ul>
                      <p className="text-[16px] spiritual-text mt-4">
                        במקום זה – כלי אישי שתמיד איתכם. בכל מקום. בכל זמן.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div>
                      <h2 className="text-xl font-bold mb-3 gradient-text">
                        מה תרוויחו מהקורס?
                      </h2>
                      <ul className="space-y-2 text-[16px] spiritual-text">
                        <li>יכולת להרגיע את עצמכם מיידית</li>
                        <li>חופש מפחדים, חרדות, כעסים ותחושת חוסר אונים</li>
                        <li>שחרור תקיעויות ופתיחת זרימה חדשה לחיים</li>
                        <li>חיבור פנימי לשלווה, ביטחון ואהבה עצמית</li>
                      </ul>
                      <p className="text-[16px] spiritual-text mt-4">
                        מסע של 6 שיעורים מעשיים לפחות – עם כלים שתוכלו ליישם על
                        כל רגש או תחושה שעולה. כבר מהשיעור הראשון תדעו איך לעבוד
                        עם עצמכם – ותוכלו לחזור על התהליך שוב ושוב.
                      </p>
                      <p className="text-[16px] spiritual-text mt-4">
                        מרגישים שזה הזמן לאיזון אמיתי? הצטרפו ל־RESET ME ותגלו
                        כמה כוח יש לכם – להחזיר לעצמכם את החירות הפנימית, השליטה
                        והשלווה.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <a
                  href="#contact-form"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  להרשמה לקורס RESET ME
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="spiritual-card p-8 md:p-12 mt-12">
              <h2 className="text-2xl font-bold mb-6 gradient-text text-center">
                רוצים לשמוע עוד על קורס RESET ME?
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
