// نظام التعليقات بدون Firebase - يستخدم localStorage فقط

let currentOrder = "desc"; // desc = الأحدث أولاً, asc = الأقدم أولاً

// عناصر DOM
const commentsContainer = document.getElementById("commentsContainer");
const totalSpan = document.getElementById("totalComments");
const toastMsg = document.getElementById("toastMsg");
const commentInput = document.getElementById("commentInput");
const commentName = document.getElementById("commentName");
const publishBtn = document.getElementById("publishComment");
const whatsappBtn = document.getElementById("whatsappShare");
const copyLinkBtn = document.getElementById("copyLink");
const sortNewBtn = document.getElementById("sortNew");
const sortOldBtn = document.getElementById("sortOld");

// عرض رسالة منبثقة
function showMessage(text, isError = false) {
  toastMsg.innerText = text;
  toastMsg.style.display = "block";
  toastMsg.style.background = isError ? "#8b3a2acc" : "#1a4a3acc";
  setTimeout(() => {
    toastMsg.style.display = "none";
  }, 2500);
}

// تنسيق التاريخ
function formatDate(date) {
  if (!date) return "الآن";
  return new Date(date).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

// تنظيف النص
function safeText(text) {
  if (!text) return "";
  return text.replace(/[&<>]/g, (m) => {
    if (m === "&") return "&amp;";
    if (m === "<") return "&lt;";
    if (m === ">") return "&gt;";
    return m;
  });
}

// حفظ التعليقات في localStorage
function saveComments(comments) {
  localStorage.setItem("memorial_comments", JSON.stringify(comments));
}

// تحميل التعليقات من localStorage
function loadCommentsFromStorage() {
  const saved = localStorage.getItem("memorial_comments");
  if (saved) {
    return JSON.parse(saved);
  }
  // تعليقات تجريبية أول مرة
  return [
    {
      id: Date.now() + 1,
      userName: "أحمد",
      text: "رحم الله الفقيد همام، اللهم اغفر له وارحمه وأسكنه فسيح جناتك",
      timestamp: new Date(Date.now() - 86400000).toISOString()
    },
    {
      id: Date.now() + 2,
      userName: "نور",
      text: "إنا لله وإنا إليه راجعون. الله يرحمك يا همام ويجعل مثواك الجنة",
      timestamp: new Date(Date.now() - 172800000).toISOString()
    }
  ];
}

// عرض التعليقات في الصفحة
function displayComments() {
  const comments = loadCommentsFromStorage();
  
  // ترتيب التعليقات
  let sortedComments = [...comments];
  if (currentOrder === "desc") {
    sortedComments.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  } else {
    sortedComments.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  }
  
  totalSpan.innerText = comments.length;
  
  if (sortedComments.length === 0) {
    commentsContainer.innerHTML = '<div class="loading">🌿 لا توجد كلمات بعد، كن أول من يكتب دعاءً</div>';
    return;
  }
  
  commentsContainer.innerHTML = sortedComments.map(comment => `
    <div class="comment-card" data-id="${comment.id}">
      <div class="comment-header">
        <span class="commenter-name"><i class="fas fa-user-circle"></i> ${safeText(comment.userName)}</span>
        <span class="comment-date">${formatDate(comment.timestamp)}</span>
      </div>
      <div class="comment-body">${safeText(comment.text)}</div>
    </div>
  `).join("");
}

// إضافة تعليق جديد
function addNewComment() {
  const text = commentInput.value.trim();
  const name = commentName.value.trim();
  
  if (!text) {
    showMessage("✍️ اكتب كلمة طيبة للفقيد", true);
    return false;
  }
  
  const comments = loadCommentsFromStorage();
  
  const newComment = {
    id: Date.now(),
    userName: name || "زائر",
    text: text,
    timestamp: new Date().toISOString()
  };
  
  comments.push(newComment);
  saveComments(comments);
  
  // تفريغ الحقول
  commentInput.value = "";
  commentName.value = "";
  
  showMessage("✨ رحم الله الفقيد، شكراً لكلماتك");
  displayComments();
  return true;
}

// مشاركة واتساب
function shareWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("🤲 اللهم ارحم الشاب همام محمد الحاجي وأسكنه فسيح جناتك، شارك في الدعاء له.");
  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
}

// نسخ الرابط
async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
    const msgDiv = document.getElementById("copyMsg");
    if (msgDiv) {
      msgDiv.style.display = "block";
      setTimeout(() => msgDiv.style.display = "none", 1700);
    }
    showMessage("📎 تم نسخ الرابط");
  } catch (err) {
    showMessage("فشل النسخ", true);
  }
}

// تغيير الترتيب
function setOrder(order) {
  currentOrder = order;
  if (order === "desc") {
    sortNewBtn.classList.add("sort-active");
    sortOldBtn.classList.remove("sort-active");
  } else {
    sortOldBtn.classList.add("sort-active");
    sortNewBtn.classList.remove("sort-active");
  }
  displayComments();
}

// ربط الأحداث
publishBtn.addEventListener("click", addNewComment);

commentInput.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    addNewComment();
  }
});

whatsappBtn.addEventListener("click", shareWhatsApp);
copyLinkBtn.addEventListener("click", copyLink);
sortNewBtn.addEventListener("click", () => setOrder("desc"));
sortOldBtn.addEventListener("click", () => setOrder("asc"));

// عرض التعليقات عند تحميل الصفحة
displayComments();
