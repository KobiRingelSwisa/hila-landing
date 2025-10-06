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
