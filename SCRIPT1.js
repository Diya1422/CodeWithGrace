document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function (e) {
            e.target.classList.add("clicked");
            setTimeout(() => {
                e.target.classList.remove("clicked");
            }, 300);
        });
    });
});
