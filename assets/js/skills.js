let skillsMass = [
  {
    title: "HTML",
    img: "./assets/images/skills/html.svg",
    lvl: 80,
    colorFront: "#F4B76E",
    colorBack: "#CC985B",
  },
  {
    title: "CSS",
    img: "./assets/images/skills/css.svg",
    lvl: 70,
    colorFront: "#84B1DB",
    colorBack: "#CDE7FF",
  },
  {
    title: "JS",
    img: "./assets/images/skills/js.svg",
    lvl: 40,
    colorFront: "#FFFCB6",
    colorBack: "#EDE98B",
  },
  {
    title: "ReactJS",
    img: "./assets/images/skills/react.svg",
    lvl: 40,
    colorFront: "#A9EBE7",
    colorBack: "#87D9D4",
  },
  {
    title: "VueJS",
    img: "./assets/images/skills/vue.svg",
    lvl: 30,
    colorFront: "#64e6a9",
    colorBack: "#435466",
  },
  {
    title: "Ionic",
    img: "./assets/images/skills/ionic.webp",
    lvl: 10,
    colorFront: "#8ab7ff",
    colorBack: "#438effb3",
  },
  {
    title: "Figma",
    img: "./assets/images/skills/figma.svg",
    lvl: 19,
    colorFront: "#FAB8B8",
    colorBack: "#DE9191",
  },
];

let skillsList = document.querySelector(".gape-skills__skills-list");

skillsMass[0].lvl < 20 ? console.log("меньше") : console.log("больше");

if (skillsMass[0].lvl < 20) {
  console.log("меньше");
} else {
  console.log("больше");
}

skillsMass.forEach((skill) => {
  skillsList.insertAdjacentHTML(
    "beforeend",
    `<article class="skill-item">
            <img
              class="skill-item__image"
              src=${skill.img}
              alt=""
            />
            <div class="skill-item__top">
              <h4>${skill.title}</h4>
              <h4 class="skill-item__level">${
                skill.lvl < 20 ? "нуб" : "сайбот"
              }%</h4>
            </div>
            <div class="skill-item__level-picture">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="170"
                height="${skill.lvl * 2}"
                viewBox="0 0 170 36"
                fill="none"
              >
                <path
                  d="M0 5.62368C53 24.5 106.5 -13.5 170 5.62368V ${
                    skill.lvl * 2
                  }H 0V 5.62368Z"
                  fill="${skill.colorBack}"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="170"
                height="${skill.lvl * 2}"
                viewBox="0 0 170 31"
                fill="none"
              >
                <path
                  d="M0 20.7457C57.5 -18 86.5 21.5 170 10V ${
                    skill.lvl * 2
                  }H 0V1 0Z"
                  fill="${skill.colorFront}"
                />
              </svg>
            </div>
          </article>`
  );
});
