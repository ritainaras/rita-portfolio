assets/js/main.js
import { projects } from "./projects.js";

function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
}

function renderProjects() {
  const grid = document.querySelector("[data-project-grid]");
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <article class="project">
      <h3>${p.title}</h3>
      <div class="meta">
        <span class="tag">${p.kind}</span>
        <span class="tag">${p.niche}</span>
      </div>
      <p>${p.desc}</p>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.cta} →</a>
    </article>
  `).join("");
}

setActiveNav();
renderProjects();
