// ==================== ملف script.js ====================

// ---------- بيانات التطبيقات ----------
const appsData = [
    {
        id: 1, name: 'واتساب بلس الذهبي', icon: '💬', category: 'social', tags: ['premium', 'new'], price: 29,
        description: 'واتساب بلس بميزات خفية وإخفاء الظهور وإرسال ملفات كبيرة وتخصيص كامل للواجهة.',
        features: ['إخفاء آخر ظهور', 'إرسال ملفات حتى 2 جيجا', 'ثيمات لا نهائية', 'قفل المحادثات ببصمة', 'مضاد الحظر التلقائي'],
        color: '#25D366'
    },
    {
        id: 2, name: 'يوتيوب بلس بريميوم', icon: '▶️', category: 'entertainment', tags: ['premium'], price: 39,
        description: 'يوتيوب بدون إعلانات مع تشغيل في الخلفية وتحميل الفيديوهات بجودة عالية.',
        features: ['بدون إعلانات نهائياً', 'تشغيل في الخلفية', 'تحميل فيديوهات 4K', 'تخطي الإعلانات المدمجة', 'وضع الصورة داخل الصورة'],
        color: '#FF0000'
    },
    {
        id: 3, name: 'انستقرام بلس', icon: '📸', category: 'social', tags: ['free', 'new'], price: 0,
        description: 'انستقرام بلس مع تحميل الصور والقصص وإخفاء المشاهدة وتكبير الصور.',
        features: ['تحميل الصور والفيديو', 'إخفاء مشاهدة القصص', 'تكبير صورة البروفايل', 'نسخ التعليقات', 'وضع الظلام الدائم'],
        color: '#E4405F'
    },
    {
        id: 4, name: 'تيك توك بلس', icon: '🎵', category: 'entertainment', tags: ['free'], price: 0,
        description: 'تيك توك بدون إعلانات مع تحميل الفيديوهات بدون علامة مائية وبجودة عالية.',
        features: ['تحميل بدون علامة مائية', 'بدون إعلانات', 'تخطي القيود الإقليمية', 'تحميل صوت الفيديو', 'مشاهدة بدون حساب'],
        color: '#69C9D0'
    },
    {
        id: 5, name: 'سناب شات بلس', icon: '👻', category: 'social', tags: ['premium'], price: 35,
        description: 'سناب شات بلس مع حفظ القصص وإخفاء المشاهدة وتخصيص الواجهة بالكامل.',
        features: ['حفظ القصص تلقائياً', 'إخفاء المشاهدة', 'رفع فيديو من الاستديو', 'تخصيص الألوان', 'مضاد اكتشاف التعديل'],
        color: '#FFFC00'
    },
    {
        id: 6, name: 'تويتر بلس X', icon: '🐦', category: 'social', tags: ['new'], price: 25,
        description: 'تويتر بلس مع تحميل الفيديوهات والصور بجودة عالية وإزالة الإعلانات.',
        features: ['تحميل فيديوهات 4K', 'إزالة الإعلانات', 'رؤية التغريدات المحذوفة', 'تخصيص الخطوط', 'وضع القراءة الليلي'],
        color: '#1DA1F2'
    },
    {
        id: 7, name: 'فيس بوك بلس', icon: '📘', category: 'social', tags: ['free'], price: 0,
        description: 'فيس بوك بدون إعلانات مع ميزات إضافية وتحكم كامل بالخصوصية.',
        features: ['إزالة الإعلانات', 'تحميل الفيديوهات', 'معرفة من زار بروفايلك', 'قفل التطبيق برمز', 'وضع خفي'],
        color: '#1877F2'
    },
    {
        id: 8, name: 'سبوتيفاي بلس', icon: '🎧', category: 'entertainment', tags: ['premium', 'new'], price: 45,
        description: 'سبوتيفاي بريميوم مجاني مع تخطي الأغاني بدون حدود وجودة صوت فائقة.',
        features: ['تخطي لا نهائي', 'جودة صوت 320 كيلوبت', 'بدون إعلانات', 'تحميل الأغاني', 'استيراد قوائم التشغيل'],
        color: '#1DB954'
    },
    {
        id: 9, name: 'شات جي بي تي بلس', icon: '🤖', category: 'tools', tags: ['premium'], price: 55,
        description: 'مساعد ذكي متقدم مع نماذج متعددة واستجابة سريعة بدون حدود استخدام.',
        features: ['نماذج GPT-4 و GPT-5', 'بدون حدود استخدام', 'رفع ملفات وصور', 'محادثات غير محدودة', 'ذاكرة طويلة المدى'],
        color: '#74AA9C'
    },
    {
        id: 10, name: 'أدوات المطور بلس', icon: '🛠️', category: 'tools', tags: ['free'], price: 0,
        description: 'مجموعة أدوات للمطورين تشمل محرر أكواد ومتصفح عناصر وتصحيح أخطاء.',
        features: ['محرر HTML/CSS/JS', 'متصفح عناصر', 'كونسول جافاسكريبت', 'فحص API', 'محول صيغ'],
        color: '#F7DF1E'
    },
    {
        id: 11, name: 'ببجي موبايل بلس', icon: '🎮', category: 'games', tags: ['premium', 'new'], price: 60,
        description: 'نسخة مطورة من ببجي مع تحسين رسومات وثبات فريمات وإعدادات احترافية.',
        features: ['ثبات 120 فريم', 'رسومات HDR محسنة', 'حساسية احترافية', 'بدون تهنيج', 'دعم جميع الأجهزة'],
        color: '#F39C12'
    },
    {
        id: 12, name: 'فورتنايت بلس', icon: '🏗️', category: 'games', tags: ['premium'], price: 65,
        description: 'فورتنايت بلس مع سكنات مجانية وتجربة لعب سلسة على جميع الأجهزة.',
        features: ['سكنات مجانية', 'فريمات ثابتة', 'جرافيك محسن', 'مضاد بان', 'تحديثات سريعة'],
        color: '#9B59B6'
    }
];

// ---------- حالة التطبيق ----------
let cart = [];
let currentCategory = 'all';
let currentFilter = 'all';
let searchQuery = '';
let orders = []; // لتخزين الطلبات (مركز استلام الطلبات)

// ---------- عناصر DOM ----------
const appsGrid = document.getElementById('appsGrid');
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const detailModal = document.getElementById('detailModal');
const closeDetail = document.getElementById('closeDetail');
const detailTitle = document.getElementById('detailTitle');
const detailBody = document.getElementById('detailBody');
const searchInput = document.getElementById('searchInput');
const filterChips = document.getElementById('filterChips');
const navLinks = document.getElementById('navLinks');
const noResults = document.getElementById('noResults');
const totalAppsSpan = document.getElementById('totalApps');
const toast = document.getElementById('toast');
const menuToggle = document.getElementById('menuToggle');
const header = document.getElementById('header');

// عناصر الدفع
const paymentModal = document.getElementById('paymentModal');
const closePayment = document.getElementById('closePayment');
const paymentForm = document.getElementById('paymentForm');
const custCountry = document.getElementById('custCountry');
const paymentMethodGroup = document.getElementById('paymentMethodGroup');
const paymentMethods = document.getElementById('paymentMethods');
const paymentDetailsGroup = document.getElementById('paymentDetailsGroup');
const paymentDetailsInput = document.getElementById('paymentDetailsInput');
const paymentDetailsLabel = document.getElementById('paymentDetailsLabel');
const paymentCartSummary = document.getElementById('paymentCartSummary');

// عناصر طلبات المالك
const ordersModal = document.getElementById('ordersModal');
const closeOrders = document.getElementById('closeOrders');
const ordersList = document.getElementById('ordersList');
const adminBtn = document.getElementById('adminBtn');

// ---------- دوال مساعدة ----------
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => { toast.classList.remove('show'); }, 2500);
}

function updateCartCount() {
    const count = cart.length;
    cartCount.textContent = count;
    if (count > 0) cartCount.classList.add('show');
    else cartCount.classList.remove('show');
}

function formatPrice(price) {
    return price === 0 ? 'مجاني' : price + ' ر.س';
}

function isInCart(appId) {
    return cart.some(item => item.id === appId);
}

// ---------- تصفية التطبيقات ----------
function getFilteredApps() {
    let filtered = [...appsData];
    if (currentCategory !== 'all') filtered = filtered.filter(app => app.category === currentCategory);
    if (currentFilter === 'premium') filtered = filtered.filter(app => app.tags.includes('premium'));
    else if (currentFilter === 'free') filtered = filtered.filter(app => app.price === 0);
    else if (currentFilter === 'new') filtered = filtered.filter(app => app.tags.includes('new'));
    if (searchQuery.trim() !== '') {
        const q = searchQuery.trim().toLowerCase();
        filtered = filtered.filter(app => app.name.toLowerCase().includes(q) || app.description.toLowerCase().includes(q) || app.category.toLowerCase().includes(q));
    }
    return filtered;
}

// ---------- عرض البطاقات ----------
function renderApps() {
    const filtered = getFilteredApps();
    appsGrid.innerHTML = '';
    noResults.style.display = filtered.length === 0 ? 'block' : 'none';

    filtered.forEach((app, index) => {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.style.animationDelay = `${index * 0.06}s`;

        let badgeHTML = '';
        if (app.tags.includes('premium')) badgeHTML = '<span class="card-badge badge-premium">مميز</span>';
        else if (app.tags.includes('new')) badgeHTML = '<span class="card-badge badge-new">جديد</span>';
        if (app.price === 0) badgeHTML += '<span class="card-badge badge-free" style="' + (badgeHTML ? 'left:70px;' : '') + '">مجاني</span>';

        const inCart = isInCart(app.id);
        card.innerHTML = `
            ${badgeHTML}
            <div class="app-icon" style="background:${app.color}22; color:${app.color};">${app.icon}</div>
            <h3>${app.name}</h3>
            <p class="card-desc">${app.description}</p>
            <div class="card-footer">
                <span class="price ${app.price === 0 ? 'free' : ''}">${formatPrice(app.price)}</span>
                <button class="btn-add ${inCart ? 'in-cart' : ''}" data-id="${app.id}">${inCart ? '✓ بالسلة' : '🛒 إضافة'}</button>
            </div>
        `;
        card.addEventListener('click', (e) => { if (!e.target.classList.contains('btn-add')) openDetail(app); });
        appsGrid.appendChild(card);
    });

    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleCartItem(parseInt(btn.dataset.id), btn);
        });
    });
}

// ---------- السلة ----------
function toggleCartItem(appId, buttonElement) {
    const app = appsData.find(a => a.id === appId);
    if (!app) return;
    if (isInCart(appId)) {
        cart = cart.filter(item => item.id !== appId);
        if (buttonElement) { buttonElement.textContent = '🛒 إضافة'; buttonElement.classList.remove('in-cart'); }
        showToast('🗑️ تمت إزالة التطبيق من السلة');
    } else {
        cart.push({ ...app });
        if (buttonElement) { buttonElement.textContent = '✓ بالسلة'; buttonElement.classList.add('in-cart'); }
        showToast('✅ تمت إضافة التطبيق إلى السلة');
    }
    updateCartCount();
    renderCartItems();
    renderApps();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">السلة فارغة حالياً</p>';
        cartFooter.style.display = 'none';
    } else {
        cartFooter.style.display = 'block';
        let total = 0;
        cartItems.innerHTML = cart.map(item => {
            total += item.price;
            return `<div class="cart-item">
                <span class="cart-item-icon">${item.icon}</span>
                <div class="cart-item-info"><h4>${item.name}</h4><span class="price ${item.price === 0 ? 'free' : ''}">${formatPrice(item.price)}</span></div>
                <button class="btn-remove" data-id="${item.id}" title="إزالة">🗑️</button>
            </div>`;
        }).join('');
        totalPrice.textContent = total === 0 ? 'مجاني' : total + ' ر.س';
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                cart = cart.filter(item => item.id !== parseInt(btn.dataset.id));
                updateCartCount(); renderCartItems(); renderApps();
                showToast('🗑️ تمت إزالة التطبيق من السلة');
            });
        });
    }
}

// ---------- المودالات الأساسية ----------
function openCartModal() { renderCartItems(); cartModal.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeCartModal() { cartModal.classList.remove('active'); document.body.style.overflow = ''; }
function openDetail(app) {
    detailTitle.textContent = app.name;
    detailBody.innerHTML = `
        <div class="detail-icon" style="color:${app.color};">${app.icon}</div>
        <p class="detail-desc">${app.description}</p>
        <ul class="detail-features">${app.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <div class="detail-price-large ${app.price === 0 ? 'free' : ''}">${formatPrice(app.price)}</div>
        <button class="checkout-btn" id="detailAddBtn" data-id="${app.id}">${isInCart(app.id) ? '✓ بالسلة - إزالة' : '🛒 أضف إلى السلة'}</button>
    `;
    detailModal.classList.add('active'); document.body.style.overflow = 'hidden';
    document.getElementById('detailAddBtn').addEventListener('click', function() {
        toggleCartItem(parseInt(this.dataset.id));
        closeDetailModal();
    });
}
function closeDetailModal() { detailModal.classList.remove('active'); document.body.style.overflow = ''; }

// ---------- مودال الدفع ----------
function openPaymentModal() {
    if (cart.length === 0) return;
    // إعداد ملخص العربة
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    paymentCartSummary.innerHTML = `<strong>الطلب:</strong> ${cart.map(i => i.name).join('، ')} - الإجمالي: ${formatPrice(total)}`;
    // إعادة تعيين الحقول
    document.getElementById('custName').value = '';
    document.getElementById('custPhone').value = '';
    custCountry.value = '';
    paymentMethodGroup.style.display = 'none';
    paymentDetailsGroup.style.display = 'none';
    paymentMethods.innerHTML = '';
    document.querySelectorAll('.payment-method-option').forEach(o => o.classList.remove('selected'));
    paymentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePaymentModal() {
    paymentModal.classList.remove('active');
    document.body.style.overflow = '';
}

// تحديث طرق الدفع حسب الدولة
custCountry.addEventListener('change', function() {
    const country = this.value;
    paymentMethodGroup.style.display = 'block';
    paymentMethods.innerHTML = '';
    if (country === 'syria') {
        addPaymentMethod('شام كاش', 'shamcash');
    } else if (country === 'saudi') {
        addPaymentMethod('STC Pay', 'stcpay');
        addPaymentMethod('تحويل بنكي', 'bank');
    } else if (country === 'other') {
        addPaymentMethod('باينانس', 'binance');
    }
    // إخفاء تفاصيل إضافية حتى اختيار طريقة
    paymentDetailsGroup.style.display = 'none';
    document.querySelectorAll('.payment-method-option').forEach(o => o.classList.remove('selected'));
});

function addPaymentMethod(name, value) {
    const div = document.createElement('div');
    div.className = 'payment-method-option';
    div.textContent = name;
    div.dataset.method = value;
    div.addEventListener('click', function() {
        document.querySelectorAll('.payment-method-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
        // إظهار حقل تفاصيل إضافية حسب الطريقة
        paymentDetailsGroup.style.display = 'block';
        if (value === 'shamcash') {
            paymentDetailsLabel.textContent = 'رقم شام كاش أو اسم المستخدم';
            paymentDetailsInput.placeholder = 'أدخل رقم شام كاش الخاص بك';
        } else if (value === 'stcpay') {
            paymentDetailsLabel.textContent = 'رقم STC Pay';
            paymentDetailsInput.placeholder = 'أدخل رقم STC Pay';
        } else if (value === 'bank') {
            paymentDetailsLabel.textContent = 'اسم البنك ورقم الحساب';
            paymentDetailsInput.placeholder = 'مثال: الأهلي - SA123...';
        } else if (value === 'binance') {
            paymentDetailsLabel.textContent = 'بريد باينانس أو ID';
            paymentDetailsInput.placeholder = 'أدخل بريدك أو معرف باينانس';
        }
    });
    paymentMethods.appendChild(div);
}

// معالجة تقديم نموذج الدفع
paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const country = custCountry.value;
    const selectedMethod = document.querySelector('.payment-method-option.selected');
    if (!name || !phone || !country || !selectedMethod) {
        showToast('⚠️ يرجى إكمال جميع الحقول واختيار طريقة الدفع');
        return;
    }
    const method = selectedMethod.dataset.method;
    const details = paymentDetailsInput.value.trim();
    if (!details) {
        showToast('⚠️ يرجى إدخال تفاصيل الدفع');
        return;
    }

    // إنشاء الطلب وحفظه
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const order = {
        id: Date.now(),
        date: new Date().toLocaleString('ar-SA'),
        customer: name,
        phone: phone,
        country: country,
        paymentMethod: selectedMethod.textContent,
        paymentDetails: details,
        items: [...cart],
        total: total
    };
    orders.push(order);
    
    // تفريغ السلة
    cart = [];
    updateCartCount();
    renderCartItems();
    renderApps();
    
    // إغلاق المودالات
    closePaymentModal();
    closeCartModal();
    
    showToast('✅ تم استلام طلبك بنجاح! سيتواصل معك مالك المتجر قريباً (محاكاة)');
});

// ---------- مودال طلبات المالك ----------
function renderOrdersList() {
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="empty-cart">لا توجد طلبات حتى الآن</p>';
        return;
    }
    ordersList.innerHTML = orders.slice().reverse().map(order => `
        <div class="order-card">
            <p><strong>رقم الطلب:</strong> ${order.id}</p>
            <p><strong>التاريخ:</strong> ${order.date}</p>
            <p><strong>العميل:</strong> ${order.customer} - ${order.phone}</p>
            <p><strong>الدولة:</strong> ${order.country} | <strong>الدفع:</strong> ${order.paymentMethod} (${order.paymentDetails})</p>
            <p class="order-apps"><strong>التطبيقات:</strong> ${order.items.map(i => i.name).join('، ')}</p>
            <p><strong>الإجمالي:</strong> ${formatPrice(order.total)}</p>
        </div>
    `).join('');
}

function openOrdersModal() {
    renderOrdersList();
    ordersModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrdersModal() {
    ordersModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ---------- مستمعو الأحداث ----------
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    closeCartModal();
    openPaymentModal();
});
cartBtn.addEventListener('click', openCartModal);
closeCart.addEventListener('click', closeCartModal);
cartModal.addEventListener('click', (e) => { if (e.target === cartModal) closeCartModal(); });
closeDetail.addEventListener('click', closeDetailModal);
detailModal.addEventListener('click', (e) => { if (e.target === detailModal) closeDetailModal(); });
closePayment.addEventListener('click', closePaymentModal);
paymentModal.addEventListener('click', (e) => { if (e.target === paymentModal) closePaymentModal(); });
adminBtn.addEventListener('click', openOrdersModal);
closeOrders.addEventListener('click', closeOrdersModal);
ordersModal.addEventListener('click', (e) => { if (e.target === ordersModal) closeOrdersModal(); });

searchInput.addEventListener('input', (e) => { searchQuery = e.target.value; renderApps(); });
filterChips.addEventListener('click', (e) => {
    if (e.target.classList.contains('chip')) {
        document.querySelectorAll('#filterChips .chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderApps();
    }
});
navLinks.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderApps();
    }
});
menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCartModal(); closeDetailModal(); closePaymentModal(); closeOrdersModal();
    }
});

// ---------- تهيئة ----------
function init() {
    updateCartCount();
    renderApps();
    totalAppsSpan.textContent = appsData.length;
}
init();
