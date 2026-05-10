import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxwDtepeCvth9pGAi-9Xih6y7upxbcthM",
  authDomain: "asdhaji-262a2.firebaseapp.com",
  projectId: "asdhaji-262a2",
  storageBucket: "asdhaji-262a2.firebasestorage.app",
  messagingSenderId: "846773778896",
  appId: "1:846773778896:web:623355876a381182e8e1d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let currentOrder = "desc";
let unsub = null;

const commentsContainer = document.getElementById("commentsContainer");
const totalSpan = document.getElementById("totalComments");
const toastMsg = document.getElementById("toastMsg");
const commentInput = document.getElementById("commentInput");
const commentName = document.getElementById("commentName");
const publishBtn = document.getElementById("publishComment");

const showToast = (text, isError = false) => {
  toastMsg.innerText = text;
  toastMsg.style.display = "block";
  toastMsg.style.background = isError ? "#5a2a1acc" : "#0e1f24cc";
  setTimeout(() => toastMsg.style.display = "none", 2300);
};

const formatDate = (date) => {
  if (!date) return "";
  return date.toLocaleDateString("ar-EG", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
};

const escapeHtml = (str) => {
  if (!str) return "";
  return str.replace(/[&<>]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[m]));
};

const loadComments = () => {
  if (unsub) unsub();
  const q = query(collection(db, "comments"), orderBy("timestamp", currentOrder));
  commentsContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-pulse"></i> يتحمّل الذكريات...</div>';
  
  unsub = onSnapshot(q, (snap) => {
    let comments = [];
    snap.forEach(doc => comments.push({ id: doc.id, ...doc.data() }));
    totalSpan.innerText = comments.length;
    
    if (comments.length === 0) {
      commentsContainer.innerHTML = '<div class="loading">🌿 لا توجد كلمات بعد، كن أول من يكتب دعاءً</div>';
      return;
    }
    
    commentsContainer.innerHTML = comments.map(c => `
      <div class="comment-card" data-id="${c.id}">
        <div class="comment-header">
          <span class="commenter-name"><i class="fas fa-user-circle"></i> ${escapeHtml(c.userName || "زائر")}</span>
          <span class="comment-date">${formatDate(c.timestamp?.toDate())}</span>
        </div>
        <div class="comment-body">${escapeHtml(c.text)}</div>
      </div>
    `).join("");
  }, (err) => {
    console.warn(err);
    commentsContainer.innerHTML = '<div class="loading">⚠️ خطأ في التحميل</div>';
  });
};

const addNewComment = async (text, name) => {
  if (!text.trim()) { 
    showToast("✍️ اكتب كلمة طيبة للفقيد", true); 
    return false; 
  }
  
  try {
    await addDoc(collection(db, "comments"), {
      text: text.trim(),
      userName: name.trim() || "زائر",
      timestamp: new Date()
    });
    commentInput.value = "";
    if (commentName) commentName.value = "";
    showToast("✨ رحم الله الفقيد، شكراً لكلماتك");
    return true;
  } catch (err) {
    showToast("فشل الإرسال: " + err.message, true);
    return false;
  }
};

publishBtn.addEventListener("click", () => {
  addNewComment(commentInput.value, commentName ? commentName.value : "");
});

commentInput.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    addNewComment(commentInput.value, commentName ? commentName.value : "");
  }
});

document.getElementById("whatsappShare").addEventListener("click", () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("🤲 اللهم ارحم الشاب همام محمد الحاجي وأسكنه فسيح جناتك، شارك في الدعاء له.");
  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
});

document.getElementById("copyLink").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    const msgDiv = document.getElementById("copyMsg");
    msgDiv.style.display = "block";
    setTimeout(() => msgDiv.style.display = "none", 1700);
    showToast("📎 تم نسخ الرابط");
  } catch (err) {
    showToast("فشل النسخ", true);
  }
});

const sortNew = document.getElementById("sortNew");
const sortOld = document.getElementById("sortOld");

sortNew.addEventListener("click", () => {
  currentOrder = "desc";
  sortNew.classList.add("sort-active");
  sortOld.classList.remove("sort-active");
  loadComments();
});

sortOld.addEventListener("click", () => {
  currentOrder = "asc";
  sortOld.classList.add("sort-active");
  sortNew.classList.remove("sort-active");
  loadComments();
});

loadComments();
