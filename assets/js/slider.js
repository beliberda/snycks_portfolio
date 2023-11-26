massSlides = [
  {
    title: "Бабочка",
    text: "Бабочка - это К.Р.У.Т.О",
    link: "",
    url: "./assets/images/portfolio/butter.jpg",
  },
  {
    title: "Капибара",
    text: "А может лучше КАРБЮРАТОР?",
    link: "",
    url: "./assets/images/portfolio/CAPIBARA.jpg",
  },
  {
    title: "Это Джо Джо референс",
    text: "Невероятные приключения ДжоДжо, часто сокращаемая до JoJo или JJBA, - это франшиза манги и аниме, жанра Сёнэн и Сэйнэн, которая повествует о приключениях членов семьи Джостаров в разных поколения",
    link: "https://animego.org/anime/neveroyatnoe-priklyuchenie-dzhodzho-nesokrushimyy-almaz-988",
    url: "./assets/images/portfolio/jojo.jpg",
  },
  {
    title: "Зима близко",
    text: "Winter is coming",
    link: "",
    url: "./assets/images/portfolio/winter.jpg",
  },
];

let left = document.getElementById("left-slide");
let right = document.getElementById("right-slide");
let slider = document.querySelector(".slider");

let pagination = document.querySelector(".slider-pagination");

for (let i = 0; i < massSlides.length; i++) {
  pagination.insertAdjacentHTML(
    "beforeend",
    `<label class="radio-slide">
            <input type="radio" name="slider" />
            <span></span>
          </label>`
  );
}
pagination = document.querySelectorAll(".radio-slide");
let current = 0;
pagination.forEach((radio, i) => {
  radio.onclick = function () {
    current = i;
    DrawSlide(i);
  };
});

function DrawSlide(current) {
  slider.innerHTML = `<div class="slider-slide">

            <img
              src="${massSlides[current].url}"
              alt=""
              class="slider__project-image"
            />
            <main class="slider-main">
              <h2 class="slider-main__title">${massSlides[current].title}</h2>
              <p class="slider-main__text">
                ${massSlides[current].text}
              </p>
              <button class="btn-demo"><a target="_blank" href="${massSlides[current].link}">Demo</a></button>
            </main>
            
          </div>`;
  pagination[current].firstElementChild.checked = true;
}

DrawSlide(current);

left.onclick = () => {
  current--;
  if (current == -1) {
    current = massSlides.length - 1;
  }
  DrawSlide(current);
};
right.onclick = () => {
  current++;
  if (current == massSlides.length) {
    current = 0;
  }
  DrawSlide(current);
};
