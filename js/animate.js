document.addEventListener("DOMContentLoaded", function () {
    const navIcon = document.getElementById("header_menu1");
    const menu = document.getElementById("menu1");

    navIcon.addEventListener("click", function () {
        this.classList.toggle("open");
        menu.classList.toggle("open1");
    });
  });