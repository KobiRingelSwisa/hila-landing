"use client";

import Image from "next/image";
import { Header } from "@/components/Header";

export default function BlogPage() {
  return (
    <>
      <main id="main" className="min-h-screen">
        <Header />

        {/* Blog Section */}
        <section id="blog" className="section-y mt-40">
          <div className="container-max max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              הבלוג שלי – מסרים ותובנות
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Placeholder Blog Post 1 */}
              <div className="card p-6">
                <Image
                  src="/images/blog-placeholder-1.jpg"
                  alt="פוסט בבלוג"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 object-cover w-full h-48"
                />
                <h2 className="text-xl font-bold mb-2 spiritual-text">
                  התחברות לכוח הפנימי
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  גלו איך להתחבר לאינטואיציה שלכם ולמצוא את הכוח הפנימי שיוביל
                  אתכם בדרך.
                </p>

                <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-lg border border-gold-1/20">
                  <div className="space-y-2 text-[14px] leading-6 spiritual-text">
                    <p>
                      הכוח הפנימי אינו משהו שצריך "ליצור" – הוא כבר שם, מחכה
                      שתזכרו בו. זה הקול השקט שבתוככם שמנסה לדבר כבר זמן רב, אבל
                      הרעשים של העולם לעיתים חוסמים את הלחישה העדינה שלו.
                    </p>
                    <p>
                      כשאתם מתחילים לעצור, לנשום ולהקשיב – אתם מגלים שהכוח הזה
                      לא קשור לשליטה, אלא להקשבה. הוא לא נמדד בעשייה – אלא
                      בנוכחות.
                    </p>
                    <p>
                      התחברות אמיתית לעצמכם מתרחשת כשאתם מתחילים להאמין לעצמכם,
                      לא לקולות החיצוניים, אלא לידיעה הפנימית שאתם כבר יודעים.
                      שם, בדיוק שם, נמצא החופש.
                    </p>
                  </div>
                </div>
                <a href="#" className="btn btn-secondary btn-sm">
                  קרא עוד
                </a>
              </div>

              {/* Placeholder Blog Post 2 */}
              <div className="card p-6">
                <Image
                  src="/images/blog-placeholder-2.jpg"
                  alt="פוסט בבלוג"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 object-cover w-full h-48"
                />
                <h2 className="text-xl font-bold mb-2 spiritual-text">
                  שחרור חסימות רגשיות
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  למדו טכניקות פשוטות לשחרור רגשות תקועים ופתיחת הדרך לשפע.
                </p>

                <div className="mt-4 p-4 bg-gradient-to-r from-gold-1/10 to-gold-2/10 rounded-lg border border-gold-1/30">
                  <div className="space-y-2 text-[14px] leading-6 spiritual-text">
                    <p>
                      רגש שלא קיבל אהבה – נשאר תקוע בגוף, כמו דלת סגורה שחיכתה
                      שמישהו ייגע בה בעדינות. כשאנחנו נותנים לרגש מקום, בלי
                      להילחם בו, בלי לפחד ממנו – הוא מתחיל לנוע, ומתוך התנועה
                      נולד הריפוי.
                    </p>
                    <p>
                      שחרור רגשי הוא לא מאבק – הוא רכות. זה לדעת לומר "כן" גם
                      למה שכואב, ולראות איך מתחת לשכבות של פחד יש רק לב שרוצה
                      להרגיש שוב חופשי.
                    </p>
                    <p>
                      כשאנחנו מנקים את הערוצים האנרגטיים בגוף, אנחנו לא רק
                      משחררים כאב – אנחנו מפנים מקום לשפע, לאור, לנשימה חדשה.
                      היקום לא צריך "לתקן" אותך – הוא רק מחכה שתאפשר לעצמך לנשום
                      באמת.
                    </p>
                  </div>
                </div>
                <a href="#" className="btn btn-secondary btn-sm">
                  קרא עוד
                </a>
              </div>

              {/* Placeholder Blog Post 3 */}
              <div className="card p-6">
                <Image
                  src="/images/blog-placeholder-3.jpg"
                  alt="פוסט בבלוג"
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 object-cover w-full h-48"
                />
                <h2 className="text-xl font-bold mb-2 spiritual-text">
                  מסרים מהמימדים הגבוהים
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  התחברו למדריכים הרוחניים שלכם וקבלו מסרים מנחים לחייכם.
                </p>

                <div className="mt-4 p-4 bg-gradient-to-r from-purple-800/10 to-blue-800/10 rounded-lg border border-purple-400/30">
                  <div className="space-y-2 text-[14px] leading-6 spiritual-text">
                    <p>
                      כולנו מוקפים בהדרכה – כל הזמן. יש מי שקוראים להם
                      "מדריכים", "ישויות אור", "מלאכים", אבל למעשה מדובר בתדרים
                      של אהבה טהורה שמדברים עם הלב שלנו.
                    </p>
                    <p>
                      כשאנחנו פותחים את עצמנו לשמוע, אנחנו לא "ממציאים" מסרים –
                      אנחנו נזכרים. כל מילה שמגיעה משם נושאת עמה שקט, בהירות,
                      ואמת פשוטה. אין בה פחד, אין בה ביקורת, רק ידיעה רכה
                      שמכוונת אותך קדימה.
                    </p>
                    <p>
                      המסרים מהמימדים הגבוהים לעולם לא יגידו לך מי להיות – הם רק
                      יזכירו לך מי אתה כבר.
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-gold-1/10 to-gold-2/10 rounded-lg border border-gold-1/30">
                  <div className="space-y-2 text-[14px] leading-6 spiritual-text">
                    <p>
                      הבלוג הזה הוא לא רק מקום לקריאה – הוא מרחב של תדר. כל מילה
                      בו נכתבת מתוך הקשבה לשדה הרוחני, מתוך הכוונה להעביר אור,
                      בהירות ואמת.
                    </p>
                    <p>
                      אני מזמינה אותך לקרוא לאט, להרגיש, לעצור בין השורות,
                      ולאפשר למילים לגעת – לא רק בראש, אלא בלב.
                    </p>
                    <p>
                      כי כל מסר הוא מראה, וכל מילה יכולה להיות הצעד הראשון שלך
                      במסע חזרה אל עצמך.
                    </p>
                  </div>
                </div>
                <a href="#" className="btn btn-secondary btn-sm">
                  קרא עוד
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
