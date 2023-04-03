const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const loginSubmitBtn = document.getElementById("loginSubmit");

loginBtn.addEventListener("click", function () {
    loginModal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    loginModal.style.display = "none";
});

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // ngăn chặn reload trang khi submit form

    // Kiểm tra nếu chưa nhập username hoặc password
    if (!usernameInput.value || !passwordInput.value) {
        if (!usernameInput.value) {
            usernameError.innerHTML = "Vui lòng nhập tên đăng nhập";
        } else {
            usernameError.innerHTML = "";
        }

        if (!passwordInput.value) {
            passwordError.innerHTML = "Vui lòng nhập mật khẩu";
        } else {
            passwordError.innerHTML = "";
        }
        return;
    }

    // Kiểm tra nếu tên đăng nhập hoặc mật khẩu không đúng
    if (usernameInput.value !== "admin" || passwordInput.value !== "admin") {
        passwordError.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
        return;
    }

    // Nếu đăng nhập đúng thì đóng modal và hiển thị thông báo đăng nhập thành công
    loginModal.style.display = "none";
    loginBtn.innerHTML = "Đăng nhập thành công";
});
