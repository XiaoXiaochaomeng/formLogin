
let loginBtn = document.getElementById("loginBtn");
let loginClose = document.querySelector(".close");
let loginWapper = document.getElementById("wapper");
let loginForm = document.getElementById("loginForm");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");
let loginSubmit = document.getElementById("loginSubmit");
let loginContent = document.getElementById("content");

let passwordNew = document.getElementById("passwordNew");
let loginClose2 = document.querySelector(".close-2");
let passwordForm = document.getElementById("passwordForm");
let passwordContainer = document.getElementById("container");
let oldPassword = document.getElementById("old-password");
let newPassword = document.getElementById("new-password");
let changePassword = document.getElementById("password-submit");
let oldPasswordError = document.getElementById("oldPasswordError");
let newPasswordError = document.getElementById("newPasswordError");



loginBtn.addEventListener("click", () => {
    loginWapper.style.display = "block";
})

loginClose.addEventListener("click", () => {
    loginWapper.style.display = "none";
})




loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let userName = usernameInput.value.trim();
    let passWord = passwordInput.value.trim();

    if (!userName || !passWord) {
        if (!userName) {
            usernameError.innerHTML = "Vui lòng nhập tên đăng nhập";
        } else {
            usernameError.innerHTML = "";
        }
        if (!passWord) {
            passwordError.innerHTML = "Vui lòng nhập mật khẩu";
        } else {
            passwordError.innerHTML = "";
        }
        return;
    }

    if (userName !== "admin" || passWord !== "admin") {
        passwordError.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
        return;
    }

    loginWapper.style.display = "none";
    loginBtn.innerHTML = "Đăng nhập thành công";
})

passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let oldPasswordInput = oldPassword.value.trim();
    let newPasswordInput = newPassword.value.trim();

    if (!oldPasswordInput || !newPasswordInput) {
        if (!oldPasswordInput) {
            oldPasswordError.innerHTML = "Vui lòng nhập mật khẩu";
        } else {
            oldPasswordError.innerHTML = "";
        }
        if (!newPasswordInput) {
            newPasswordError.innerHTML = "Vui lòng nhập mật khẩu mới";
        } else {
            newPasswordError.innerHTML = "";
        }
        return
    }
    if (oldPasswordInput !== passwordInput.value) {
        oldPasswordError.innerHTML = "Mật khẩu không chính xác";
    } else {
        oldPasswordError.innerHTML = "";
    }
})

forgot = () => {
    loginWapper.style.display = "none";
    passwordContainer.style.display = "block";
}

loginClose2.addEventListener("click", () => {
    passwordContainer.style.display = "none";
})

backSave = () => {
    passwordContainer.style.display = "none";
    loginWapper.style.display = "block";
}
