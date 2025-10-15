"use client";

import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";

export default function CommunicationCoursePage() {
  return (
    <>
      <main id="main" className="min-h-screen">
        <Header />

        {/* Communication Courses Section */}
        <section id="communication-course" className="section-y mt-40">
          <div className="container-max max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              קורסי תקשור והתפתחות רוחנית
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
              {/* שלב א */}
              <div className="spiritual-card p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold mb-4 gradient-text">
                    שלב א: קורס התפתחות אישית רוחנית
                  </h2>
                </div>
                <p className="spiritual-text mb-6">
                  קורס בסיסי שמעניק לך את היסודות להתפתחות רוחנית אישית. תלמד על
                  עקרונות התקשור, חיבור למדריכים רוחניים, ופיתוח האינטואיציה
                  הפנימית שלך.
                </p>

                <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/10 to-blue-900/10 rounded-lg border border-gold-1/20">
                  <div className="space-y-2 text-[14px] leading-6 spiritual-text">
                    <p>
                      בשלב הזה אנחנו מניחים את היסודות למסע אל עצמך. אתה לומד
                      להבחין בין הקול של המיינד לבין הקול של הנשמה, להקשיב לשקט
                      הפנימי – המקום שבו נמצאות כל התשובות.
                    </p>
                    <p>
                      זה לא רק ידע, זו דרך חיים. קורס ההתפתחות האישית הוא כמו
                      שער שבו אתה מתחיל לזהות את השפה של היקום: הסימנים, המסרים,
                      ההרגשות העדינות שמנחות אותך כל הזמן – אבל הפעם, אתה לומד
                      להקשיב להן באמת.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a href="#contact-form" className="btn btn-primary btn-sm">
                    לפרטים נוספים והרשמה
                  </a>
                </div>
              </div>

              {/* שלב ב */}
              <div className="spiritual-card p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold mb-4 gradient-text">
                    שלב ב: קורס שחזור גלגולים
                  </h2>
                </div>
                <p className="spiritual-text mb-6">
                  קורס מתקדם שעוסק בגילוי וטיפול בדפוסים שמקורם בחיים קודמים.
                  תלמד לזהות ולשחרר חסימות אנרגטיות ורגשיות שמשפיעות על חייך
                  הנוכחיים.
                </p>

                <div className="mt-4 p-4 bg-gradient-to-r from-gold-1/10 to-gold-2/10 rounded-lg border border-gold-1/30">
                  <div className="space-y-2 text-[14px] leading-6 spiritual-text">
                    <p>
                      כשאנחנו נולדים, אנחנו לא מתחילים מאפס – אנחנו ממשיכים מסע.
                      הנשמה נושאת איתה זיכרונות, רגשות ותובנות מחיים קודמים, והם
                      ממשיכים לפעול מתחת לפני השטח גם עכשיו.
                    </p>
                    <p>
                      בשחזור גלגולים, אנחנו לא "חופרים בעבר" – אנחנו מאירים עליו
                      אור. אנחנו פוגשים את המקומות שבהם נתקענו, ומאפשרים להם
                      סוף־סוף להשתחרר ולהתמוסס באהבה.
                    </p>
                    <p>
                      זה תהליך שמרגיש כמו להחזיר לעצמך חלקים אבודים של הנשמה
                      שלך. אחרי החוויה הזו – החיים מתחילים לזרום אחרת, עם בהירות
                      פנימית חדשה.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a href="#contact-form" className="btn btn-primary btn-sm">
                    לפרטים נוספים והרשמה
                  </a>
                </div>
              </div>

              {/* קורס למטפלים */}
              <div className="spiritual-card p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold mb-4 gradient-text">
                    קורס RESET למטפלים
                  </h2>
                </div>
                <p className="spiritual-text mb-6">
                  קורס מקצועי למטפלים שרוצים ללמוד את שיטת RESET ולהשתמש בה ככלי
                  טיפולי עוצמתי. הקורס כולל הכשרה מעמיקה וכלים מעשיים לשחרור
                  רגשי וריפוי.
                </p>
                <div className="text-center">
                  <a href="#contact-form" className="btn btn-primary btn-sm">
                    לפרטים נוספים והרשמה
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl spiritual-text-on-dark mb-6">
                רוצים לדעת איזה קורס מתאים לכם? בואו נשוחח
              </p>
              <a
                href="https://wa.me/972XXXXXXXXX?text=אני%20מעוניין/ת%20לשמוע%20על%20קורסי%20התקשור%20וההתפתחות%20הרוחנית"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-4"
              >
                שלחו הודעה בוואצאפ
              </a>
            </div>

            {/* Contact Form */}
            <div className="spiritual-card p-8 md:p-12 mt-12">
              <h2 className="text-2xl font-bold mb-6 gradient-text text-center">
                רוצים לשמוע עוד על הקורסים?
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
