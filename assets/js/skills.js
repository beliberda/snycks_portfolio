let skillsMass = [
  {
    title: "HTML",
    img: "./assets/images/icons/skill-html.svg",
    lvl: 80,
    color1: "#F4B76E",
    color2: "#CC985B",
  },
  {
    title: "CSS",
    img: "./assets/images/icons/skill-html.svg",
    lvl: 70,
    color1: "#84B1DB",
    color2: "#CDE7FF",
  },
  {
    title: "JS",
    img: "./assets/images/icons/skill-html.svg",
    lvl: 40,
    color1: "#FFFCB6",
    color2: "#EDE98B",
  },
];

let skillsList = document.querySelector(".gape-skills__skills-list");

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
              <h4 class="skill-item__level">${skill.lvl}%</h4>
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
                  fill="${skill.color2}"
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
                  fill="${skill.color1}"
                />
              </svg>
            </div>
          </article>`
  );
});
