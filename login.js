function showForm(formType) {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("signupTab").classList.remove("active");

    if (formType === "login") {
        document.getElementById("loginForm").classList.remove("hidden");
        document.getElementById("loginTab").classList.add("active");
    } else {
        document.getElementById("signupForm").classList.remove("hidden");
        document.getElementById("signupTab").classList.add("active");
    }
}

function handleLogin() {
    // Add login logic here
    alert("Logged in!");
}

function handleSignUp() {
    // Add sign-up logic here
    alert("Signed up!");
}
