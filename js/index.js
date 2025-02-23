// Existing code
const topics = document.querySelectorAll(".topic-box .points .stars");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box input");
const topicBoxes = document.querySelectorAll(
    ".course-box .margin-box .topic-box"
);
const courseBox = document.querySelector(".course-box");
const emptyList = document.querySelector(".empty-list");

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

searchBox.addEventListener("submit", (e) => {
    e.preventDefault();
    const arrayOftopicBoxes = Array.prototype.slice.call(topicBoxes);

    topicBoxes.forEach((topic) => {
        topic.classList.remove("hide");
    });
    let hideCourses = 0;

    arrayOftopicBoxes
        .filter((topic) => {
            return topic.children[2].textContent
                .toLowerCase()
                .search(searchInput.value.toLowerCase(), 0) < 0
                ? true
                : false;
        })
        .forEach((topic) => {
            topic.classList.add("hide");
            hideCourses++;
        });

    if (hideCourses === topicBoxes.length) {
        emptyList.classList.remove("hide");
    } else {
        emptyList.classList.add("hide");
    }

    searchInput.value = "";
    document.activeElement.blur();
});

const main = document.querySelector('main');

const heading = document.createElement('h1');
heading.textContent = 'Hover over the grid to see the effect!';

main.appendChild(heading);

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');

for (let i = 0; i < 15 * 40; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-item');

  cell.addEventListener('mouseenter', () => {
    if (!cell.classList.contains('animating')) {
      cell.classList.add('hovered', 'animating');
      
      cell.addEventListener('transitionend', () => {
        cell.classList.remove('hovered', 'animating');
      }, { once: true });
    }
  });

  gridContainer.appendChild(cell);
}

main.appendChild(gridContainer);
