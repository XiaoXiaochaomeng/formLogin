let submitForm = () => {
    // Lấy các giá trị từ form
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Kiểm tra các giá trị
    let valid = true;
    if (username == "") {
        document.getElementById("usernameError").innerHTML = "Tên đăng nhập không được để trống";
        document.getElementById("usernameSuccess").innerHTML = "";
        valid = false;
    } else {
        document.getElementById("usernameError").innerHTML = "";
        document.getElementById("usernameSuccess").innerHTML = "Tên đăng nhập hợp lệ";
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email không được để trống";
        document.getElementById("emailSuccess").innerHTML = "";
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").innerHTML = "Email không hợp lệ";
        document.getElementById("emailSuccess").innerHTML = "";
        valid = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("emailSuccess").innerHTML = "Email hợp lệ";
    }

    if (password == "") {
        document.getElementById("passwordError").innerHTML = "Mật khẩu không được để trống";
        document.getElementById("passwordSuccess").innerHTML = "";
        valid = false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Mật khẩu phải có ít nhất 8 ký tự";
        document.getElementById("passwordSuccess").innerHTML = "";
        valid = false;
    } else if (!validatePassword(password)) {
        document.getElementById("passwordError").innerHTML = "Mật khẩu phải có ít nhất 1 chữ cái và 1 số";
        document.getElementById("passwordSuccess").innerHTML = "";
        valid = false;
    } else {
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("passwordSuccess").innerHTML = "Mật khẩu hợp lệ";
    }

    // Nếu các giá trị hợp lệ thì submit form
    if (valid) {
        document.querySelector('form').submit;
    }
}

let validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

let validatePassword = (password) => {
    let re = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    return re.test(password);
}