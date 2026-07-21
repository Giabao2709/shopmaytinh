from flask import Flask, render_template

# Khởi tạo ứng dụng Flask
app = Flask(__name__)

# --- CÁC ROUTE ĐIỀU HƯỚNG ---

# 1. Route Trang chủ (của Khoa)
@app.route('/')
def home():
    return render_template('index.html')

# 2. Route Đăng nhập / Đăng ký (của Thành)
@app.route('/login')
def login():
    return render_template('login.html')

# 3. Route Thanh toán (của Bảo)
@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

# 4. Route Admin Dashboard (của Thành)
@app.route('/admin')
def admin():
    return render_template('admin.html')

# 5. Route Hồ sơ cá nhân (của Thành) - MỚI THÊM
@app.route('/profile')
def profile():
    return render_template('profile.html')


# Chạy server khi thực thi file này
if __name__ == '__main__':
    app.run(debug=True)


# 6. Route Lịch sử đơn hàng (của Thành)
@app.route('/orders')
def orders():
    return render_template('orders.html')

# Route Giỏ hàng (của Bảo)
@app.route('/cart')
def cart():
    return render_template('cart.html')