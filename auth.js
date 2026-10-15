// ==================== AUTH STORAGE ====================
// NOTE: This is a purely front-end demo (no backend/server), so accounts
// are stored in the browser's localStorage. This is fine for a prototype
// but is NOT secure real authentication.
const USERS_KEY = "theatrex_users";
const SESSION_KEY = "theatrex_currentUser";

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    try {
        const session = JSON.parse(localStorage.getItem(SESSION_KEY));
        if (!session || !session.email) return null;

        // A session is valid only while its account still exists.
        const account = getUsers().find(u =>
            u.email.toLowerCase() === session.email.toLowerCase()
        );
        if (!account || account.name !== session.name) {
            localStorage.removeItem(SESSION_KEY);
            return null;
        }
        return { name: account.name, email: account.email, userId: account.email.toLowerCase() };
    } catch (e) {
        localStorage.removeItem(SESSION_KEY);
        return null;
    }
}

function setCurrentUser(user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.removeItem(SESSION_KEY);
}

function encodePassword(pw) {
    // Obfuscation only, not real encryption - demo project has no backend.
    return btoa(unescape(encodeURIComponent(pw)));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ==================== ACCOUNT BUTTON (every page) ====================
function renderAccountButton() {
    const btn = document.querySelector(".head .getStarted");
    if (!btn) return;
    const user = getCurrentUser();

    const existingMenu = document.querySelector(".account-menu");
    if (existingMenu) existingMenu.remove();

    if (user) {
        btn.textContent = "Hi, " + user.name.split(" ")[0];
        btn.onclick = function (e) {
            e.stopPropagation();
            toggleAccountMenu(btn, user);
        };
    } else {
        btn.textContent = "Login";
        btn.onclick = function () {
            window.location.href = "login.html";
        };
    }
}

function toggleAccountMenu(btn, user) {
    let menu = document.querySelector(".account-menu");
    if (menu) {
        menu.remove();
        return;
    }
    menu = document.createElement("div");
    menu.className = "account-menu";
    menu.innerHTML = `
        <p class="account-name">${user.name}</p>
        <p class="account-email">${user.email}</p>
        <button class="account-logout" id="logoutBtn" type="button">Log out</button>
    `;
    btn.parentElement.style.position = "relative";
    btn.parentElement.appendChild(menu);

    document.getElementById("logoutBtn").addEventListener("click", function () {
        clearCurrentUser();
        menu.remove();
        renderAccountButton();
    });

    setTimeout(() => {
        document.addEventListener("click", function closeMenu(e) {
            if (!menu.contains(e.target) && e.target !== btn) {
                menu.remove();
                document.removeEventListener("click", closeMenu);
            }
        });
    }, 0);
}

renderAccountButton();

// Promo "Get Started" button on the homepage hero card
const promoBtn = document.querySelector(".experience-card .getStarted");
if (promoBtn) {
    promoBtn.addEventListener("click", function () {
        window.location.href = getCurrentUser() ? "movies.html" : "login.html";
    });
}

// After login, resume a validated booking request when one was saved.
function continueAfterLogin() {
    const pending = localStorage.getItem("theatrex_pendingBooking");
    if (pending) {
        try {
            const request = JSON.parse(pending);
            const allowed = ["movie", "event", "play"];
            if (request && allowed.includes(request.category) &&
                typeof request.contentId === "string" && request.contentId.length < 150) {
                window.location.href = "booking.html?category=" +
                    encodeURIComponent(request.category) + "&id=" +
                    encodeURIComponent(request.contentId);
                return;
            }
        } catch (e) {
            // Invalid temporary data is ignored.
        }
        localStorage.removeItem("theatrex_pendingBooking");
    }
    window.location.href = "home.html";
}

// ==================== LOGIN PAGE (Sign In / Create Account) ====================
const tabSignIn = document.getElementById("tabSignIn");
const tabSignUp = document.getElementById("tabSignUp");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");

function switchTab(tab) {
    if (!tabSignIn || !tabSignUp) return;
    const isSignIn = tab === "signin";
    tabSignIn.classList.toggle("active", isSignIn);
    tabSignUp.classList.toggle("active", !isSignIn);
    signInForm.classList.toggle("active", isSignIn);
    signUpForm.classList.toggle("active", !isSignIn);
}

if (tabSignIn && tabSignUp) {
    tabSignIn.addEventListener("click", () => switchTab("signin"));
    tabSignUp.addEventListener("click", () => switchTab("signup"));

    document.querySelectorAll("[data-switch]").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            switchTab(this.dataset.switch);
        });
    });

    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "signup") switchTab("signup");
}

function clearErrors(form) {
    form.querySelectorAll(".error-msg").forEach(el => (el.textContent = ""));
    const formError = form.querySelector(".form-error");
    if (formError) formError.textContent = "";
}

if (signInForm) {
    signInForm.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors(signInForm);

        const email = document.getElementById("signInEmail").value.trim();
        const password = document.getElementById("signInPassword").value;
        let valid = true;

        if (!isValidEmail(email)) {
            document.getElementById("signInEmailError").textContent = "Enter a valid email address";
            valid = false;
        }
        if (!password) {
            document.getElementById("signInPasswordError").textContent = "Enter your password";
            valid = false;
        }
        if (!valid) return;

        const users = getUsers();
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!user || user.password !== encodePassword(password)) {
            document.getElementById("signInFormError").textContent = "Incorrect email or password.";
            return;
        }

        setCurrentUser({ name: user.name, email: user.email });
        continueAfterLogin();
    });
}

if (signUpForm) {
    signUpForm.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors(signUpForm);

        const name = document.getElementById("signUpName").value.trim();
        const email = document.getElementById("signUpEmail").value.trim();
        const password = document.getElementById("signUpPassword").value;
        const confirm = document.getElementById("signUpConfirm").value;
        let valid = true;

        if (name.length < 2) {
            document.getElementById("signUpNameError").textContent = "Enter your full name";
            valid = false;
        }
        if (!isValidEmail(email)) {
            document.getElementById("signUpEmailError").textContent = "Enter a valid email address";
            valid = false;
        }
        if (password.length < 6) {
            document.getElementById("signUpPasswordError").textContent = "Password must be at least 6 characters";
            valid = false;
        }
        if (confirm !== password) {
            document.getElementById("signUpConfirmError").textContent = "Passwords do not match";
            valid = false;
        }
        if (!valid) return;

        const users = getUsers();
        if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
            document.getElementById("signUpFormError").textContent = "An account with this email already exists.";
            return;
        }

        users.push({ name, email, password: encodePassword(password) });
        saveUsers(users);
        setCurrentUser({ name, email });
        continueAfterLogin();
    });
}
