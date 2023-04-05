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


let savedPassword = "admin";

loginBtn.addEventListener("click", () => {
    loginWapper.style.display = "block";
})

loginClose.addEventListener("click", () => {
    loginWapper.style.display = "none";
})


handleSubmit = () => {
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

    if (usernameInput.value.trim() !== "admin" || passwordInput.value.trim() !== savedPassword) {
        passwordError.innerHTML = "Tài khoản hoặc mật khẩu không đúng";
        return;
    }

    if (true) {
        loginBtn.innerHTML = "Đăng nhập thành công";
    }

}

passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

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

    if (oldPassword.value.trim() !== savedPassword) {
        oldPasswordError.innerHTML = "Mật khẩu không đúng";
        return;
    }

    savedPassword = newPassword;

    passwordContainer.style.display = "none";
    loginWapper.style.display = "block";
    loginBtn.innerHTML = "Đăng nhập";
    passwordNotification.innerHTML = "Bạn đã đổi mật khẩu thành công";
    oldPassword.value = "";
    newPassword.value = "";
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

loading = () => {
    loginSubmit.innerHTML = "Loading...";
    setTimeout(() => {
        handleSubmit();
        loginSubmit.innerHTML = "Login";
    }, 1000);
}
