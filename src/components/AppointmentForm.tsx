"use client";

import { useState } from "react";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interests: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    "תקשור אישי",
    "טיפול רגשי בחרדות",
    "טיפול רגשי בטראומות",
    "RESET",
    "טיפול רגשי בפוביות",
    "משברים בזוגיות",
    "קריירה",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // כאן תוכל להוסיף שליחה למערכת CRM (Airtable, Google Sheets, Firebase)
      // לדוגמה: await fetch('/api/appointment', { method: 'POST', body: JSON.stringify(formData) })

      // הדמיית שליחה
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);

      // שליחה ל-WhatsApp
      const interestsText =
        formData.interests.length > 0
          ? formData.interests.join(", ")
          : "לא צוין";
      const whatsappMessage = `שלום הילה, אני ${formData.name} ואני מעוניין/ת לקבוע פגישה. הנושאים שמעניינים אותי: ${interestsText}`;
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
        <div className="text-6xl mb-4">🗓️</div>
        <h3 className="text-2xl font-bold mb-4 gradient-text">
          הפרטים נשלחו בהצלחה!
        </h3>
        <p className="spiritual-text mb-6">
          קיבלתי את הפרטים שלך ואחזור אליך בהקדם האפשרי לקביעת הפגישה.
        </p>
        <p className="text-sm spiritual-text opacity-70">
          נפתח עבורך חלון WhatsApp לשיחה ישירה איתי
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium spiritual-text-on-dark mb-2"
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
            className="block text-sm font-medium spiritual-text-on-dark mb-2"
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
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium spiritual-text-on-dark mb-2"
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

      <div>
        <label className="block text-sm font-medium spiritual-text-on-dark mb-3">
          במה אתה מעוניין? (ניתן לבחור מספר אפשרויות)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interestOptions.map((interest) => (
            <label
              key={interest}
              className="flex items-center space-x-2 space-x-reverse cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleInterestChange(interest)}
                className="w-4 h-4 text-[var(--lilac-1)] bg-gray-100 border-gray-300 rounded focus:ring-[var(--lilac-1)] focus:ring-2"
              />
              <span className="text-sm spiritual-text-on-dark">{interest}</span>
            </label>
          ))}
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
          {isSubmitting ? "שולח..." : "שלח פרטים לקביעת פגישה"}
        </button>
      </div>

      <div className="text-center text-sm spiritual-text-on-dark opacity-70">
        <p>לחיצה על "שלח פרטים" תפתח גם חלון WhatsApp לשיחה ישירה איתי</p>
      </div>
    </form>
  );
}
