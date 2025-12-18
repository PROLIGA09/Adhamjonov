document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeModal = document.getElementById("closeModal");
    const closeRegister = document.getElementById("closeRegister");
    const showRegister = document.getElementById("showRegister");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const tournaments = [
        {name: "CS:GO Pro League", date: "2025-12-25", prize: "$50,000"},
        {name: "Dota 2 Masters", date: "2026-01-10", prize: "$100,000"},
        {name: "League of Legends Cup", date: "2026-02-05", prize: "$75,000"}
    ];

    const news = [
        "Proliga yangi cybersport turniri e'lon qilindi",
        "IT sohasida yangi startaplar va texnologiyalar",
        "Dunyo bo'ylab esports festivali o‘tkazildi"
    ];

    const activeUsers = [
        "Ali - 150 ball",
        "Nodir - 140 ball",
        "Gulbahor - 130 ball"
    ];

    // Turnirlarni yuklash
    const tournamentList = document.getElementById("tournament-list");
    tournaments.forEach(t => {
        const div = document.createElement("div");
        div.classList.add("tournament");
        div.innerHTML = `<strong>${t.name}</strong> <br> Sana: ${t.date} <br> Mukofot: ${t.prize}`;
        tournamentList.appendChild(div);
    });

    // Yangiliklarni yuklash
    const newsList = document.getElementById("news-list");
    news.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        newsList.appendChild(li);
    });

    // Faollarni yuklash
    const activeUsersList = document.getElementById("active-users");
    activeUsers.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        activeUsersList.appendChild(li);
    });

    // Modal ochish
    loginBtn.addEventListener("click", () => loginModal.style.display = "block");
    closeModal.addEventListener("click", () => loginModal.style.display = "none");
    closeRegister.addEventListener("click", () => registerModal.style.display = "none");

    showRegister.addEventListener("click", e => {
        e.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "block";
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        if (!username || !password) {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }
        alert(`Tizimga kirish: ${username}`);
        loginModal.style.display = "none";
        loginForm.reset();
    });

    registerForm.addEventListener("submit", e => {
        e.preventDefault();
        const regUsername = document.getElementById("regUsername").value.trim();
        const regPassword = document.getElementById("regPassword").value.trim();
        if (!regUsername || !regPassword) {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }
        alert(`Ro'yxatdan o'tildi: ${regUsername}`);
        registerModal.style.display = "none";
        registerForm.reset();
    });

    window.addEventListener("click", e => {
        if (e.target === loginModal) loginModal.style.display = "none";
        if (e.target === registerModal) registerModal.style.display = "none";
    });
});
