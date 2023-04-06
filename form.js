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
let passwordNotification = document.getElementById("passwordNotification");

let passwordNew = document.getElementById("passwordNew");
let loginClose2 = document.querySelector(".close-2");
let passwordForm = document.getElementById("passwordForm");
let passwordContainer = document.getElementById("container");
let oldPassword = document.getElementById("old-password");
let newPassword = document.getElementById("new-password");
let changePassword = document.getElementById("password-submit");
let oldPasswordError = document.getElementById("oldPasswordError");
let newPasswordError = document.getElementById("newPasswordError");


let password = "admin";

loginBtn.addEventListener("click", () => {
    loginWapper.style.display = "block";
})

loginClose.addEventListener("click", () => {
    loginWapper.style.display = "none";
})


handleLogin = () => {
    if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
        if (!usernameInput.value.trim()) {
            usernameError.innerHTML = "Vui lòng nhập tên đăng nhập";
        } else {
            usernameError.innerHTML = "";
        }
        if (!passwordInput.value.trim()) {
            passwordError.innerHTML = "Vui lòng nhập mật khẩu";
        } else {
            passwordError.innerHTML = "";
        }
        return;
    }

    if (usernameInput.value.trim() !== "admin" || passwordInput.value.trim() !== password) {
        passwordError.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
        return;
    }

    if (true) {
        setTimeout(() => {
            loginWapper.style.display = "none";
        }, 1000);
        loginBtn.innerHTML = "Đăng nhập thành công";
        usernameError.innerHTML = "";
        passwordError.innerHTML = "";
        usernameInput.value = "";
        passwordInput.value = "";
        passwordNotification.innerHTML = "";
    }
}
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleLogin();
})

loading = () => {
    loginSubmit.innerHTML = "Loading...";
    setTimeout(() => {
        handleLogin();
        loginSubmit.innerHTML = "Login";
    }, 1000);
}

handleChange = () => {
    if (!oldPassword.value.trim() || !newPassword.value.trim()) {
        if (!oldPassword.value.trim()) {
            oldPasswordError.innerHTML = "Vui lòng nhập mật khẩu";
        } else {
            oldPasswordError.innerHTML = "";
        }
        if (!newPassword.value.trim()) {
            newPasswordError.innerHTML = "Vui lòng nhập mật khẩu mới";
        } else {
            newPasswordError.innerHTML = "";
        }
        return;
    }

    if (oldPassword.value.trim() !== password) {
        oldPasswordError.innerHTML = "Mật khẩu không đúng";
        return;
    } else {
        oldPasswordError.innerHTML = "";
    }

    if (newPassword.value.trim() === password) {
        newPasswordError.innerHTML = "Mật khẩu mới phải khác mật khẩu cũ";
        return;
    } else {
        newPasswordError.innerHTML = "";
    }

    if (true) {
        password = newPassword.value.trim();
        passwordContainer.style.display = "none";
        loginWapper.style.display = "block";
        loginBtn.innerHTML = "Đăng nhập hệ thống";
        passwordNotification.innerHTML = "Bạn đã đổi mật khẩu thành công";
        oldPassword.value = "";
        newPassword.value = "";
    }
}

passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleChange();
})

forgot = () => {
    loginWapper.style.display = "none";
    passwordContainer.style.display = "block";
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";
}

loginClose2.addEventListener("click", () => {
    passwordContainer.style.display = "none";
})

backSave = () => {
    passwordContainer.style.display = "none";
    loginWapper.style.display = "block";
    newPasswordError.innerHTML = "";
    oldPasswordError.innerHTML = "";
}


