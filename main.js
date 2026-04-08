// ==================== PRODUCTS DATABASE ====================
let products = [
    {
        id: 1,
        name: 'Vở Ô Ly 200 Trang',
        price: 25000,
        originalPrice: 35000,
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m12mf2966g7zde_tn',
        rating: 4.8,
        reviews: 245,
        category: 'Sách & Vở',
        description: 'Vở ô ly chất lượng cao, giấy trắng mịn, không loá mắt',
        quantity: 100,
        variants: [
            {name: 'Bìa mềm', price: 25000},
            {name: 'Bìa cứng', price: 35000}
        ]
    },
    {
        id: 2,
        name: 'Bút Bi 0.5mm',
        price: 2000,
        originalPrice: 3500,
        image: 'https://via.placeholder.com/200x200?text=Bút+Bi',
        rating: 4.7,
        reviews: 512,
        category: 'Bút & Bộ sưu tập',
        description: 'Bút bi viết mượt, chống tràn',
        quantity: 120,
        variants: [
            {name: 'Màu xanh', price: 2000},
            {name: 'Màu đen', price: 2000},
            {name: 'Màu đỏ', price: 2500}
        ]
    },
    {
        id: 3,
        name: 'Bộ Thước Kẻ 4 Cái',
        price: 15000,
        originalPrice: 25000,
        image: 'https://via.placeholder.com/200x200?text=Bộ+Thước',
        rating: 4.6,
        reviews: 189,
        category: 'Dụng cụ vẽ',
        description: 'Bộ 4 chiếc thước kẻ từ 15cm đến 50cm, chất liệu nhựa cứng',
        quantity: 80
    },
    {
        id: 4,
        name: 'Bút Chì HB 2B Staedtler',
        price: 18000,
        originalPrice: 28000,
        image: 'https://via.placeholder.com/200x200?text=Bút+Chì',
        rating: 4.9,
        reviews: 356,
        category: 'Bút & Bộ sưu tập',
        description: 'Bút chì chuyên nghiệp, mùi hương tự nhiên',
        quantity: 140
    },
    {
        id: 5,
        name: 'Bộ Màu Nước 12 Màu',
        price: 35000,
        originalPrice: 55000,
        image: 'https://via.placeholder.com/200x200?text=Màu+Nước',
        rating: 4.5,
        reviews: 267,
        category: 'Dụng cụ vẽ',
        description: 'Bộ châu màu nước 12 màu chuyên dùng cho vẽ tranh',
        quantity: 90
    },
    {
        id: 6,
        name: 'Sách Hóa Học 11',
        price: 45000,
        originalPrice: 65000,
        image: 'https://via.placeholder.com/200x200?text=Sách+Hóa',
        rating: 4.7,
        reviews: 178,
        category: 'Sách & Vở',
        description: 'Sách giáo khoa Hóa Học lớp 11 với hình ảnh minh họa sắc nét',
        quantity: 70
    },
    {
        id: 7,
        name: 'Balo Học Sinh Ergonomic',
        price: 120000,
        originalPrice: 180000,
        image: 'https://via.placeholder.com/200x200?text=Balo',
        rating: 4.8,
        reviews: 423,
        category: 'Công nghệ học tập',
        description: 'Balo học sinh với thiết kế ergonomic, nhiều ngăn, chống nước',
        quantity: 65
    },
    {
        id: 8,
        name: 'Máy Tính Cầm Tay Casio',
        price: 285000,
        originalPrice: 399000,
        image: 'https://via.placeholder.com/200x200?text=Máy+Tính',
        rating: 4.9,
        reviews: 512,
        category: 'Công nghệ học tập',
        description: 'Máy tính cầm tay Casio FX-580VN, 417 chức năng',
        quantity: 50
    },
    {
        id: 9,
        name: 'Bìa Carton Màu',
        price: 12000,
        originalPrice: 18000,
        image: 'https://via.placeholder.com/200x200?text=Bìa+Carton',
        rating: 4.4,
        reviews: 134,
        category: 'Sách & Vở',
        description: 'Bìa carton A4 nhiều màu, bền và dễ sử dụng',
        quantity: 130
    },
    {
        id: 10,
        name: 'Bộ Gel Pen 5 Màu',
        price: 28000,
        originalPrice: 42000,
        image: 'https://via.placeholder.com/200x200?text=Gel+Pen',
        rating: 4.6,
        reviews: 289,
        category: 'Bút & Bộ sưu tập',
        description: 'Bộ bút gel 5 màu, mực nhanh khô, viết mượt mà',
        quantity: 75
    },
    {
        id: 11,
        name: 'Tập Giấy A4 500 Tờ',
        price: 35000,
        originalPrice: 50000,
        image: 'https://via.placeholder.com/200x200?text=Giấy+A4',
        rating: 4.7,
        reviews: 401,
        category: 'Sách & Vở',
        description: 'Giấy A4 80gsm màu trắng tinh khôi, không loá mắt',
        quantity: 180
    },
    {
        id: 12,
        name: 'Kính Lúp 10x',
        price: 45000,
        originalPrice: 68000,
        image: 'https://via.placeholder.com/200x200?text=Kính+Lúp',
        rating: 4.5,
        reviews: 156,
        category: 'Dụng cụ vẽ',
        description: 'Kính lúp công nghệ, độ phóng đại 10x, thích hợp cho học tập',
        quantity: 95
    }
];

// ==================== STATE MANAGEMENT ====================
let cart = [];
let currentUser = null;
let filteredProducts = [...products];
let orders = [];
let orderStatusFilter = 'all';
let adminOrderFilter = 'all';
let editingProductId = null;
let detailProductId = null;
let appliedVoucher = null;

// Voucher codes
const VOUCHERS = {
    'SHIPFREE': { type: 'shipping', value: 100, minOrder: 150000 },
    'DISCOUNT10': { type: 'percent', value: 10, maxDiscount: 50000 },
    'SAVE20K': { type: 'fixed', value: 20000, minOrder: 200000 }
};

// Admin account
const ADMIN_EMAIL = 'hien2008';
const ADMIN_PASSWORD = '123456';

// ==================== LOCAL STORAGE ====================
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    cart = savedCart ? JSON.parse(savedCart) : [];
    updateCartCount();
}

function saveUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;
}

function loadUser() {
    const savedUser = localStorage.getItem('currentUser');
    currentUser = savedUser ? JSON.parse(savedUser) : null;
}

// ==================== ORDERS FUNCTIONS ====================
function loadOrders() {
    const savedOrders = localStorage.getItem('orders');
    orders = savedOrders ? JSON.parse(savedOrders) : [];
}

function saveOrders() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

function loadProducts() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    }

    // Ensure mỗi sản phẩm có thuộc tính quantity để tránh lỗi phiên bản cũ
    products = products.map(product => ({
        quantity: product.quantity !== undefined ? product.quantity : 0,
        ...product
    }));
}

function openOrdersModal() {
    if (!currentUser) {
        openLoginModal();
        return;
    }
    document.getElementById('ordersModal').classList.add('active');
    renderOrders();
}

function closeOrdersModal() {
    document.getElementById('ordersModal').classList.remove('active');
}

function filterOrders(status) {
    orderStatusFilter = status;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    renderOrders();
}

function renderOrders() {
    const ordersList = document.getElementById('ordersList');
    let filteredOrders = orders.filter(order => order.customer.email === currentUser.email);
    
    if (orderStatusFilter !== 'all') {
        filteredOrders = filteredOrders.filter(order => order.status === orderStatusFilter);
    }

    if (filteredOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="order-empty">
                <i class="fas fa-inbox"></i>
                <p>Bạn chưa có đơn hàng nào</p>
            </div>
        `;
        return;
    }

    ordersList.innerHTML = filteredOrders.map(order => {
        const statusText = getStatusText(order.status);
        const statusClass = `status-${order.status}`;
        const steps = ['pending', 'confirmed', 'shipping', 'delivering', 'delivered'];
        const currentStep = steps.indexOf(order.status);

        return `
            <div class="order-card">
                <div class="order-header">
                    <span class="order-id">Đơn hàng #${order.id}</span>
                    <span class="order-status ${statusClass}">${statusText}</span>
                </div>

                <div class="order-timeline">
                    ${steps.map((step, index) => `
                        <div class="timeline-step ${index <= currentStep ? 'completed' : ''}">
                            <div class="timeline-dot">${index + 1}</div>
                            <div class="timeline-label">${getStepLabel(step)}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="order-info">
                    <div class="info-item">
                        <span class="info-label">Khách hàng</span>
                        <span class="info-value">${order.customer.name}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Ngày đặt</span>
                        <span class="info-value">${order.date}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Địa chỉ</span>
                        <span class="info-value">${order.customer.address}, ${order.customer.district}, ${order.customer.city}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Tổng tiền</span>
                        <span class="info-value" style="font-weight: bold; color: var(--primary-color);">₫${formatPrice(order.total)}</span>
                    </div>
                </div>

                <div class="order-items">
                    <strong>Sản phẩm (${order.items.length}):</strong>
                    ${order.items.map((item, itemIndex) => `
                        <div class="order-product-item">
                            <div class="order-product-header">
                                <span>${item.name} x${item.quantity}</span>
                                <span>₫${formatPrice(item.price)}</span>
                            </div>
                            ${order.status === 'delivered' ? `
                                ${item.rating ? `
                                    <div class="review-result">Bạn đã đánh giá: ${item.rating}★</div>
                                ` : `
                                    <div class="order-rate-actions">
                                        <span>Đánh giá:</span>
                                        <div class="order-rating-stars">
                                            ${[1,2,3,4,5].map(score => `
                                                <button type="button" class="star-btn" onclick="submitOrderItemRating('${order.id}', ${itemIndex}, ${score})">☆</button>
                                            `).join('')}
                                        </div>
                                    </div>
                                    <div class="review-note">Chỉ đánh giá sau khi đơn hàng đã nhận.</div>
                                `}
                            ` : `
                                ${item.rating ? `<div class="review-result">Đã đánh giá: ${item.rating}★</div>` : ''}
                            `}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function getStatusText(status) {
    const statusMap = {
        'pending': 'Chờ xác nhận',
        'confirmed': 'Đã xác nhận',
        'shipping': 'Đang gửi',
        'delivering': 'Đang giao',
        'delivered': 'Đã giao'
    };
    return statusMap[status] || status;
}

function getStepLabel(step) {
    const labels = {
        'pending': 'Chờ xác nhận',
        'confirmed': 'Đã xác nhận',
        'shipping': 'Đang gửi',
        'delivering': 'Đang giao',
        'delivered': 'Đã giao'
    };
    return labels[step] || step;
}

// ==================== ADMIN FUNCTIONS ====================
function openAdminModal() {
    if (!currentUser || currentUser.role !== 'admin') {
        alert('Bạn không có quyền truy cập');
        return;
    }
    document.getElementById('adminModal').classList.add('active');
    renderAdminDashboard();
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.remove('active');
}

function adminFilterOrders(status) {
    adminOrderFilter = status;
    document.querySelectorAll('.admin-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    renderAdminOrdersList();
}

function renderAdminDashboard() {
    // Update stats
    document.getElementById('totalOrders').textContent = orders.length;
    document.getElementById('pendingOrders').textContent = orders.filter(o => o.status === 'confirmed').length;
    document.getElementById('totalProducts').textContent = products.length;
    
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    document.getElementById('totalRevenue').textContent = '₫' + formatPrice(totalRevenue);
    
    renderAdminOrdersList();
}

function renderAdminOrdersList() {
    const adminOrdersList = document.getElementById('adminOrdersList');
    let filteredOrders = orders;
    
    if (adminOrderFilter !== 'all') {
        filteredOrders = orders.filter(order => order.status === adminOrderFilter);
    }

    if (filteredOrders.length === 0) {
        adminOrdersList.innerHTML = `<div style="text-align: center; padding: 40px; color: #999;">Không có đơn hàng</div>`;
        return;
    }

    adminOrdersList.innerHTML = filteredOrders.map((order, index) => {
        const statusMap = {
            'confirmed': 'Đã xác nhận',
            'shipping': 'Đang gửi',
            'delivering': 'Đang giao',
            'delivered': 'Đã giao'
        };
        
        return `
            <div class="admin-order-card">
                <div class="admin-order-header">
                    <div>
                        <div class="admin-order-id">#${order.id}</div>
                        <div class="admin-order-customer">${order.customer.name} | ${order.customer.phone}</div>
                    </div>
                    <div class="admin-order-actions">
                        <select class="status-selector" id="status-${index}">
                            <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Đã xác nhận</option>
                            <option value="shipping" ${order.status === 'shipping' ? 'selected' : ''}>Đang gửi</option>
                            <option value="delivering" ${order.status === 'delivering' ? 'selected' : ''}>Đang giao</option>
                            <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Đã giao</option>
                        </select>
                        <button class="btn-update-status" onclick="updateOrderStatus(${index})">Cập nhật</button>
                    </div>
                </div>

                <div class="admin-order-info">
                    <div class="admin-info-item">
                        <span class="admin-info-label">Địa chỉ</span>
                        <span class="admin-info-value">${order.customer.address}, ${order.customer.district}, ${order.customer.city}</span>
                    </div>
                    <div class="admin-info-item">
                        <span class="admin-info-label">Ngày đặt</span>
                        <span class="admin-info-value">${order.date}</span>
                    </div>
                    <div class="admin-info-item">
                        <span class="admin-info-label">Phương thức</span>
                        <span class="admin-info-value">${getPaymentMethodName(order.payment)}</span>
                    </div>
                    <div class="admin-info-item">
                        <span class="admin-info-label">Tổng tiền</span>
                        <span class="admin-info-value" style="font-weight: bold; color: var(--primary-color);">₫${formatPrice(order.total)}</span>
                    </div>
                </div>

                <div class="admin-order-items">
                    <strong>Sản phẩm:</strong>
                    <div>${order.items.map(item => `${item.name} x${item.quantity} - ₫${formatPrice(item.price * item.quantity)}`).join(' | ')}</div>
                </div>
            </div>
        `;
    }).join('');
}

function updateOrderStatus(orderIndex) {
    const newStatus = document.getElementById(`status-${orderIndex}`).value;
    orders[orderIndex].status = newStatus;
    saveOrders();
    showSuccessMessage('✓ Cập nhật trạng thái đơn hàng thành công');
    renderAdminDashboard();
}

// ==================== ADMIN PRODUCT MANAGEMENT ====================
function switchAdminTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Add active to clicked button
    event.target.classList.add('active');
    
    // If products tab, render products
    if (tabName === 'products') {
        renderAdminProducts();
    }
}

function openAddProductForm() {
    editingProductId = null;
    document.getElementById('formTitle').textContent = 'Thêm sản phẩm mới';
    document.getElementById('productName').value = '';
    document.getElementById('productCategory').value = '';
    document.getElementById('productOriginalPrice').value = '';
    document.getElementById('productDiscount').value = '0';
    document.getElementById('productPrice').value = '';
    document.getElementById('productImage').value = '';
    document.getElementById('productRating').value = '';
    document.getElementById('productReviews').value = '';
    document.getElementById('productStock').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('variantsContainer').innerHTML = '';
    document.getElementById('submitProductBtn').textContent = 'Lưu sản phẩm';
    document.getElementById('productForm').style.display = 'block';

    // Add event listeners for price calculation
    setupPriceCalculation();
}

function setupPriceCalculation() {
    const originalPriceInput = document.getElementById('productOriginalPrice');
    const discountInput = document.getElementById('productDiscount');
    const priceInput = document.getElementById('productPrice');

    const calculatePrice = () => {
        const originalPrice = parseFloat(originalPriceInput.value) || 0;
        const discount = parseFloat(discountInput.value) || 0;
        const calculatedPrice = originalPrice * (1 - discount / 100);
        priceInput.value = calculatedPrice > 0 ? Math.round(calculatedPrice) : '';
    };

    originalPriceInput.addEventListener('input', calculatePrice);
    discountInput.addEventListener('input', calculatePrice);
}

function cancelProductForm() {
    document.getElementById('productForm').style.display = 'none';
    editingProductId = null;
    // Clear variants
    document.getElementById('variantsContainer').innerHTML = '';
    // Clear discount
    document.getElementById('productDiscount').value = '0';
}

function saveProduct() {
    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('productCategory').value;
    const originalPrice = parseFloat(document.getElementById('productOriginalPrice').value);
    const discount = parseFloat(document.getElementById('productDiscount').value) || 0;
    const price = parseFloat(document.getElementById('productPrice').value) || originalPrice;
    const image = document.getElementById('productImage').value.trim();
    const rating = parseFloat(document.getElementById('productRating').value);
    const reviews = parseInt(document.getElementById('productReviews').value);
    const quantity = parseInt(document.getElementById('productStock').value);
    const description = document.getElementById('productDescription').value.trim();

    // Collect variants
    const variantFields = document.querySelectorAll('.variant-field');
    const variants = [];
    variantFields.forEach(field => {
        const name = field.querySelector('.variant-name').value.trim();
        let price = parseFloat(field.querySelector('.variant-price').value);
        if (name) {
            if (isNaN(price) || price <= 0) {
                price = product.price; // Use main price if not set
            }
            variants.push({name, price});
        }
    });

    // Validation
    if (!name || !category || !originalPrice || !image || !rating || reviews === undefined || !description || isNaN(quantity)) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc');
        return;
    }

    if (quantity < 0) {
        alert('Số lượng tồn kho phải lớn hơn hoặc bằng 0');
        return;
    }

    if (discount < 0 || discount > 100) {
        alert('Giảm giá phải từ 0 đến 100%');
        return;
    }

    if (price > originalPrice) {
        alert('Giá bán không được cao hơn giá gốc');
        return;
    }

    if (rating < 0 || rating > 5) {
        alert('Đánh giá phải từ 0 đến 5');
        return;
    }

    if (editingProductId) {
        // Edit existing product
        const productIndex = products.findIndex(p => p.id === editingProductId);
        if (productIndex !== -1) {
            products[productIndex] = {
                ...products[productIndex],
                name,
                category,
                price,
                originalPrice,
                image,
                rating,
                reviews,
                quantity,
                description,
                variants: variants.length ? variants : undefined
            };
            showSuccessMessage('✓ Cập nhật sản phẩm thành công');
        }
    } else {
        // Add new product
        const newId = Math.max(...products.map(p => p.id), 0) + 1;
        products.push({
            id: newId,
            name,
            category,
            price,
            originalPrice,
            image,
            rating,
            reviews,
            quantity,
            description,
            variants: variants.length ? variants : undefined
        });
        showSuccessMessage('✓ Thêm sản phẩm thành công');
    }

    saveProducts();
    cancelProductForm();
    renderAdminProducts();
    renderProducts(); // Update main product display
}

function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    editingProductId = productId;
    document.getElementById('formTitle').textContent = 'Chỉnh sửa sản phẩm';
    document.getElementById('productName').value = product.name;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productOriginalPrice').value = product.originalPrice;
    const discountPercent = product.originalPrice > product.price ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    document.getElementById('productDiscount').value = discountPercent;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productReviews').value = product.reviews;
    document.getElementById('productStock').value = product.quantity;
    document.getElementById('productDescription').value = product.description;
    
    // Clear existing variants
    document.getElementById('variantsContainer').innerHTML = '';
    // Add existing variants or default based on category
    if (product.variants && product.variants.length > 0) {
        product.variants.forEach(variant => {
            addVariantField(variant.name, variant.price);
        });
    } else {
        // Add default variants based on category
        const defaultVariants = getDefaultVariantsForCategory(product.category);
        defaultVariants.forEach(variant => {
            addVariantField(variant.name, variant.price || product.price);
        });
    }
    
    document.getElementById('submitProductBtn').textContent = 'Cập nhật sản phẩm';
    document.getElementById('productForm').style.display = 'block';

    // Setup price calculation
    setupPriceCalculation();
}

function deleteProduct(productId) {
    if (confirm('Bạn chắc chắn muốn xóa sản phẩm này?')) {
        products = products.filter(p => p.id !== productId);
        saveProducts();
        showSuccessMessage('✓ Xóa sản phẩm thành công');
        renderAdminProducts();
        renderProducts(); // Update main product display
    }
}

function renderAdminProducts() {
    const productsList = document.getElementById('adminProductsList');
    
    if (products.length === 0) {
        productsList.innerHTML = `
            <div class="product-empty">
                <i class="fas fa-box"></i>
                <p>Chưa có sản phẩm nào</p>
            </div>
        `;
        return;
    }

    productsList.innerHTML = products.map(product => `
        <div class="admin-product-card">
            <div class="admin-product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/100?text=No+Image'">
            </div>
            <div class="admin-product-info">
                <div class="admin-product-name">${product.name}</div>
                <div class="admin-product-category">${product.category}</div>
                <div class="admin-product-prices">
                    <span class="price-sale">₫${formatPrice(product.price)}</span>
                    <span class="price-original">₫${formatPrice(product.originalPrice)}</span>
                </div>
                <div class="admin-product-stock">
                    Số lượng: <strong>${product.quantity}</strong>
                </div>
                <div class="admin-product-rating">
                    ⭐ ${product.rating} (${product.reviews} bình luận)
                </div>
            </div>
            <div class="admin-product-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})" title="Chỉnh sửa">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})" title="Xóa">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// ==================== PRODUCT FUNCTIONS ====================
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Không tìm thấy sản phẩm</div>';
        return;
    }

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" onclick="viewProductDetail(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                
                <div class="product-rating">
                    <span class="rating-stars">★★★★★</span>
                    <span>(${product.reviews})</span>
                </div>

                <div class="product-price">
                    <span class="price-current">₫${formatPrice(product.price)}</span>
                    <span class="price-original">₫${formatPrice(product.originalPrice)}</span>
                    <span class="product-discount">${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                </div>
                <div class="product-stock ${product.quantity === 0 ? 'out-of-stock' : ''}">
                    ${product.quantity === 0 ? 'Hết hàng' : `Còn lại: ${product.quantity}`}
                </div>
                <div class="product-actions">
                    <button class="btn-buy-now" ${product.quantity === 0 ? 'disabled' : ''} onclick="event.stopPropagation(); buyNow(${product.id})">Mua ngay</button>
                    <button class="btn-add-cart" ${product.quantity === 0 ? 'disabled' : ''} onclick="event.stopPropagation(); addToCart(${product.id})">${product.quantity === 0 ? 'Hết hàng' : 'Thêm giỏ'}</button>
                </div>
            </div>
        </div>
    `).join('');
}

function viewProductDetail(productId) {
    openProductDetailModal(productId);
}

const SHOP_INFO = {
    name: 'HọcTậpShop',
    rating: 4.9,
    followers: '3.5k người theo dõi',
    policy: 'Đổi trả trong 7 ngày nếu sản phẩm lỗi.'
};

function openProductDetailModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    detailProductId = productId;

    const images = product.images && product.images.length ? product.images : [product.image];
    const detailImage = document.getElementById('detailImage');
    detailImage.src = images[0];
    detailImage.alt = product.name;
    detailImage.classList.remove('zoomed'); // Reset zoom state
    detailImage.onclick = toggleImageZoom;
    document.getElementById('detailThumbnails').innerHTML = images.map(url => `
        <button type="button" class="detail-thumb-btn" onclick="selectDetailImage('${url}')">
            <img src="${url}" alt="${product.name}">
        </button>
    `).join('');

    detailSelectedVariant = product.variants && product.variants.length ? product.variants[0].name : '';
    const currentPrice = product.variants && product.variants.length ? product.variants[0].price : product.price;
    const currentOriginalPrice = product.variants && product.variants.length ? product.variants[0].price : product.originalPrice;
    document.getElementById('detailName').textContent = product.name;
    document.getElementById('detailBadge').textContent = product.quantity === 0 ? 'Hết hàng' : 'Yêu thích';
    document.getElementById('detailCategory').textContent = product.category;
    document.getElementById('detailReviews').textContent = `(${product.reviews} đánh giá)`;
    document.getElementById('detailSold').textContent = `Đã bán ${product.sold ?? Math.max(20, Math.floor(product.reviews * 3))} sản phẩm`;
    const shippingCost = product.shippingCost !== undefined ? product.shippingCost : 0;
    document.getElementById('detailShipping').textContent = `Giao hàng ${product.deliveryTime || '1-3 ngày'} · ${shippingCost === 0 ? 'Miễn phí ship' : `Phí ship ₫${formatPrice(shippingCost)}`}`;
    document.getElementById('detailPrice').textContent = `₫${formatPrice(currentPrice)}`;
    document.getElementById('detailOriginalPrice').textContent = currentOriginalPrice > currentPrice ? `₫${formatPrice(currentOriginalPrice)}` : '';
    document.getElementById('detailDiscount').textContent = currentOriginalPrice > currentPrice ? `${Math.round((1 - currentPrice / currentOriginalPrice) * 100)}%` : '';
    document.getElementById('detailStock').textContent = product.quantity === 0 ? 'Hiện tại đã hết hàng' : `Còn lại: ${product.quantity} sản phẩm`;
    document.getElementById('detailDescription').textContent = product.description;
    document.getElementById('detailSKU').textContent = `STH-${String(product.id).padStart(4, '0')}`;
    document.getElementById('detailShopName').textContent = SHOP_INFO.name;
    document.getElementById('detailShopRating').textContent = SHOP_INFO.rating;
    document.getElementById('detailShopFollowers').textContent = SHOP_INFO.followers;
    document.getElementById('detailShopPolicy').textContent = SHOP_INFO.policy;

    const highlights = getProductHighlights(product);
    document.getElementById('detailHighlights').innerHTML = highlights.map(item => `<li>${item}</li>`).join('');

    const variants = getDetailVariants(product);
    document.getElementById('detailVariants').innerHTML = variants.length ? `
        <label class="detail-variant-label">Chọn phiên bản:</label>
        <div class="variant-buttons">
            ${variants.map(variant => `<button type="button" class="variant-btn${variant === detailSelectedVariant ? ' active' : ''}" onclick="selectProductVariant('${variant}')">${variant}</button>`).join('')}
        </div>
    ` : '';

    const addButton = document.getElementById('detailAddCartBtn');
    addButton.disabled = product.quantity === 0;
    addButton.textContent = product.quantity === 0 ? 'Hết hàng' : 'Thêm vào giỏ';

    document.getElementById('productDetailModal').classList.add('active');
}

function selectDetailImage(url) {
    const image = document.getElementById('detailImage');
    const container = image.parentElement;
    image.src = url;
    image.classList.remove('zoomed');
    container.classList.remove('zoomed-container');
}

function toggleImageZoom() {
    const image = document.getElementById('detailImage');
    const container = image.parentElement;
    image.classList.toggle('zoomed');
    container.classList.toggle('zoomed-container');
}

let detailSelectedVariant = '';

function selectProductVariant(variantName) {
    detailSelectedVariant = variantName;
    document.querySelectorAll('.variant-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === variantName);
    });
    // Update price
    const product = products.find(p => p.id === detailProductId);
    if (product && product.variants) {
        const selectedVariant = product.variants.find(v => v.name === variantName);
        if (selectedVariant) {
            document.getElementById('detailPrice').textContent = `₫${formatPrice(selectedVariant.price)}`;
            // For simplicity, assume original price is the same or higher
            document.getElementById('detailOriginalPrice').textContent = selectedVariant.price < product.originalPrice ? `₫${formatPrice(product.originalPrice)}` : '';
            document.getElementById('detailDiscount').textContent = selectedVariant.price < product.originalPrice ? `${Math.round((1 - selectedVariant.price / product.originalPrice) * 100)}%` : '';
        }
    }
}

function addVariantField(name = '', price = '') {
    const container = document.getElementById('variantsContainer');
    const variantDiv = document.createElement('div');
    variantDiv.className = 'variant-field';
    variantDiv.innerHTML = `
        <input type="text" placeholder="Tên phiên bản" value="${name}" class="variant-name">
        <input type="number" placeholder="Giá" value="${price}" min="0" class="variant-price">
        <button type="button" onclick="removeVariantField(this)">Xóa</button>
    `;
    container.appendChild(variantDiv);
}

function removeVariantField(button) {
    button.parentElement.remove();
}

function getDetailVariants(product) {
    if (product.variants && product.variants.length) {
        return product.variants.map(v => v.name);
    }
    switch (product.category) {
        case 'Sách & Vở':
            return ['Bìa mềm', 'Bìa cứng'];
        case 'Bút & Bộ sưu tập':
            return ['Màu xanh', 'Màu đen', 'Màu đỏ'];
        case 'Dụng cụ vẽ':
            return ['Bộ cơ bản', 'Bộ chuyên nghiệp'];
        case 'Công nghệ học tập':
            return ['Phiên bản thường', 'Phiên bản cao cấp'];
        default:
            return [];
    }
}

function getDefaultVariantsForCategory(category) {
    switch (category) {
        case 'Sách & Vở':
            return [
                {name: 'Bìa mềm', price: ''},
                {name: 'Bìa cứng', price: ''}
            ];
        case 'Bút & Bộ sưu tập':
            return [
                {name: 'Màu xanh', price: ''},
                {name: 'Màu đen', price: ''},
                {name: 'Màu đỏ', price: ''}
            ];
        case 'Dụng cụ vẽ':
            return [
                {name: 'Bộ cơ bản', price: ''},
                {name: 'Bộ chuyên nghiệp', price: ''}
            ];
        case 'Công nghệ học tập':
            return [
                {name: 'Phiên bản thường', price: ''},
                {name: 'Phiên bản cao cấp', price: ''}
            ];
        default:
            return [];
    }
}

function closeProductDetailModal() {
    detailProductId = null;
    document.getElementById('productDetailModal').classList.remove('active');
}

function detailAddToCart() {
    if (!detailProductId) return;
    addToCart(detailProductId, detailSelectedVariant);
}

function getProductHighlights(product) {
    const highlights = [
        `Định danh sản phẩm: STH-${String(product.id).padStart(4, '0')}`,
        `Danh mục: ${product.category}`,
        `Đánh giá: ${product.rating} sao`
    ];

    if (product.quantity === 0) {
        highlights.push('Sản phẩm đang tạm hết hàng, quay lại sau');
    } else if (product.quantity < 20) {
        highlights.push('Còn lại số lượng ít, đặt nhanh trước khi hết hàng');
    } else {
        highlights.push('Đủ hàng, giao nhanh trong ngày');
    }

    if (product.category === 'Sách & Vở') {
        highlights.push('Giấy chất lượng cao, sử dụng tốt cho học tập và luyện thi');
    }

    if (product.category === 'Bút & Bộ sưu tập') {
        highlights.push('Mực trơn, viết êm, phù hợp học sinh và văn phòng');
    }

    if (product.category === 'Dụng cụ vẽ') {
        highlights.push('Thích hợp cho học sinh yêu thích mỹ thuật và sáng tạo');
    }

    if (product.category === 'Công nghệ học tập') {
        highlights.push('Thiết bị hỗ trợ học tập, bền bỉ và dễ sử dụng');
    }

    return highlights;
}

function addToCart(productId, selectedVariant = '') {
    if (!currentUser) {
        openLoginModal();
        return;
    }

    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId && item.selectedVariant === selectedVariant);

    if (!product || product.quantity === 0) {
        alert('Sản phẩm hiện đang hết hàng');
        return;
    }

    let itemPrice = product.price;
    if (selectedVariant && product.variants) {
        const variant = product.variants.find(v => v.name === selectedVariant);
        if (variant) itemPrice = variant.price;
    }

    if (existingItem) {
        if (existingItem.quantity + 1 > product.quantity) {
            alert('Không thể thêm quá số lượng tồn kho');
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            selectedVariant: selectedVariant,
            price: itemPrice
        });
    }

    saveCart();
    updateCartCount();
    showSuccessMessage(`Đã thêm "${product.name}${selectedVariant ? ' - ' + selectedVariant : ''}" vào giỏ hàng`);
}

function buyNow(productId) {
    if (!currentUser) {
        openLoginModal();
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product || product.quantity === 0) {
        alert('Sản phẩm này hiện tại đã hết hàng');
        return;
    }

    // Clear cart and add this product
    cart = [{
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
    }];

    saveCart();
    updateCartCount();
    proceedToCheckout();
}

// ==================== CART FUNCTIONS ====================
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-cart"></i>
                <p>Giỏ hàng của bạn trống</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}${item.selectedVariant ? ' - ' + item.selectedVariant : ''}</div>
                <div class="cart-item-price">₫${formatPrice(item.price)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    <a href="#" class="cart-item-remove" onclick="removeFromCart(${index}); return false;">Xóa</a>
                </div>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

function updateQuantity(index, change) {
    const cartItem = cart[index];
    const product = products.find(p => p.id === cartItem.id);

    if (change > 0 && product && cartItem.quantity + change > product.quantity) {
        alert('Không thể tăng quá số lượng tồn kho');
        return;
    }

    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        saveCart();
        renderCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = calculateShipping();
    let discount = 0;

    if (appliedVoucher) {
        if (appliedVoucher.type === 'shipping') {
            discount = Math.min(appliedVoucher.value, shipping);
        } else if (appliedVoucher.type === 'percent') {
            discount = Math.min((subtotal * appliedVoucher.value / 100), appliedVoucher.maxDiscount || Infinity);
        } else if (appliedVoucher.type === 'fixed') {
            discount = appliedVoucher.value;
        }
    }

    const total = subtotal + shipping - discount;

    document.getElementById('subtotal').textContent = `₫${formatPrice(subtotal)}`;
    document.getElementById('shipping').textContent = `₫${formatPrice(shipping)}`;
    document.getElementById('total').textContent = `₫${formatPrice(total)}`;

    // Show discount row if applicable
    const discountRow = document.querySelector('.summary-row.discount');
    if (discount > 0) {
        if (!discountRow) {
            const shippingRow = document.querySelector('.summary-row');
            const newDiscountRow = document.createElement('div');
            newDiscountRow.className = 'summary-row discount';
            newDiscountRow.innerHTML = `<span>Giảm giá:</span><span id="discount">-₫${formatPrice(discount)}</span>`;
            shippingRow.parentNode.insertBefore(newDiscountRow, shippingRow.nextSibling);
        } else {
            document.getElementById('discount').textContent = `-₫${formatPrice(discount)}`;
        }
    } else if (discountRow) {
        discountRow.remove();
    }
}

// ==================== CHECKOUT/PAYMENT FUNCTIONS ====================
function proceedToCheckout() {
    if (!currentUser) {
        closeCart();
        openLoginModal();
        return;
    }

    if (cart.length === 0) {
        alert('Giỏ hàng của bạn trống');
        return;
    }

    closeCart();
    openCheckoutModal();
    appliedVoucher = null;
    updateCartSummary();
}

function placeOrder() {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const city = document.getElementById('customerCity').value.trim();
    const district = document.getElementById('customerDistrict').value.trim();
    const payment = document.querySelector('input[name="payment"]:checked').value;

    if (!name || !phone || !address || !city || !district) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc');
        return;
    }

    if (!/^[0-9]{10,11}$/.test(phone)) {
        alert('Số điện thoại không hợp lệ');
        return;
    }

    const order = {
        id: generateOrderId(),
        customer: {
            name,
            email: currentUser.email,
            phone,
            address,
            city,
            district
        },
        items: cart.map(item => ({ ...item, rating: null })),
        total: calculateTotal(),
        payment,
        date: new Date().toLocaleString('vi-VN'),
        status: 'confirmed'
    };

    // Kiểm tra tồn kho trước khi tạo đơn hàng
    for (const item of cart) {
        const product = products.find(p => p.id === item.id);
        if (!product || item.quantity > product.quantity) {
            alert(`Số lượng sản phẩm "${item.name}" vượt quá tồn kho hiện tại.`);
            return;
        }
    }

    // Lưu đơn hàng
    orders.push(order);
    saveOrders();

    // Giảm số lượng tồn kho trong danh sách sản phẩm
    order.items.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            product.quantity = Math.max(0, product.quantity - item.quantity);
        }
    });
    saveProducts();

    // Xóa giỏ hàng
    cart = [];
    saveCart();
    updateCartCount();

    renderProducts();
    renderAdminProducts();

    closeCheckoutModal();
    showSuccessMessage('🎉 Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm.');

    // Reset form
    document.querySelector('.checkout-form').reset();
    appliedVoucher = null;

    // Hiển thị chi tiết đơn hàng
    setTimeout(() => {
        alert(`Đơn hàng #${order.id} đã được tạo.\n\nThông tin giao hàng:\n${name}\n${phone}\n${address}, ${district}, ${city}\n\nTổng tiền: ₫${formatPrice(order.total)}\nPhương thức: ${getPaymentMethodName(payment)}`);
    }, 1000);
}

function submitOrderItemRating(orderId, itemIndex, rating) {
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        alert('Không tìm thấy đơn hàng.');
        return;
    }
    if (!currentUser || order.customer.email !== currentUser.email) {
        alert('Chỉ khách hàng mua hàng mới có thể đánh giá sản phẩm này.');
        return;
    }
    if (order.status !== 'delivered') {
        alert('Chỉ có thể đánh giá sản phẩm sau khi đơn hàng đã giao.');
        return;
    }

    const item = order.items[itemIndex];
    if (!item) {
        alert('Không tìm thấy sản phẩm trong đơn hàng.');
        return;
    }
    if (item.rating) {
        alert('Bạn đã đánh giá sản phẩm này rồi.');
        return;
    }

    item.rating = rating;
    saveOrders();

    const product = products.find(p => p.id === item.id);
    if (product) {
        const totalStars = (product.rating || 0) * (product.reviews || 0);
        product.reviews = (product.reviews || 0) + 1;
        product.rating = parseFloat(((totalStars + rating) / product.reviews).toFixed(1));
        saveProducts();
        renderProducts();
        renderAdminProducts();
    }

    showSuccessMessage(`Cảm ơn bạn đã đánh giá ${rating} sao cho "${item.name}"`);
    renderOrders();
}

function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = calculateShipping();
    let discount = 0;

    if (appliedVoucher) {
        if (appliedVoucher.type === 'shipping') {
            discount = Math.min(appliedVoucher.value, shipping);
        } else if (appliedVoucher.type === 'percent') {
            discount = Math.min((subtotal * appliedVoucher.value / 100), appliedVoucher.maxDiscount || Infinity);
        } else if (appliedVoucher.type === 'fixed') {
            discount = appliedVoucher.value;
        }
    }

    return subtotal + shipping - discount;
}

function calculateShipping() {
    // Default shipping cost
    let shipping = 30000;

    // Get customer city from form if available
    const cityInput = document.getElementById('customerCity');
    if (cityInput && cityInput.value.trim()) {
        const city = cityInput.value.trim().toLowerCase();
        // Higher shipping for certain areas
        if (city.includes('hà nội') || city.includes('hanoi')) {
            shipping = 35000;
        } else if (city.includes('đà nẵng') || city.includes('da nang')) {
            shipping = 40000;
        } else if (city.includes('cần thơ') || city.includes('can tho')) {
            shipping = 45000;
        }
    }

    // Free shipping for orders over 200k
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (subtotal >= 200000) {
        shipping = 0;
    }

    return shipping;
}

function applyVoucher() {
    const code = document.getElementById('voucherCode').value.trim().toUpperCase();
    const voucher = VOUCHERS[code];

    if (!voucher) {
        alert('Mã giảm giá không hợp lệ');
        appliedVoucher = null;
        updateCartSummary();
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (voucher.minOrder && subtotal < voucher.minOrder) {
        alert(`Đơn hàng tối thiểu ${formatPrice(voucher.minOrder)} để áp dụng mã này`);
        appliedVoucher = null;
        updateCartSummary();
        return;
    }

    appliedVoucher = voucher;
    alert('Đã áp dụng mã giảm giá thành công!');
    updateCartSummary();
}

function generateOrderId() {
    return 'ORD' + Date.now();
}

function getPaymentMethodName(method) {
    const methods = {
        'cod': 'Thanh toán khi nhận hàng',
        'bank': 'Chuyển khoản ngân hàng',
        'wallet': 'Ví điện tử'
    };
    return methods[method] || method;
}

// ==================== LOGIN/AUTH FUNCTIONS ====================
function openLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        alert('Vui lòng nhập email hoặc số điện thoại và mật khẩu');
        return;
    }

    if (password.length < 6) {
        alert('Mật khẩu phải ít nhất 6 ký tự');
        return;
    }

    // Check if admin
    const isAdmin = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;

    const user = {
        email,
        name: email.split('@')[0] || email,
        loginTime: new Date(),
        role: isAdmin ? 'admin' : 'customer'
    };

    saveUser(user);
    closeLoginModal();
    updateLoginButton();
    showSuccessMessage(`👋 Chào mừng ${user.name}${isAdmin ? ' (Admin)' : ''}!`);
}

function updateLoginButton() {
    const loginBtn = document.getElementById('loginBtn');
    const adminBtn = document.getElementById('adminBtn');
    
    if (currentUser) {
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
        loginBtn.onclick = logout;
        
        // Show admin button if user is admin
        if (currentUser.role === 'admin') {
            adminBtn.style.display = 'flex';
        } else {
            adminBtn.style.display = 'none';
        }
    } else {
        loginBtn.innerHTML = `<i class="fas fa-user"></i> Đăng nhập`;
        loginBtn.onclick = openLoginModal;
        adminBtn.style.display = 'none';
    }
}

function logout() {
    if (confirm('Bạn chắc chắn muốn đăng xuất?')) {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateLoginButton();
        showSuccessMessage('Đã đăng xuất');
    }
}

function toggleAuthMode() {
    // Có thể thêm chế độ đăng ký ở đây
    alert('Chức năng đăng ký sẽ được cập nhật');
}

// ==================== MODAL FUNCTIONS ====================
function openCheckoutModal() {
    document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    renderCart();
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
}

// ==================== SEARCH & FILTER FUNCTIONS ====================
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (!searchTerm) {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }

    renderProducts(filteredProducts);
}

function filterByCategory(category) {
    // Reset filter khi chuyển danh mục
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    // Cập nhật active state trên navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Render sản phẩm
    renderProducts(filteredProducts);
}

function handleSort() {
    const sortValue = document.getElementById('sortSelect').value;
    let sorted = [...filteredProducts];

    switch (sortValue) {
        case 'popular':
            sorted.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted.sort((a, b) => b.id - a.id);
            break;
        default:
            sorted = [...filteredProducts];
    }

    renderProducts(sorted);
}

// ==================== UTILITY FUNCTIONS ====================
function formatPrice(price) {
    return price.toLocaleString('vi-VN');
}

function showSuccessMessage(message) {
    const successDiv = document.getElementById('successMessage');
    document.getElementById('successText').textContent = message;
    successDiv.classList.add('active');

    setTimeout(() => {
        successDiv.classList.remove('active');
    }, 3000);
}

// ==================== EVENT LISTENERS ====================
document.addEventListener('DOMContentLoaded', function() {
    // Load saved data
    loadCart();
    loadUser();
    loadOrders();
    loadProducts();

    // Render products
    renderProducts();

    // Search handler
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Sort handler
    document.getElementById('sortSelect').addEventListener('change', handleSort);

    // Category navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });

    // Cart sidebar
    document.getElementById('cartBtn').addEventListener('click', openCart);

    // Orders button
    document.getElementById('ordersBtn').addEventListener('click', openOrdersModal);

    // Admin button
    document.getElementById('adminBtn').addEventListener('click', openAdminModal);

    // Login button
    document.getElementById('loginBtn').addEventListener('click', function() {
        if (currentUser) {
            logout();
        } else {
            openLoginModal();
        }
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const loginModal = document.getElementById('loginModal');
        const checkoutModal = document.getElementById('checkoutModal');
        const ordersModal = document.getElementById('ordersModal');
        const adminModal = document.getElementById('adminModal');
        const detailModal = document.getElementById('productDetailModal');

        if (event.target === loginModal) {
            closeLoginModal();
        }
        if (event.target === checkoutModal) {
            closeCheckoutModal();
        }
        if (event.target === ordersModal) {
            closeOrdersModal();
        }
        if (event.target === adminModal) {
            closeAdminModal();
        }
        if (event.target === detailModal) {
            closeProductDetailModal();
        }
    });

    // Update login button on page load
    updateLoginButton();

    // Log info
    console.log('🚀 StudyHub Store initialized successfully!');
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        closeLoginModal();
        closeCheckoutModal();
        closeOrdersModal();
        closeAdminModal();
        closeProductDetailModal();
        closeCart();
    }
});
