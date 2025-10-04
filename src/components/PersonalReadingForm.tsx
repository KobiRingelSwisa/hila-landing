"use client";

import { useState } from "react";

export function PersonalReadingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    motherName: "",
    questions: "",
    readingType: "with-print" as "with-print" | "without-print",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // כאן תוכל להוסיף שליחה למערכת תשלומים (Grow Payment)
      // לדוגמה: await fetch('/api/payment', { method: 'POST', body: JSON.stringify(formData) })

      // הדמיית שליחה
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);

      // שליחה ל-WhatsApp עם פרטי ההזמנה
      const readingTypeText =
        formData.readingType === "with-print"
          ? "תקשור אישי עם הדפסה"
          : "תקשור אישי ללא הדפסה";
      const price = formData.readingType === "with-print" ? "300" : "250";
      const whatsappMessage = `שלום הילה, אני ${formData.fullName} ואני מעוניין/ת להזמין ${readingTypeText} במחיר ${price}₪. השאלות שלי: ${formData.questions}`;
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
        <div className="text-6xl mb-4">🔮</div>
        <h3 className="text-2xl font-bold mb-4 gradient-text">
          ההזמנה נשלחה בהצלחה!
        </h3>
        <p className="spiritual-text mb-6">
          קיבלתי את פרטי ההזמנה שלך. אחזור אליך בהקדם עם פרטי התשלום והזימון.
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
          הזמנת תקשור אישי
        </h3>
        <p className="spiritual-text">
          מלא את הפרטים הבאים כדי להזמין תקשור אישי מדויק ומקיף
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium spiritual-text mb-2"
            >
              שם מלא *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="הזן את שמך המלא"
            />
          </div>

          <div>
            <label
              htmlFor="motherName"
              className="block text-sm font-medium spiritual-text mb-2"
            >
              שם האם *
            </label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="הזן את שם אמך"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="questions"
            className="block text-sm font-medium spiritual-text mb-2"
          >
            שאלות שהלקוח רוצה לשאול *
          </label>
          <textarea
            id="questions"
            name="questions"
            value={formData.questions}
            onChange={handleChange}
            required
            className="form-textarea"
            placeholder="כתוב כאן את השאלות שאתה רוצה לשאול בתקשור. ככל שתהיה יותר ספציפי, התקשור יהיה יותר מדויק וממוקד..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium spiritual-text mb-3">
            סוג התקשור *
          </label>
          <div className="space-y-4">
            <label className="flex items-center space-x-3 space-x-reverse cursor-pointer p-4 border border-[var(--lilac-2)] rounded-lg hover:bg-[var(--lilac-3)] transition-colors">
              <input
                type="radio"
                name="readingType"
                value="with-print"
                checked={formData.readingType === "with-print"}
                onChange={handleChange}
                className="w-4 h-4 text-[var(--lilac-1)]"
              />
              <div className="flex-1">
                <div className="font-semibold spiritual-text">
                  תקשור אישי עם הדפסה
                </div>
                <div className="text-sm spiritual-text opacity-70">
                  תקשור מפורט עם הדפסה של המסרים והתובנות - ₪300
                </div>
              </div>
            </label>

            <label className="flex items-center space-x-3 space-x-reverse cursor-pointer p-4 border border-[var(--lilac-2)] rounded-lg hover:bg-[var(--lilac-3)] transition-colors">
              <input
                type="radio"
                name="readingType"
                value="without-print"
                checked={formData.readingType === "without-print"}
                onChange={handleChange}
                className="w-4 h-4 text-[var(--lilac-1)]"
              />
              <div className="flex-1">
                <div className="font-semibold spiritual-text">
                  תקשור אישי ללא הדפסה
                </div>
                <div className="text-sm spiritual-text opacity-70">
                  תקשור מפורט ללא הדפסה - ₪250
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary text-lg px-8 py-4 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting
              ? "מעבד..."
              : `המשך לתשלום - ₪${
                  formData.readingType === "with-print" ? "300" : "250"
                }`}
          </button>
        </div>

        <div className="text-center text-sm spiritual-text opacity-70">
          <p>לחיצה על "המשך לתשלום" תפתח גם חלון WhatsApp לשיחה ישירה איתי</p>
          <p className="mt-2">
            לאחר התשלום אקבל את כל הפרטים ואחזור אליך עם זימון לתקשור
          </p>
        </div>
      </form>
    </div>
  );
}
