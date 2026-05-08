// ==================================================
// 1. أداة تحليل المشاعر (تعمل محلياً)
// ==================================================
const sentimentInput = document.getElementById('sentimentInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const sentimentResult = document.getElementById('sentimentResult');

function analyzeSentiment(text) {
    if (!text.trim()) return "✏️ اكتب نصاً أولاً ليتم تحليله";
    const positiveWords = ['جميل', 'رائع', 'حلو', 'ممتاز', 'سعيد', 'أحب', 'شكراً', 'رائعة', 'أفضل', 'مبهر', 'خرافي', 'عظيم'];
    const negativeWords = ['سيء', 'حزين', 'بائس', 'فظيع', 'ممل', 'أكره', 'غبي', 'مخيب', 'خطأ', 'ملل', 'تعبان'];
    let score = 0;
    positiveWords.forEach(word => {
        if (text.includes(word)) score++;
    });
    negativeWords.forEach(word => {
        if (text.includes(word)) score--;
    });
    if (score > 0) return '😊 إيجابي 🌟 (عبارة مليئة بالطاقة الإيجابية)';
    if (score < 0) return '😞 سلبي 🍂 (يمكن تحسينها بتفاؤل أكبر)';
    return '😐 محايد (ضع مشاعر أقوى للحصول على تحليل دقيق)';
}

if (analyzeBtn) {
    analyzeBtn.onclick = () => {
        const text = sentimentInput ? sentimentInput.value : '';
        const result = analyzeSentiment(text);
        if (sentimentResult) {
            sentimentResult.innerHTML = `<i class="fas fa-chart-simple"></i> <span>${result}</span>`;
        }
    };
}

// ==================================================
// 2. أداة توليد نكات عشوائية (مكتبة داخلية)
// ==================================================
const generateJokeBtn = document.getElementById('generateJokeBtn');
const jokeResultSpan = document.getElementById('jokeResult');

const jokesLibrary = [
    "🚀 لما الذكاء الاصطناعي يحبك: يقول لك 'أنت إنسان رائع' مع إنه ما عنده مشاعر!",
    "🧠 البرمجة مثل الصلاة: لو ما ركزت فيها، بتضيع منك الأجر (والسطر)!",
    "🐱‍👤 سألت الذكاء الاصطناعي: وش أفضل نظام؟ قال: 'أنت لما تكون مبسوط'.",
    "💻 المبرمج الوحيد اللي يقدر ينام ساعة ويصحى يشتغل على شاشة سودة يحبها.",
    "🐧 Linux مثل سيارة قديمة: تحتاج تعرف تصلحها عشان تستمتع فيها.",
    "⚡ من نكت الذكاء الاصطناعي: 'ليش الحاسوب دافئ؟ لأنه يسخن من كثر الشغل'",
    "🎮 التصميم الجميل للوحة تحكم: يخلي المستخدم يحس إنه طيار قبل لا يضغط زر.",
    "😂 الذكاء الاصطناعي نكتة: 'وش الفرق بين المبرمج والقهوة؟ القهوة تشتغل بدون bugs'",
    "🎯 سألوا الذكاء الاصطناعي: وش أسعد لحظة في حياتك؟ قال: يوم ما أحد قال لي invalid syntax."
];

if (generateJokeBtn && jokeResultSpan) {
    generateJokeBtn.onclick = () => {
        const randomIndex = Math.floor(Math.random() * jokesLibrary.length);
        const joke = jokesLibrary[randomIndex];
        jokeResultSpan.innerHTML = `<i class="fas fa-face-grin-tongue-squint"></i> <span>${joke}</span>`;
    };
}

// ==================================================
// 3. أداة اقتراح أسماء إبداعية
// ==================================================
const nameContextInput = document.getElementById('nameContext');
const suggestBtn = document.getElementById('suggestBtn');
const namesResultDiv = document.getElementById('namesResult');

const databaseNames = {
    'شركة تقنية': ['تك ويف', 'كود دريم', 'داينو تك', 'بيت البرمجيات', 'سمارت ويب', 'أفق تك'],
    'مطعم': ['سُفرة', 'طعم الأصالة', 'درة المذاق', 'فود تريت', 'ليالي الأكل', 'ذوق الريف'],
    'متجر أزياء': ['قمرة', 'ستايل فاخر', 'لولو فاشون', 'نسائم', 'روح الأناقة'],
    'طفل ولد': ['جود', 'وسيم', 'خالد', 'ليث', 'آدم', 'يحيى', 'حمزة', 'سيف'],
    'طفلة بنت': ['نور', 'سلمى', 'جوري', 'لين', 'ميرال', 'رهف', 'تالا', 'جمانة'],
    'مشروع خيري': ['نور الأمل', 'عون', 'بداية', 'يد العون', 'الخير جار', 'سند الخير'],
    'شركة تسويق': ['واصل', 'إنجاز', 'ريتش', 'بصمة تسويق', 'استراتيجي', 'قمة الإبداع']
};

function getIdeaFromContext(context) {
    const inputLower = context.toLowerCase();
    if (inputLower.includes('تكنولوجيا') || inputLower.includes('برمجة') || inputLower.includes('تقنية')) 
        return databaseNames['شركة تقنية'];
    if (inputLower.includes('مطعم') || inputLower.includes('أكل') || inputLower.includes('طعام')) 
        return databaseNames['مطعم'];
    if (inputLower.includes('ازياء') || inputLower.includes('موضة') || inputLower.includes('فاشون')) 
        return databaseNames['متجر أزياء'];
    if (inputLower.includes('ولد') || inputLower.includes('ذكر') || inputLower.includes('ابن')) 
        return databaseNames['طفل ولد'];
    if (inputLower.includes('بنت') || inputLower.includes('انثى') || inputLower.includes('طفلة')) 
        return databaseNames['طفلة بنت'];
    if (inputLower.includes('خير') || inputLower.includes('تبرع') || inputLower.includes('وقف')) 
        return databaseNames['مشروع خيري'];
    if (inputLower.includes('تسويق') || inputLower.includes('اعلانات')) 
        return databaseNames['شركة تسويق'];
    return ['مبدع', 'أثير', 'زاخر', 'باهر', 'آسِر', 'فذ', 'ريادة', 'تألق'];
}

if (suggestBtn && nameContextInput && namesResultDiv) {
    suggestBtn.onclick = () => {
        let ctx = nameContextInput.value.trim();
        if (!ctx) {
            namesResultDiv.innerHTML = `<i class="fas fa-info-circle"></i> <span>📝 اكتب مجالاً مثل: شركة تقنية، مطعم، مشروع خيري، طفلة بنت...</span>`;
            return;
        }
        const suggestions = getIdeaFromContext(ctx);
        const formatted = suggestions.map(s => `✨ ${s}`).join(' · ');
        namesResultDiv.innerHTML = `<i class="fas fa-lightbulb"></i> <span>${formatted}</span>`;
    };
}

// ==================================================
// 4. مؤثر حركة الضوء (Aura effect)
// ==================================================
const cursorAura = document.querySelector('.cursor-aura');
if (cursorAura) {
    document.addEventListener('mousemove', (e) => {
        cursorAura.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
}

// ==================================================
// 5. نسخ رقم واتساب (خاصية التواصل)
// ==================================================
function copyNumber(phoneNumber) {
    navigator.clipboard.writeText(phoneNumber).then(() => {
        alert(`✅ تم نسخ الرقم: ${phoneNumber}`);
    }).catch(() => {
        alert("❌ فشل النسخ، حاول يدوياً.");
    });
}

// ==================================================
// 6. دالة التمرير السلس للأقسام (للأزرار)
// ==================================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ==================================================
// 7. تفعيل الروابط في شريط التنقل (اختياري)
// ==================================================
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// ==================================================
// 8. إضافة تأثير النشاط (active) للروابط حسب التمرير
// ==================================================
window.addEventListener('scroll', () => {
    const sections = ['home', 'sentiment', 'jokes', 'names'];
    let current = '';
    for (let s of sections) {
        const element = document.getElementById(s);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                current = s;
                break;
            }
        }
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
