// ==========================================
// 1. CÁC HÀM DÙNG CHUNG TOÀN WEBSITE
// ==========================================

// Hàm định dạng tiền tệ VNĐ
function formatMoney(amount) {
    return amount.toLocaleString('vi-VN') + ' đ';
}

// Hàm cập nhật số lượng giỏ hàng trên thanh Header
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
    if (badge) { // Kiểm tra xem trang hiện tại có gắn thẻ badge không
        if (totalQty > 0) {
            badge.style.display = 'flex';
            badge.innerText = totalQty;
        } else {
            badge.style.display = 'none';
        }
    }
}

// Chạy hàm cập nhật giỏ hàng ngay khi mọi trang web load lên
document.addEventListener("DOMContentLoaded", function() {
    updateCartBadge();
});