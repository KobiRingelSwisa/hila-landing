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
              </div>

              <AppointmentForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
