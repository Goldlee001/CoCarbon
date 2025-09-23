const navLinks = document.querySelectorAll(".all_ul ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});