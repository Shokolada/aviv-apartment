import Link from "next/link";

export const metadata = {
  title: "תנאי שימוש | יחידת דיור אביב",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[var(--color-primary)] hover:underline mb-8 inline-block">
          &larr; חזרה לעמוד הראשי
        </Link>
        <h1 className="text-3xl font-bold mb-8 text-[var(--color-primary-dark)]">תנאי שימוש</h1>
        <p className="text-gray-500 text-sm mb-8">עדכון אחרון: פברואר 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">1. כללי</h2>
            <p>
              ברוכים הבאים לאתר יחידת דיור אביב (להלן: &quot;האתר&quot;). השימוש באתר מהווה הסכמה לתנאי שימוש אלה.
              האתר מופעל לצורך הצגת מידע אודות יחידת דיור להשכרה ביישוב צופים.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">2. תוכן האתר</h2>
            <p>
              המידע המוצג באתר, לרבות תמונות, תיאורים ומחירים, נועד למטרות מידע בלבד ואינו מהווה הצעה מחייבת.
              פרטי הנכס, המחירים והתנאים עשויים להשתנות ויש לאמתם ישירות מול בעל הנכס.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">3. קניין רוחני</h2>
            <p>
              כל התכנים באתר, לרבות טקסטים, תמונות, עיצוב גרפי וקוד, מוגנים בזכויות יוצרים.
              אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתכני האתר ללא אישור בכתב מראש.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">4. קישורים חיצוניים</h2>
            <p>
              האתר עשוי לכלול קישורים לאתרים חיצוניים (כגון WhatsApp, Waze, Google Maps).
              איננו אחראים לתוכן, למדיניות הפרטיות או לפעילות של אתרים חיצוניים אלה.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">5. הגבלת אחריות</h2>
            <p>
              האתר מוצג כמות שהוא (&quot;AS IS&quot;). איננו מתחייבים שהאתר יפעל ללא תקלות או שהמידע יהיה מדויק ומעודכן בכל עת.
              לא נישא באחריות לכל נזק ישיר או עקיף הנובע מהשימוש באתר.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">6. שינויים בתנאים</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן תנאי שימוש אלה בכל עת. המשך השימוש באתר לאחר עדכון התנאים מהווה הסכמה לתנאים המעודכנים.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3">7. יצירת קשר</h2>
            <p>
              לכל שאלה בנוגע לתנאי השימוש, ניתן לפנות אלינו בטלפון 054-9444248 או דרך WhatsApp.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
