document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("tabMenuToggle");
  const menu = document.getElementById("tabMenu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggleBtn.classList.toggle("open");

    if (menu.classList.contains("active")) {
      toggleBtn.setAttribute("aria-label", "Закрыть меню");
    } else {
      toggleBtn.setAttribute("aria-label", "Открыть меню");
    }
  });
});
