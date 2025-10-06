"use client";

import { Header } from "@/components/Header";
import { ResetForm } from "@/components/ResetForm";

export default function ResetPage() {
  return (
    <>
      <main id="main" className="min-h-screen">
        <Header />

        {/* RESET 360° Section */}
        <section id="reset" className="section-y mt-40">
          <div className="container-max max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              תהליך RESET אישי – לשחרור כאבים טראומות פוביות תקיעויות, חסמים
              וחרדות
            </h1>

            <div className="space-y-8">
              {/* מה זה תהליך RESET */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-text">
                      מרגישים שמשהו "תוקע" אתכם – אבל אתם לא מצליחים לשים על זה
                      את האצבע?
                    </h2>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      כמה פעמים הרגשתם שאתם כבר מבינים הכול בראש, אבל בפנים –
                      בגוף, בלב, בתחושות – משהו פשוט לא משתחרר?
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      אתם רוצים להתקדם. לפרוץ. לנשום. אבל יש בכם כאילו מגדל
                      פנימי של רגשות כלואים – פחד, עצב, כעס, זעם, תסכול, תחושת
                      בדידות, דחייה, חוסר ערך – ואתם אפילו לא בטוחים מאיפה זה
                      מגיע...
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      היום אני מציעה לכם דרך חדשנית, קצרה ויעילה לשחרר את הרגשות
                      התקועים האלה – תהליך RESET 360°.
                    </p>
                  </div>
                </div>
              </div>

              {/* איך זה עובד בפועל */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-text">
                      איך זה עובד?
                    </h2>
                    <ul className="space-y-2 text-[18px] leading-8 spiritual-text">
                      <li>
                        • בכל מפגש, אנחנו מאתרים את קבצי הזיכרון שמעוררים את
                        הרגש/הכאב/הפחד
                      </li>
                      <li>• מנקים את המטען האנרגטי מהגוף (כן, מהאיברים ממש)</li>
                      <li>• יוצרים "איזון" תודעתי ותחושתי</li>
                      <li>
                        • ומטמיעים קבצים חדשים של ביטחון, שמחה, אהבה עצמית, ערך
                        עצמי, קלילות ונוכחות
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* תוצאות */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-text">
                      תוצאות? מרגישים כבר מהמפגש הראשון:
                    </h2>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      אבל מה שיותר מעניין – זה מה שקורה שבועות אחרי: הגוף מתחדש,
                      התאים מתחדשים – אבל הפעם בלי לשאת את הזיכרון של הטראומה.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      ואז גם השדה האנרגטי משתנה. כי הוא מהדהד ללא הטראומות,
                      הרגשות השליליים והפחדים שהביאו את השיעורים הללו לחייכם.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      ואז – המציאות שלכם משתנה ומתחילה להיראות אחרת. פחות חוסר
                      אונים, כאב, כעס, צער, עצב וחרדות והרבה יותר שלווה פנימית,
                      בהירות וביטחון פנימי. פחות חוסר ותקיעות והרבה יותר שפע
                      וזרימה.
                    </p>
                  </div>
                </div>
              </div>

              {/* למי זה מתאים */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-text">
                      למי זה מתאים?
                    </h2>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      למי זה מתאים?
                    </p>
                    <ul className="space-y-2 text-[16px] spiritual-text mb-4">
                      <li>• למי שניסה הכול – אבל עדיין מרגיש תקוע וחסר שפע.</li>
                      <li>
                        • למי שחווה טראומות, חרדות, פחדים, רגשות שליליים,כאבים
                        כרוניים – ולא מוצא פתרון אמיתי.
                      </li>
                      <li>• למי שמרגיש שהגוף מגיב לו – בלי שליטה</li>
                      <li>
                        • למי שמבין שהפתרון כבר לא במיינד – אלא בגוף, בתודעה,
                        בזיכרון התאי
                      </li>
                    </ul>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      תהליך RESET נבנה כמסע של 6 מפגשים לפחות, שיכול להתרחב
                      בהתאם לפתיחת שכבות חדשות בתודעה. מאחר וכאשר נפתחים קבצים
                      בזיכרון של התת מודע מתגלים עוד שכבות של טראומות, כאב
                      ורגשות מעיקים ישנים.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      הוא לא מתאים למי שמחפש קיצור דרך – הוא כן מתאים למי שמוכן
                      לעבור קיצור דרך פנימה.
                    </p>
                  </div>
                </div>
              </div>

              {/* מה קורה אחרי מפגש */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4 gradient-text">
                      שימו לב:
                    </h2>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      לפעמים, אחרי מפגש – יכולים להיות סימני ניקוי: עייפות, בכי,
                      לעיתים חוסר אנרגיה, תחושת ריק, הקאה רגשי ולעיתים תחושת
                      חולי…
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      זה נורמלי לחלוטין – כי התודעה והגוף משחררים רעלים אנרגטיים
                      שהוחזקו שנים באיברים וברמת התא והדי, אנ, איי.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      רוצה לשמוע עוד? שלחו לי לוואצאפ הודעה עם המילה "RESET" ואם
                      אתם מרגישים שזה הזמן לאיזון – בואו נעשה את זה יחד.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      כי זה הזמן להפסיק לחוות כאב, פחד, פגיעות וחרדה – ולהתחיל
                      לחיות מתוך סיפוק, שמחה ושלווה. אז בואו ונתחיל את המסע שלכם
                      להצלחה
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="spiritual-card p-6">
                <ResetForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
