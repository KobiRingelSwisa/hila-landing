"use client";

import { useState } from "react";

export function ResetForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // כאן תוכל להוסיף שליחה לשרת או למייל
      // לדוגמה: await fetch('/api/reset-interest', { method: 'POST', body: JSON.stringify(formData) })

      // הדמיית שליחה
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);

      // שליחה ל-WhatsApp
      const whatsappMessage = `היי הילה, אני ${formData.name} ואני רוצה לשמוע על תהליך RESET אישי`;
      const whatsappUrl = `https://wa.me/972XXXXXXXXX?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // פתיחה ב-WhatsApp
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8">
        <div className="text-6xl mb-4">🌀</div>
        <h3 className="text-2xl font-bold mb-4 gradient-text">תודה רבה!</h3>
        <p className="spiritual-text mb-6">
          קיבלתי את הפרטים שלך ואחזור אליך בהקדם עם מידע נוסף על תהליך RESET.
        </p>
        <p className="text-sm spiritual-text opacity-70">
          נפתח עבורך חלון WhatsApp לשיחה ישירה איתי
        </p>
      </div>
    );
  }

  return (
    <div className="spiritual-card p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 gradient-text">
          רוצה לשמוע עוד על RESET?
        </h3>
        <p className="spiritual-text">
          השאר פרטים ואני אחזור אליך עם מידע מפורט על תהליך RESET 360° ואיך הוא
          יכול לעזור לך
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium spiritual-text mb-2"
          >
            שם מלא *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="הזן את שמך המלא"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium spiritual-text mb-2"
          >
            טלפון *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="050-1234567"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium spiritual-text mb-2"
          >
            אימייל *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your@email.com"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary text-lg px-8 py-4 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "שולח..." : "רוצה לשמוע עוד על RESET"}
          </button>
        </div>

        <div className="text-center text-sm spiritual-text opacity-70">
          <p>
            לחיצה על "רוצה לשמוע עוד על RESET" תפתח גם חלון WhatsApp לשיחה ישירה
            איתי
          </p>
        </div>
      </form>
    </div>
  );
}
