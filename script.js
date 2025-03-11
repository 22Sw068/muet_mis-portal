function login() {
    let cnic = document.getElementById("cnic").value;
    let password = document.getElementById("password").value;
    
    if (cnic === "454044701234" && password === "pass123") {
        window.location.href = "home.html";
    } else {
        alert("Invalid CNIC or Password");
    }
}