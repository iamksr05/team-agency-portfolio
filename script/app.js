const teamContainer = document.getElementById("teamContainer");

teamMembers.forEach((member) => {
    teamContainer.innerHTML += `
        <div class="team-card">
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <h4>${member.role}</h4>
            <p>${member.bio}</p>
            <a href="${member.github}">GitHub</a>
        </div>
    `;
});

const projectContainer = document.getElementById("projectContainer");

projects.forEach((project) => {
    projectContainer.innerHTML += `
        <div class="project-card">
            <span class="badge">
                ${project.status}
            </span>

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.desc}
            </p>
        </div>
    `;
});

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            document
                .querySelector(this.getAttribute("href"))
                .scrollIntoView({
                    behavior: "smooth",
                });
        });
    });

const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "Light";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    toggle.textContent = dark ? "Light" : "Dark";

    localStorage.setItem(
        "theme",
        dark ? "dark" : "light"
    );
});