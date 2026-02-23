import Link from "next/link";

export const metadata = {
  title: "מדיניות פרטיות | יחידת דיור אביב",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[var(--color-primary)] hover:underline mb-8 inline-block">
          &larr; חזרה לעמוד הראשי
        </Link>
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-primary-dark)]">מדיניות פרטיות</h1>
        <p className="text-gray-500 text-sm mb-8">עדכון אחרון: פברואר 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. כללי</h2>
            <p>
              מדיניות פרטיות זו מתארת כיצד אתר יחידת דיור אביב (להלן: &quot;האתר&quot;) אוסף, משתמש ומגן על מידע.
              אנו מכבדים את פרטיותכם ומחויבים להגן על המידע האישי שלכם.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. מידע שאנו אוספים</h2>
            <p>
              האתר הוא אתר תדמיתי סטטי ואינו אוסף מידע אישי באופן ישיר.
              איננו משתמשים בטפסים, רישום משתמשים או מערכות מעקב.
              פנייה אלינו דרך WhatsApp או טלפון מתבצעת ישירות דרך השירותים החיצוניים הללו.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. עוגיות (Cookies)</h2>
            <p>
              האתר עשוי להשתמש בעוגיות טכניות בסיסיות הנדרשות לפעולתו התקינה.
              איננו משתמשים בעוגיות למטרות פרסום או מעקב.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. שירותי צד שלישי</h2>
            <p>
              האתר כולל קישורים ושירותים של צד שלישי, כולל:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Google Maps – להצגת מפות ומיקום הנכס</li>
              <li>WhatsApp – ליצירת קשר ישירה</li>
              <li>Waze – לניווט אל הנכס</li>
            </ul>
            <p className="mt-2">
              שירותים אלה כפופים למדיניות הפרטיות שלהם ואיננו אחראים לאופן שבו הם מנהלים מידע.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">5. אבטחת מידע</h2>
            <p>
              האתר מאובטח באמצעות פרוטוקול HTTPS להצפנת התקשורת.
              אנו נוקטים באמצעים סבירים להגנה על האתר ועל המידע המוצג בו.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">6. שינויים במדיניות</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן מדיניות זו מעת לעת.
              שינויים מהותיים יפורסמו בעמוד זה עם תאריך עדכון חדש.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">7. יצירת קשר</h2>
            <p>
              לכל שאלה בנוגע למדיניות הפרטיות, ניתן לפנות אלינו בטלפון 054-9444248 או דרך WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
