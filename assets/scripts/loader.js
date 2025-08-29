window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});

setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
}, 30000);