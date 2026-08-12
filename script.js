const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");

menu.onclick = () => nav.classList.toggle("show");

document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => nav.classList.remove("show");
});

document.querySelector("#year").textContent = new Date().getFullYear();