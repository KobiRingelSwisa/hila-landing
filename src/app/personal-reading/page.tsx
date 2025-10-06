"use client";

import { Header } from "@/components/Header";
import { PersonalReadingForm } from "@/components/PersonalReadingForm";

export default function PersonalReadingPage() {
  return (
    <>
      <main id="main" className="min-h-screen">
        <Header />

        {/* Personal Reading Section */}
        <section id="personal-reading" className="section-y mt-40">
          <div className="container-max max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 gold-text-on-dark">
              הזמנת תקשור אישי בכתב
            </h1>

            <div className="spiritual-card p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-xl spiritual-text mb-6">
                  קבלו מסרים אישיים ומדויקים מהמימדים הגבוהים וממדריכים רוחניים
                  שיובילו אתכם בדרך הנכונה.
                </p>
                <p className="text-lg spiritual-text">
                  התקשור האישי כולל מענה על שאלותיכם, הדרכה רוחנית, וכלים מעשיים
                  להתמודדות עם אתגרי החיים.
                </p>
              </div>

              <PersonalReadingForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
