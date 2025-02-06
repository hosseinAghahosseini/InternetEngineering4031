const topics = document.querySelectorAll(".topic-box .points .stars");

topics.forEach((stars) => {
    let hovered_stars = -1;
    const stars_array = Array.prototype.slice.call(stars.children);
    stars_array.forEach((star, index) => {
        star.addEventListener("click", () => {
            hovered_stars = index + 1;
            for (let i = 0; i < stars.childElementCount; i++) {
                if (i < hovered_stars) {
                    stars.children[i].setAttribute(
                        "src",
                        "./assets/images/star-full.svg"
                    );
                } else {
                    stars.children[i].setAttribute(
                        "src",
                        "./assets/images/star.svg"
                    );
                }
            }
        });

        star.addEventListener("mouseenter", () => {
            hovered_stars = index + 1;
            for (let i = 0; i < stars.childElementCount; i++) {
                if (i < hovered_stars) {
                    stars.children[i].classList.add("hover");
                } else {
                    stars.children[i].classList.remove("hover");
                }
            }
        });
        star.addEventListener("mouseleave", () => {
            hovered_stars = index + 1;
            for (let i = 0; i < stars.childElementCount; i++) {
                stars.children[i].classList.remove("hover");
            }
        });
    });
});
