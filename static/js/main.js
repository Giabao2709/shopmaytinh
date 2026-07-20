// ==========================================================================
// 1. DỮ LIỆU SẢN PHẨM (MÔ PHỎNG DATABASE)
// ==========================================================================
const products = [
    { id: 1, cat: 'gaming', brand: 'MSI', name: 'Laptop MSI Raider GE78 HX Smart Touchpad', img: 'msiraider.jpg', price: 99500000, oldPrice: 105000000, specs: ['Core i9-13980HX', 'RTX 4080', '32GB'], rating: 5, reviews: 32, isDeal: false, tag: 'MỚI VỀ' },
    { id: 2, cat: 'gaming', brand: 'ASUS', name: 'Laptop ASUS ROG Zephyrus G14 (2024)', img: 'rogg14.jpg', price: 36990000, oldPrice: 45000000, specs: ['Ryzen 9 8945HS', 'RTX 4060', 'Mini LED'], rating: 5, reviews: 102, isDeal: true, tag: 'GIÁ SỐC' },
    { id: 3, cat: 'gaming', brand: 'Lenovo', name: 'Laptop Lenovo Legion Y7000P 2024', img: 'y7000p.jpg', price: 35850000, oldPrice: null, specs: ['Core i7-14650HX', 'RTX 4060', '16GB'], rating: 4, reviews: 45, isDeal: false, tag: null },
    { id: 4, cat: 'gaming', brand: 'Lenovo', name: 'Laptop Lenovo Legion Y9000P 2024 White', img: 'y9000p.jpg', price: 56990000, oldPrice: null, specs: ['Core i9-14900HX', 'RTX 4060', '16GB'], rating: 5, reviews: 89, isDeal: false, tag: 'HOT' },
    { id: 5, cat: 'gaming', brand: 'Acer', name: 'Laptop Acer Predator Helios Neo 16', img: 'acer-predator.jpg', price: 29990000, oldPrice: 35000000, specs: ['Core i7-13700HX', 'RTX 4060', '16GB'], rating: 4, reviews: 67, isDeal: true, tag: 'GIẢM ĐẬM' },
    { id: 6, cat: 'gaming', brand: 'Dell', name: 'Laptop Gaming Dell Alienware m16 R2', img: 'dell-alienware.jpg', price: 68990000, oldPrice: 75000000, specs: ['Core i9-13900HX', 'RTX 4080', '32GB DDR5'], rating: 5, reviews: 48, isDeal: true, tag: 'MỚI VỀ' },
    { id: 7, cat: 'gaming', brand: 'HP', name: 'HP Omen 17" Gaming Workstation', img: 'hp-omen.jpg', price: 42500000, oldPrice: null, specs: ['Core i7-13700H', 'RTX 4070', '1TB SSD'], rating: 4, reviews: 21, isDeal: false, tag: null },
    { id: 8, cat: 'gaming', brand: 'Gigabyte', name: 'Laptop Gigabyte Aorus 15X', img: 'gigabyte-aorus.jpg', price: 38900000, oldPrice: 42000000, specs: ['Core i7', 'RTX 4070', '16GB'], rating: 4, reviews: 15, isDeal: true, tag: 'GIÁ SỐC' },
    { id: 9, cat: 'macbook', brand: 'Apple', name: 'MacBook Pro 16-inch M3 Max (2024)', img: 'pro16m3.jpeg', price: 89990000, oldPrice: null, specs: ['M3 Max Chip', '64GB Unified Memory', '1TB SSD'], rating: 5, reviews: 254, isDeal: false, tag: null },
    { id: 10, cat: 'macbook', brand: 'Apple', name: 'MacBook Air M1 13" 2020', img: 'mac-air-m1.jpg', price: 18490000, oldPrice: 20000000, specs: ['M1 Chip', '8GB RAM', '256GB SSD'], rating: 5, reviews: 1520, isDeal: true, tag: 'QUỐC DÂN' },
    { id: 11, cat: 'macbook', brand: 'Apple', name: 'MacBook Air M2 13" 2022', img: 'mac-air-m2.jpg', price: 24990000, oldPrice: null, specs: ['M2 Chip', '8GB RAM', '256GB SSD'], rating: 4, reviews: 840, isDeal: false, tag: null },
    { id: 12, cat: 'macbook', brand: 'Apple', name: 'MacBook Air M3 15" 2024', img: 'mac-air-m3.jpg', price: 37990000, oldPrice: 39990000, specs: ['M3 Chip', '16GB RAM', '512GB SSD'], rating: 5, reviews: 120, isDeal: true, tag: 'MỚI VỀ' },
    { id: 13, cat: 'macbook', brand: 'Apple', name: 'MacBook Pro 14" M3 Pro', img: 'mac-pro-14.jpg', price: 49990000, oldPrice: null, specs: ['M3 Pro Chip', '18GB RAM', '512GB SSD'], rating: 5, reviews: 315, isDeal: false, tag: null },
    { id: 14, cat: 'office', brand: 'Dell', name: 'Dell XPS 13 Plus 9320 (2023)', img: 'dell-xps13.jpg', price: 42500000, oldPrice: 47000000, specs: ['Core i7-1360P', '16GB', 'OLED 3.5K'], rating: 5, reviews: 85, isDeal: true, tag: 'GIÁ SỐC' },
    { id: 15, cat: 'office', brand: 'Dell', name: 'Dell Inspiron 15 3520', img: 'dell-inspiron.jpg', price: 12990000, oldPrice: 14500000, specs: ['Core i5-1235U', '8GB', '512GB SSD'], rating: 4, reviews: 420, isDeal: true, tag: 'SINH VIÊN' },
    { id: 16, cat: 'office', brand: 'HP', name: 'HP Envy x360 2-in-1', img: 'hp-envy.jpg', price: 22500000, oldPrice: null, specs: ['Ryzen 7', '16GB', 'Cảm ứng'], rating: 4, reviews: 110, isDeal: false, tag: null },
    { id: 17, cat: 'office', brand: 'HP', name: 'HP Pavilion 15', img: 'hp-pavilion.jpg', price: 14500000, oldPrice: null, specs: ['Core i5', '8GB', '256GB'], rating: 4, reviews: 205, isDeal: false, tag: null },
    { id: 18, cat: 'office', brand: 'ASUS', name: 'ASUS Zenbook 14 OLED', img: 'asus-zenbook.jpg', price: 25990000, oldPrice: null, specs: ['Core Ultra 7', '16GB', 'OLED 120Hz'], rating: 5, reviews: 90, isDeal: false, tag: 'AI PC' },
    { id: 19, cat: 'office', brand: 'ASUS', name: 'ASUS Vivobook 15', img: 'asus-vivobook.jpg', price: 11990000, oldPrice: 13500000, specs: ['Core i3', '8GB', '512GB'], rating: 3, reviews: 150, isDeal: true, tag: null },
    { id: 20, cat: 'office', brand: 'Lenovo', name: 'Lenovo ThinkPad X1 Carbon Gen 11', img: 'lenovo-thinkpad.jpg', price: 39990000, oldPrice: null, specs: ['Core i7-1355U', '16GB', 'WUXGA'], rating: 5, reviews: 300, isDeal: false, tag: 'DOANH NHÂN' },
    { id: 21, cat: 'office', brand: 'Lenovo', name: 'Lenovo IdeaPad Slim 5', img: 'lenovo-ideapad.jpg', price: 16990000, oldPrice: null, specs: ['Core i5', '16GB', '512GB'], rating: 4, reviews: 180, isDeal: false, tag: null },
    { id: 22, cat: 'office', brand: 'Acer', name: 'Acer Swift 3', img: 'acer-swift.jpg', price: 17500000, oldPrice: null, specs: ['Core i5', '16GB', 'EVO'], rating: 4, reviews: 60, isDeal: false, tag: null },
    { id: 23, cat: 'office', brand: 'LG', name: 'LG Gram 14 2023', img: 'lg-gram.jpg', price: 26900000, oldPrice: 30000000, specs: ['Core i5', '16GB', '999g'], rating: 5, reviews: 140, isDeal: true, tag: 'GIẢM ĐẬM' },
    { id: 24, cat: 'accessory', brand: 'Logitech', name: 'Chuột không dây Logitech G Pro X Superlight', img: 'logitech.jpg', price: 2990000, oldPrice: 3500000, specs: ['Không dây', '63 gram', 'Hero 25K'], rating: 5, reviews: 850, isDeal: true, tag: 'BEST SELLER' },
    { id: 25, cat: 'accessory', brand: 'Razer', name: 'Chuột Razer DeathAdder V3 Pro', img: 'mouse-razer.jpg', price: 3490000, oldPrice: null, specs: ['Không dây', 'Ergonomic', '30K DPI'], rating: 5, reviews: 420, isDeal: false, tag: null },
    { id: 26, cat: 'accessory', brand: 'Corsair', name: 'Chuột Corsair Harpoon RGB', img: 'mouse-corsair.jpg', price: 1200000, oldPrice: null, specs: ['Không dây', 'RGB', '10K DPI'], rating: 4, reviews: 150, isDeal: false, tag: null },
    { id: 27, cat: 'accessory', brand: 'ASUS', name: 'Chuột ASUS ROG Gladius III', img: 'mouse-asus.jpg', price: 1890000, oldPrice: 2200000, specs: ['Có dây/Không dây', 'RGB'], rating: 4, reviews: 200, isDeal: true, tag: null },
    { id: 28, cat: 'accessory', brand: 'Sony', name: 'Tai nghe Sony WH-1000XM5 Black', img: 'sonyWH.jpg', price: 7290000, oldPrice: 8500000, specs: ['Chống ồn ANC', 'Hi-Res Audio', 'Pin 30h'], rating: 5, reviews: 1200, isDeal: true, tag: 'GIÁ SỐC' },
    { id: 29, cat: 'accessory', brand: 'Apple', name: 'Tai nghe Apple AirPods Max', img: 'headphone-airpods.jpg', price: 11500000, oldPrice: null, specs: ['Chống ồn', 'Spatial Audio'], rating: 4, reviews: 500, isDeal: false, tag: null },
    { id: 30, cat: 'accessory', brand: 'Logitech', name: 'Tai nghe Logitech G Pro X Wireless', img: 'headphone-logitech.jpg', price: 4500000, oldPrice: null, specs: ['Lightspeed', 'Blue VO!CE'], rating: 5, reviews: 300, isDeal: false, tag: null },
    { id: 31, cat: 'accessory', brand: 'Razer', name: 'Tai nghe Razer BlackShark V2', img: 'headphone-razer.jpg', price: 2500000, oldPrice: 2990000, specs: ['THX Spatial', 'TriForce 50mm'], rating: 4, reviews: 450, isDeal: true, tag: null },
    { id: 32, cat: 'accessory', brand: 'HyperX', name: 'Micro HyperX QuadCast S', img: 'mic-hyperx.jpg', price: 3890000, oldPrice: null, specs: ['RGB', 'Condenser', 'USB'], rating: 5, reviews: 600, isDeal: false, tag: 'HOT' },
    { id: 33, cat: 'accessory', brand: 'Rode', name: 'Micro Rode NT-USB', img: 'mic-rode.jpg', price: 4200000, oldPrice: null, specs: ['Studio Quality', 'Pop filter'], rating: 5, reviews: 250, isDeal: false, tag: null },
    { id: 34, cat: 'accessory', brand: 'Shure', name: 'Micro Shure MV7', img: 'mic-shure.jpg', price: 6500000, oldPrice: 7000000, specs: ['XLR/USB', 'Podcast'], rating: 5, reviews: 400, isDeal: true, tag: null },
    { id: 35, cat: 'accessory', brand: 'JBL', name: 'Loa Bluetooth JBL Charge 5', img: 'speaker-jbl.jpg', price: 3500000, oldPrice: null, specs: ['Chống nước', 'Pin 20h'], rating: 4, reviews: 800, isDeal: false, tag: null },
    { id: 36, cat: 'accessory', brand: 'Marshall', name: 'Loa Marshall Stanmore III', img: 'speaker-marshall.jpg', price: 9500000, oldPrice: null, specs: ['Bluetooth 5.2', '80W'], rating: 5, reviews: 350, isDeal: false, tag: 'SANG TRỌNG' }
];

let currentCategory = 'all';

// ==========================================================================
// 2. HÀM BẢO MẬT: KIỂM TRA ĐĂNG NHẬP (Chỉ hiện thông báo, không chuyển trang)
// ==========================================================================
function requireLogin(event, targetUrl) {
    if (event) event.preventDefault(); // Chặn việc nhảy trang ngay lập tức
    
    // Kiểm tra trạng thái đăng nhập
    let loggedIn = localStorage.getItem('isLoggedIn');
    
    if (loggedIn === 'true') {
        window.location.href = targetUrl; // Cho đi tiếp
    } else {
        // Chỉ hiển thị thông báo, giữ người dùng ở lại trang hiện tại
        alert("Bạn cần đăng nhập thì mới thực hiện được thao tác này!");
    }
}

// ==========================================================================
// 3. HÀM XỬ LÝ GIỎ HÀNG (Chỉ hiện thông báo, không chuyển trang)
// ==========================================================================
function updateCartBadge() {
    let savedData = localStorage.getItem('khoavang_cartData');
    let totalQty = 0;
    if (savedData) {
        let cartData = JSON.parse(savedData);
        if(cartData.items) {
            cartData.items.forEach(item => totalQty += item.qty);
        }
    }
    const badge = document.getElementById('header-cart-badge');
    if (badge) {
        if (totalQty > 0) {
            badge.style.display = 'flex';
            badge.innerText = totalQty;
        } else {
            badge.style.display = 'none';
        }
    }
}

function addToCart(productId) {
    // Rào chắn bảo vệ: Chỉ cho thêm nếu đã đăng nhập
    let loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn !== 'true') {
        // Chỉ hiển thị thông báo, giữ người dùng ở lại trang hiện tại
        alert("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!");
        return; 
    }

    let product = products.find(p => p.id === productId);
    if (!product) return;
    
    let savedData = localStorage.getItem('khoavang_cartData');
    let cartData = savedData ? JSON.parse(savedData) : { items: [], subtotal: 0, discount: 0, total: 0 };
    if (!cartData.items) cartData.items = [];

    let existingItem = cartData.items.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cartData.items.push({ img: "/static/img/" + product.img, name: product.name, price: product.price, qty: 1 });
    }

    localStorage.setItem('khoavang_cartData', JSON.stringify(cartData));
    updateCartBadge();

    const toast = document.getElementById('cart-toast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }
}

// ==========================================================================
// 4. HÀM XỬ LÝ SẢN PHẨM TRÊN TRANG SHOP.HTML
// ==========================================================================
function renderProducts(filteredProducts) {
    const grid = document.getElementById('product-grid');
    const noResult = document.getElementById('no-result');
    
    if (!grid) return; // Nếu không phải trang shop (vd trang chủ), dừng code tại đây để tránh lỗi

    grid.innerHTML = '';

    if (filteredProducts.length === 0) {
        if (noResult) noResult.style.display = 'block';
    } else {
        if (noResult) noResult.style.display = 'none';
        
        filteredProducts.forEach(p => {
            let specsHTML = p.specs.map(s => `<span>${s}</span>`).join('');
            let oldPriceHTML = p.oldPrice ? `<div class="price-old">${p.oldPrice.toLocaleString('vi-VN')} đ</div>` : '<div class="price-old" style="visibility:hidden">0 đ</div>';
            let tagHTML = '';
            
            if (p.tag) {
                let tagClass = p.isDeal ? 'tag-sale' : 'tag-new';
                tagHTML = `<div class="promo-tag ${tagClass}">${p.tag}</div>`;
            }

            let cardHTML = `
                <div class="col">
                    <div class="product-card">
                        <div class="brand-tag">${p.brand}</div>
                        ${tagHTML}
                        <div class="product-img-box">
                            <a href="product-detail.html?id=${p.id}">
                                <img src="/static/img/${p.img}" class="product-img" alt="${p.name}">
                            </a>
                        </div>
                        <div class="rating">
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            <span>(${p.reviews})</span>
                        </div>
                        <a href="product-detail.html?id=${p.id}" class="product-name">${p.name}</a>
                        <div class="specs-tags">${specsHTML}</div>
                        <div class="card-bottom">
                            <div class="price-box">
                                ${oldPriceHTML}
                                <div class="price-current">${p.price.toLocaleString('vi-VN')} đ</div>
                            </div>
                            <button class="btn-cart-blue" title="Thêm vào giỏ hàng" onclick="addToCart(${p.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
            `;
            grid.innerHTML += cardHTML;
        });
    }
}

function setCategory(cat) {
    // Ngăn lỗi nếu không có thẻ chứa link
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return; 

    currentCategory = cat;
    const url = new URL(window.location);
    url.searchParams.set('cat', cat);
    window.history.pushState({}, '', url);

    document.querySelectorAll('#nav-links a').forEach(a => a.classList.remove('active'));
    const activeLink = document.getElementById('nav-' + cat);
    if (activeLink) activeLink.classList.add('active');

    const titles = {
        'all': { bread: 'Tất cả sản phẩm', title: 'Khám Phá Thế Giới Công Nghệ' },
        'gaming': { bread: 'Gaming & Đồ họa cao cấp', title: 'Laptop Hiệu Năng Cao' },
        'macbook': { bread: 'Apple MacBook', title: 'MacBook - Sự Lựa Chọn Đẳng Cấp' },
        'office': { bread: 'Laptop Văn Phòng', title: 'Laptop Văn Phòng & Doanh Nhân' },
        'accessory': { bread: 'Phụ Kiện', title: 'Phụ Kiện Gear Chính Hãng' },
        'deals': { bread: 'Khuyến mãi đặc biệt', title: 'Siêu Ưu Đãi - Săn Sale' }
    };

    const breadEl = document.getElementById('bread-category');
    const titleEl = document.getElementById('page-main-title');
    
    if (breadEl) breadEl.innerText = titles[cat].bread;
    if (titleEl) titleEl.innerText = titles[cat].title;
    
    document.querySelectorAll('.form-check-input').forEach(cb => cb.checked = false);
    applyFilters();
}

function applyFilters() {
    const urlParams = new URLSearchParams(window.location.search);
    const catFromUrl = urlParams.get('cat');
    let filterCat = catFromUrl ? catFromUrl : currentCategory;

    let checkedBrands = Array.from(document.querySelectorAll('.brand-cb:checked')).map(cb => cb.value);
    let checkedPrices = Array.from(document.querySelectorAll('.price-cb:checked')).map(cb => cb.value);
    
    const sortSelect = document.getElementById('sort-select');
    let sortType = sortSelect ? sortSelect.value : 'newest';
    
    const searchInput = document.getElementById('search-input');
    let searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';

    let filteredData = products.filter(p => {
        if (filterCat === 'deals' && !p.isDeal) return false;
        if (filterCat !== 'all' && filterCat !== 'deals' && p.cat !== filterCat) return false;
        if (checkedBrands.length > 0 && !checkedBrands.includes(p.brand)) return false;
        if (checkedPrices.length > 0) {
            let matchPrice = false;
            for (let range of checkedPrices) {
                if (range === '<15' && p.price < 15000000) matchPrice = true;
                if (range === '15-25' && p.price >= 15000000 && p.price <= 25000000) matchPrice = true;
                if (range === '25-40' && p.price > 25000000 && p.price <= 40000000) matchPrice = true;
                if (range === '>40' && p.price > 40000000) matchPrice = true;
            }
            if (!matchPrice) return false;
        }
        if (searchQuery !== '' && !p.name.toLowerCase().includes(searchQuery)) return false;
        return true;
    });

    if (sortType === 'price-asc') filteredData.sort((a, b) => a.price - b.price);
    else if (sortType === 'price-desc') filteredData.sort((a, b) => b.price - a.price);
    else if (sortType === 'bestseller') filteredData.sort((a, b) => b.reviews - a.reviews);
    else filteredData.sort((a, b) => a.id - b.id);

    renderProducts(filteredData);
}

// ==========================================================================
// 5. KHỞI TẠO KHI TẢI TRANG
// ==========================================================================
window.onload = function() {
    // 1. Luôn cập nhật số lượng giỏ hàng trên tất cả các trang
    updateCartBadge();
    
    // 2. Chạy logic xử lý danh mục nếu đang ở trang Shop (Kiểm tra xem có thẻ product-grid không)
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        const urlParams = new URLSearchParams(window.location.search);
        let catParam = urlParams.get('cat');
        
        if (catParam) {
            currentCategory = catParam;
            document.querySelectorAll('#nav-links a').forEach(a => a.classList.remove('active'));
            const activeLink = document.getElementById('nav-' + catParam);
            if (activeLink) activeLink.classList.add('active');

            const titles = {
                'all': { bread: 'Tất cả sản phẩm', title: 'Khám Phá Thế Giới Công Nghệ' },
                'gaming': { bread: 'Gaming & Đồ họa cao cấp', title: 'Laptop Hiệu Năng Cao' },
                'macbook': { bread: 'Apple MacBook', title: 'MacBook - Sự Lựa Chọn Đẳng Cấp' },
                'office': { bread: 'Laptop Văn Phòng', title: 'Laptop Văn Phòng & Doanh Nhân' },
                'accessory': { bread: 'Phụ Kiện', title: 'Phụ Kiện Gear Chính Hãng' },
                'deals': { bread: 'Khuyến mãi đặc biệt', title: 'Siêu Ưu Đãi - Săn Sale' }
            };
            
            if(titles[catParam]) {
                const breadEl = document.getElementById('bread-category');
                const titleEl = document.getElementById('page-main-title');
                if (breadEl) breadEl.innerText = titles[catParam].bread;
                if (titleEl) titleEl.innerText = titles[catParam].title;
            }
        }
        applyFilters();
    }
};

// ==========================================================================
// 6. HÀM XỬ LÝ ĐĂNG XUẤT
// ==========================================================================
function logout(event) {
    if (event) event.preventDefault(); // Chặn việc nhảy trang mặc định
    
    // Xóa sạch toàn bộ bằng chứng đăng nhập trong bộ nhớ trình duyệt
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('khoavang_user');
    
    // Hiện thông báo và đá văng về trang chủ
    alert("Bạn đã đăng xuất thành công!");
    window.location.href = "index.html";
}