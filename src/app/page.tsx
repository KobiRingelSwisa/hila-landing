"use client";

import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PersonalReadingForm } from "@/components/PersonalReadingForm";
import { ResetForm } from "@/components/ResetForm";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "הילה",
            jobTitle: "מתקשרת ומטפלת רגשית",
            description:
              "מתקשרת ומטפלת רגשית עם כלים מתקדמים לתקשור, ריפוי רגשי ותהליכי RESET",
            url: "https://hila-communication.com",
            sameAs: [
              "https://www.facebook.com/groups/hila-communication",
              "https://www.youtube.com/@hila-communication",
            ],
            offers: {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "תקשור וריפוי רגשי",
                description: "שירותי תקשור, ריפוי רגשי ותהליכי RESET",
              },
            },
          }),
        }}
      />
      <main id="main" className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section id="hero" className="section-y spiritual-bg">
          <div className="container-max">
            <div className="text-center max-w-5xl mx-auto">
              {/* Hila's Logo - Large */}
              <div className="mb-8 animate-fade-in">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gold-1 to-gold-2 rounded-full flex items-center justify-center text-deep-blue font-bold text-4xl shadow-2xl animate-glow">
                  ✡
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 animate-fade-in">
                <span className="gradient-text">
                  הילה – תקשור, ריפוי ותהליכי RESET לשחרור רגשי והתפתחות תודעתית
                </span>
              </h1>

              <div className="text-[18px] leading-8 spiritual-text-on-dark mb-8 space-y-6 animate-fade-in">
                <p className="text-xl font-medium">
                  מאז ילדותי ליוו אותי שאלות מהותיות על טבע היקום, על מה שמתרחש
                  מעבר לזמן ולמרחב ועל מסע הנשמה בין העולמות...
                </p>
                <p>
                  אני הילה, מתקשרת ומטפלת רגשית עם כלים מתקדמים לתקשור, ריפוי
                  רגשי ותהליכי RESET. המסע שלי החל עם רצון עמוק להבין את נסתרות
                  החיים ולהעניק ריפוי אמיתי לכל מי שזקוק לו.
                </p>
                <p>
                  היום אני מציעה מגוון רחב של שירותים: מתקשור אישי ועד קורסים
                  מקיפים להתפתחות תודעתית ורוחנית. כל אחד מהכלים שלי נועד לעזור
                  לך לשחרר רגשות תקועים, להתחבר למסרים מהמימדים הגבוהים, ולצאת
                  למסע של התפתחות והעצמה אישית.
                </p>
              </div>

              <div className="mb-8 animate-fade-in">
                <a
                  href="#contact-form"
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  להתחלת המסע שלך לאיפוס רגשי
                </a>
              </div>

              <div className="text-sm gold-text-on-dark opacity-90 animate-fade-in">
                <span>✨ תקשור אישי ומדויק</span>
                <span className="mx-2">•</span>
                <span>💎 כלים מתקדמים לריפוי רגשי</span>
                <span className="mx-2">•</span>
                <span>🌟 קורסים מקיפים להתפתחות תודעתית</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-y">
          <div className="container-max max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              אודות הילה – המסע הרוחני שלי
            </h2>

            <div className="space-y-8">
              <div className="spiritual-card p-8 md:p-12">
                <div className="text-[18px] leading-8 spiritual-text space-y-6">
                  <p>
                    מאז ילדותי ליוו אותי שאלות מהותיות על טבע היקום, על מה
                    שמתרחש מעבר לזמן ולמרחב ועל מסע הנשמה בין העולמות. כבר כילדה
                    הרגשתי שהידע הזה זורם בי באופן טבעי, כאילו התשובות היו שם
                    תמיד — מחכות שאקשיב להן.
                  </p>

                  <p>
                    הסקרנות והכמיהה להבין את הסודות שמעבר לגלוי הובילו אותי
                    לחקירה מתמשכת של תחומים רוחניים ואיזוטריים, וללימוד מעמיק של
                    שיטות טיפול מתקדמות.
                  </p>

                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    הכלים והשיטות שלי:
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🧠</span>
                        <div>
                          <h4 className="font-semibold text-[var(--lilac-1)]">
                            NLP (Neuro-Linguistic Programming)
                          </h4>
                          <p className="text-sm">
                            עבודה עם דפוסי חשיבה והתנהגות לשינוי עמוק וקבוע.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-2xl">⚡</span>
                        <div>
                          <h4 className="font-semibold text-[var(--turquoise-1)]">
                            EMR (Eye Movement Reprocessing)
                          </h4>
                          <p className="text-sm">
                            שחרור טראומות וזיכרונות כואבים דרך תנועות עיניים
                            מבוקרות.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🌀</span>
                        <div>
                          <h4 className="font-semibold text-[var(--gold-1)]">
                            תרפיית מימדים
                          </h4>
                          <p className="text-sm">
                            עבודה עם מימדים שונים של התודעה לריפוי עמוק.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">✨</span>
                        <div>
                          <h4 className="font-semibold text-[var(--lilac-1)]">
                            הילינג אנרגטי
                          </h4>
                          <p className="text-sm">
                            ריפוי דרך עבודה עם אנרגיות וערוצי התודעה.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔮</span>
                        <div>
                          <h4 className="font-semibold text-[var(--turquoise-1)]">
                            שחזור גלגולים
                          </h4>
                          <p className="text-sm">
                            גילוי וטיפול בדפוסים שמקורם בחיים קודמים.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💎</span>
                        <div>
                          <h4 className="font-semibold text-[var(--gold-1)]">
                            תקשור מתקדם
                          </h4>
                          <p className="text-sm">
                            קבלת מסרים מהמימדים הגבוהים וממדריכים רוחניים.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-medium">
                    מתוך המסע האישי והמקצועי הזה נולד החזון שלי – לסייע לאנשים
                    לשחרר את המטען שמכביד עליהם, ולהתחבר מחדש לאמת הפנימית,
                    לאהבה ולשפע שמגיעים להם מטבעם.
                  </p>

                  <p className="font-medium">
                    כך ייסדתי את RESET 360° – שיטה ייחודית שמקצרת תהליכים
                    ומאפשרת ריפוי ושינוי עמוק בזמן קצר. באמצעותה אני מלווה אנשים
                    בהתמודדות עם טראומות, חרדות, פוביות, משברים ואמונות שורש
                    מגבילות, כדי לאפשר להם לצמוח, להתפתח וליצור לעצמם מציאות
                    חדשה של חופש, אהבה והגשמה.
                  </p>

                  <p className="font-medium">
                    בנוסף, אני מתקשרת מילדותי עם ישויות אור ועתה עם המועצה
                    העליונה של הבריאה, מלאכי אורה' והפדרציה הגלקטית. דרך התקשור
                    אני מורידה מיידעים וכותבת מאמרים על שינויי הבריאה והעולם,
                    ומעבירה מסרים לבני אנוש על מסע הנשמה האישי שלהם בתקשורים
                    אישיים.
                  </p>

                  <p className="font-medium">
                    לפני 4 שנים פתחתי קהילה שמונה כיום כ־18,000 חברים – ששמה
                    "תקשור ומסרים מהמימד החמישי" – שבה אני מעניקה גם פלטפורמה
                    לשליחי אור להעלות מידעים מוארים להתפתחות האנושות.
                  </p>

                  <p className="font-medium">
                    והכי מעניין שאני מורה לתקשור ולשחזור גלגולים, והעברתי עד
                    היום אלפי תקשורים סדנאות ותהליכים להתפתחות מואצת של מסע
                    הנשמה.
                  </p>

                  <p className="font-medium">
                    כי אני מאמינה – לכולנו יש את הכוח לברוא חיים חדשים. לפעמים
                    רק צריך ליווי נכון, יד שתאיר את הדרך, ותזכורת עדינה שהאור
                    כבר נמצא בתוכנו.
                  </p>
                </div>

                <div className="text-center mt-8">
                  <a href="#reset" className="btn btn-primary">
                    להכיר את שיטת RESET 360°
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESET 360° Section */}
        <section id="reset" className="section-y spiritual-bg">
          <div className="container-max max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              תהליך RESET אישי – לשחרור כאבים טראומות פוביות תקיעויות, חסמים
              וחרדות
            </h2>

            <div className="space-y-8">
              {/* מה זה תהליך RESET */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">🧠</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      💥 מרגישים שמשהו "תוקע" אתכם – אבל אתם לא מצליחים לשים על
                      זה את האצבע?
                    </h3>
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
                      וזה לא כי אתם לא מנסים. להפך. ניסיתם הכל: קואצ'ינג, טיפול
                      רגשי, הבנות תודעתיות, קריאה, מודעות. אבל ברגע האמת, כשאתם
                      שוב באותו מצב – הטריגר מנצח אתכם שוב.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text font-bold mb-4">
                      אז תקשיבו טוב, זה לא "אשמתכם".
                    </p>
                  </div>
                </div>
              </div>

              {/* איך זה עובד */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">💎</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      🌐 בתוך תת-המודע שלכם יש "מחשב פנימי"
                    </h3>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      בתוך תת-המודע שלכם יש "מחשב פנימי" – מערכת עצומה שמנהלת
                      אתכם מבפנים. תחשבו על התת מודע כמחשב שבו יושבים קבצי
                      זיכרון, תקולים.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      חלקם נוצרו כבר בילדות. אחרים נרשמו בעקבות אפיזודות של כאב,
                      טראומה, פרידה, בושה, נטישה… והקבצים האלה מחוברים לרגש.
                      ולתחושה, והם יושבים לא רק בתודעה – אלא ממש בתוך האיברים
                      שלכם.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      🔁 זה מסביר למה כל פעם ש"משהו קורה" – אתם מרגישים כאילו
                      הגוף מגיב עוד לפני שהספקתם לחשוב. כי הוא באמת מגיב. כי
                      מתחת לפני השטח – הזיכרון התאי מפעיל אתכם שוב.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      🧠 כאן נכנס תהליך ה־RESET.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      ❎️לא עוד טיפול רגשי שדורש מכם "לדבר על זה". ❎️לא עוד
                      חפירה בכאב. ❎️לא תהליך אין-סופי.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      אלא פרוטוקול טיפולי קצר, יעיל, עוקף מיינד, שמנקה את
                      הזיכרונות האנרגטיים מהגוף – ומטמיע תחתיהם קבצי תודעה
                      חדשים, מעצימים, נקיים ומחזקים.
                    </p>
                  </div>
                </div>
              </div>

              {/* איך זה עובד בפועל */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">🔹</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      איך זה עובד?
                    </h3>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      🔹 בכל מפגש, אנחנו מאתרים את קבצי הזיכרון שמעוררים את
                      הרגש/הכאב/הפחד
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      🔹 מנקים את המטען האנרגטי מהגוף (כן, מהאיברים ממש)
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      🔹 יוצרים "איפוס" תודעתי ותחושתי
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      🔹 ומטמיעים קבצים חדשים של ביטחון, שמחה, אהבה עצמית, ערך
                      עצמי, קלילות ונוכחות.
                    </p>
                  </div>
                </div>
              </div>

              {/* תוצאות */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">🌀</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      תוצאות? מרגישים כבר מהמפגש הראשון:
                    </h3>
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
                  <span className="text-4xl">💎</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      למי זה מתאים?
                    </h3>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      💎 למי זה מתאים?
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
                      ✨ תהליך RESET נבנה כמסע של 6 מפגשים לפחות, שיכול להתרחב
                      בהתאם לפתיחת שכבות חדשות בתודעה. מאחר וכאשר נפתחים קבצים
                      בזיכרון של התת מודע מתגלים עוד שכבות של טראומות, כאב
                      ורגשות מעיקים ישנים.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      📍הוא לא מתאים למי שמחפש קיצור דרך – הוא כן מתאים למי
                      שמוכן לעבור קיצור דרך פנימה.
                    </p>
                  </div>
                </div>
              </div>

              {/* מה קורה אחרי מפגש */}
              <div className="spiritual-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">⚠️</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      ⚠️ שימו לב:
                    </h3>
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
                      💬 רוצה לשמוע עוד? שלחו לי לוואצאפ הודעה עם המילה "RESET"
                      ואם אתם מרגישים שזה הזמן לאיפוס – בואו נעשה את זה יחד.
                    </p>
                    <p className="text-[18px] leading-8 spiritual-text mb-4">
                      👁‍🗨כי זה הזמן להפסיק לחוות כאב, פחד, פגיעות וחרדה –
                      ולהתחיל לחיות מתוך סיפוק, שמחה ושלווה. אז בואו ונתחיל את
                      המסע שלכם להצלחה
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RESET Contact Form */}
            <div className="mt-12">
              <ResetForm />
            </div>
          </div>
        </section>

        {/* RESET ME Course Section */}
        <section id="reset-me" className="section-y">
          <div className="container-max max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              🌟 קורס RESET ME – הכוח לרפא את עצמך בכל רגע קורס בסיס למטפלים
            </h2>

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
                    <span className="text-3xl">✨</span>
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text">
                        מה אם הייתם יכולים...
                      </h3>
                      <ul className="space-y-2 text-[16px] spiritual-text">
                        <li>
                          ✨ להרגיע את עצמכם לפני מבחן או ראיון עבודה מלחיץ
                        </li>
                        <li>✨ לשחרר כעס ותסכול מיד אחרי ריב או שיחה טעונה</li>
                        <li>✨ לעצור חרדה ברגע שהגוף מתכווץ והנשימה נתקעת</li>
                        <li>✨ לנקות עצב ישן שעולה בלי שליטה</li>
                      </ul>
                      <p className="text-[16px] spiritual-text mt-4">
                        במקום להיסחף – אתם יודעים איך לאפס את עצמכם ולחזור
                        לשלווה וביטחון.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💎</span>
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text">
                        איך זה עובד?
                      </h3>
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
                        <li>🔹 לאתר את הזיכרון שמעורר את הרגש</li>
                        <li>🔹 לשחרר את המטען האנרגטי מהגוף</li>
                        <li>🔹 ליצור איפוס תודעתי ותחושתי</li>
                        <li>
                          🔹 להטמיע במקומו קובץ חדש – ביטחון, שמחה, אהבה עצמית,
                          ערך עצמי, קלילות
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🌸</span>
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text">
                        למה דווקא RESET ME?
                      </h3>
                      <ul className="space-y-2 text-[16px] spiritual-text">
                        <li>❎ לא צריך לחפור בכאב</li>
                        <li>❎ לא צריך לשתף או להסביר</li>
                        <li>❎ לא עוד תהליך אין־סופי</li>
                      </ul>
                      <p className="text-[16px] spiritual-text mt-4">
                        במקום זה – כלי אישי שתמיד איתכם. בכל מקום. בכל זמן.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📍</span>
                    <div>
                      <h3 className="text-xl font-bold mb-3 gradient-text">
                        מה תרוויחו מהקורס?
                      </h3>
                      <ul className="space-y-2 text-[16px] spiritual-text">
                        <li>✔️ יכולת להרגיע את עצמכם מיידית</li>
                        <li>✔️ חופש מפחדים, חרדות, כעסים ותחושת חוסר אונים</li>
                        <li>✔️ שחרור תקיעויות ופתיחת זרימה חדשה לחיים</li>
                        <li>✔️ חיבור פנימי לשלווה, ביטחון ואהבה עצמית</li>
                      </ul>
                      <p className="text-[16px] spiritual-text mt-4">
                        📍 מסע של 6 שיעורים מעשיים לפחות – עם כלים שתוכלו ליישם
                        על כל רגש או תחושה שעולה. כבר מהשיעור הראשון תדעו איך
                        לעבוד עם עצמכם – ותוכלו לחזור על התהליך שוב ושוב.
                      </p>
                      <p className="text-[16px] spiritual-text mt-4">
                        💬 מרגישים שזה הזמן לאיפוס אמיתי? הצטרפו ל־RESET ME
                        ותגלו כמה כוח יש לכם – להחזיר לעצמכם את החירות הפנימית,
                        השליטה והשלווה.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a href="#contact-form" className="btn btn-primary">
                  הרשמה לקורס RESET ME
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Courses Section */}
        <section id="communication-course" className="section-y spiritual-bg">
          <div className="container-max max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              קורסי תקשור והתפתחות רוחנית
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* שלב א */}
              <div className="spiritual-card p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">🌟</span>
                  <h3 className="text-xl font-bold mb-4 gradient-text">
                    שלב א: קורס התפתחות אישית רוחנית
                  </h3>
                </div>
                <p className="spiritual-text mb-6">
                  קורס בסיסי שמעניק לך את היסודות להתפתחות רוחנית אישית. תלמד על
                  חיבור לעצמי הפנימי, עבודה עם אנרגיות, וכלים ראשוניים לתקשור.
                </p>
                <div className="text-center">
                  <a href="#contact-form" className="btn btn-secondary">
                    מידע נוסף
                  </a>
                </div>
              </div>

              {/* שלב ב */}
              <div className="spiritual-card p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">🔮</span>
                  <h3 className="text-xl font-bold mb-4 gradient-text">
                    שלב ב: קורס שחזור גלגולים
                  </h3>
                </div>
                <p className="spiritual-text mb-6">
                  קורס מתקדם שעוסק בגילוי וטיפול בדפוסים שמקורם בחיים קודמים.
                  תלמד טכניקות לשחזור גלגולים וטיפול בטראומות מהעבר.
                </p>
                <div className="text-center">
                  <a href="#contact-form" className="btn btn-secondary">
                    מידע נוסף
                  </a>
                </div>
              </div>

              {/* קורס למטפלים */}
              <div className="spiritual-card p-6">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-4 block">💎</span>
                  <h3 className="text-xl font-bold mb-4 gradient-text">
                    קורס RESET למטפלים
                  </h3>
                </div>
                <p className="spiritual-text mb-6">
                  קורס מקצועי למטפלים שרוצים ללמוד את שיטת RESET ולהשתמש בה
                  בעבודתם. כולל הכשרה מקצועית מלאה וליווי בהתחלת העבודה.
                </p>
                <div className="text-center">
                  <a href="#contact-form" className="btn btn-secondary">
                    מידע נוסף
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[18px] spiritual-text-on-dark mb-6">
                רוצים לדעת איזה קורס מתאים לכם? בואו נשוחח
              </p>
              <a href="#appointment" className="btn btn-primary">
                קביעת שיחת ייעוץ
              </a>
            </div>
          </div>
        </section>

        {/* Personal Reading Section */}
        <section id="personal-reading" className="section-y">
          <div className="container-max max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              הזמנת תקשור אישי
            </h2>

            <PersonalReadingForm />
          </div>
        </section>

        {/* Appointment Section */}
        <section id="appointment" className="section-y spiritual-bg">
          <div className="container-max max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              קביעת פגישה
            </h2>

            <AppointmentForm />
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="section-y">
          <div className="container-max max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              הבלוג שלי
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <div className="spiritual-card p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-[var(--lilac-1)] to-[var(--turquoise-1)] rounded-lg mb-4"></div>
                  <h3 className="text-lg font-bold mb-3 gradient-text">
                    מה זה תקשור ואיך זה עובד?
                  </h3>
                  <p className="spiritual-text text-sm mb-4">
                    הסבר מקיף על תקשור, איך זה עובד, ומה ההבדל בין תקשור אמיתי
                    לדמיון...
                  </p>
                </div>
                <a href="#" className="btn btn-ghost w-full">
                  קרא עוד
                </a>
              </div>

              {/* Blog Post 2 */}
              <div className="spiritual-card p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-[var(--turquoise-1)] to-[var(--gold-1)] rounded-lg mb-4"></div>
                  <h3 className="text-lg font-bold mb-3 gradient-text">
                    איך לשחרר טראומות מהעבר
                  </h3>
                  <p className="spiritual-text text-sm mb-4">
                    כלים פרקטיים לשחרור טראומות וזיכרונות כואבים, כולל תרגילים
                    שתוכל לעשות בבית...
                  </p>
                </div>
                <a href="#" className="btn btn-ghost w-full">
                  קרא עוד
                </a>
              </div>

              {/* Blog Post 3 */}
              <div className="spiritual-card p-6">
                <div className="mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-[var(--gold-1)] to-[var(--lilac-1)] rounded-lg mb-4"></div>
                  <h3 className="text-lg font-bold mb-3 gradient-text">
                    החיבור למדריכים הרוחניים
                  </h3>
                  <p className="spiritual-text text-sm mb-4">
                    איך להתחבר למדריכים הרוחניים שלך, לקבל הדרכה ולהבין את
                    המסרים...
                  </p>
                </div>
                <a href="#" className="btn btn-ghost w-full">
                  קרא עוד
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#" className="btn btn-primary">
                כל המאמרים
              </a>
            </div>
          </div>
        </section>

        {/* External Links Section */}
        <section className="section-y spiritual-bg">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 gold-text-on-dark">
              הצטרפו לקהילה שלי
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="https://www.facebook.com/groups/hila-communication"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                הצטרפו לקהילה – תקשור ומסרים מהמימד החמישי (18,000+ חברים)
              </a>
              <a
                href="https://www.youtube.com/@hila-communication"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                לצפייה בסרטונים ובמסרים החדשים
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="section-y">
          <div className="container-max max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-text-on-dark">
                בואו נתחיל לדבר – השאירו פרטים ואני חוזרת אליכם
              </h2>
              <p className="text-[18px] spiritual-text-on-dark opacity-70">
                אני כאן כדי לעזור לך להתחיל את המסע הרוחני שלך. השאר פרטים ואני
                אחזור אליך לשיחה ראשונית.
              </p>
            </div>

            <div className="spiritual-card p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--ink)] text-white py-12">
          <div className="container-max">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">הילה</h3>
                <p className="text-gray-300 mb-2">
                  מתקשרת ומטפלת רגשית עם כלים מתקדמים
                </p>
                <p className="text-gray-400">
                  תקשור, ריפוי ותהליכי RESET לשחרור רגשי והתפתחות תודעתית
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">ניווט</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[var(--lilac-1)] transition-colors"
                    >
                      אודות הילה
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reset"
                      className="hover:text-[var(--lilac-1)] transition-colors"
                    >
                      קורס RESET
                    </a>
                  </li>
                  <li>
                    <a
                      href="#communication-course"
                      className="hover:text-[var(--lilac-1)] transition-colors"
                    >
                      קורס תקשור
                    </a>
                  </li>
                  <li>
                    <a
                      href="#personal-reading"
                      className="hover:text-[var(--lilac-1)] transition-colors"
                    >
                      הזמנת תקשור אישי
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blog"
                      className="hover:text-[var(--lilac-1)] transition-colors"
                    >
                      בלוג
                    </a>
                  </li>
                  <li>
                    <a
                      href="#appointment"
                      className="hover:text-[var(--lilac-1)] transition-colors"
                    >
                      קביעת פגישה
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">קישורים לרשתות</h4>
                <div className="space-y-3">
                  <a
                    href="https://www.facebook.com/groups/hila-communication"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--lilac-1)] hover:opacity-80 transition-colors flex items-center justify-center md:justify-end gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    קבוצת פייסבוק
                  </a>
                  <a
                    href="https://www.youtube.com/@hila-communication"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--lilac-1)] hover:opacity-80 transition-colors flex items-center justify-center md:justify-end gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    ערוץ יוטיוב
                  </a>
                  <a
                    href="https://wa.me/972XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--lilac-1)] hover:opacity-80 transition-colors flex items-center justify-center md:justify-end gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 הילה - מתקשרת ומטפלת רגשית. כל הזכויות שמורות.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
