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
isAnim = false;

pagination.forEach((radio, i) => {
  radio.onclick = function () {
    if (isAnim) {
      return;
    }
    current = i;
    DrawSlide(i);
  };
});

function DrawSlide(current) {
  isAnim = true;

  slider.lastElementChild.classList.remove("--new-slide");
  slider.lastElementChild.classList.add("--old-slide");

  slider.insertAdjacentHTML(
    "afterbegin",
    `<div class="slider-slide --new-slide">

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
            
          </div>`
  );
  setTimeout(() => {
    slider.firstElementChild.style.left = "0px";
  }, 400);

  setTimeout(() => {
    slider.lastElementChild.remove();
    slider.firstElementChild.classList.remove("--new-slide");
    isAnim = false;
  }, 1500);
  pagination[current].firstElementChild.checked = true;
}

DrawSlide(current);

left.onclick = () => {
  if (isAnim) {
    return;
  }
  current--;
  if (current == -1) {
    current = massSlides.length - 1;
  }
  DrawSlide(current);
};
right.onclick = () => {
  if (isAnim) {
    return;
  }
  current++;
  if (current == massSlides.length) {
    current = 0;
  }
  DrawSlide(current);
};

// let picture = document.getElementById("animation");

// picture.onclick = () => {
//   let start = Date.now();

//   function Anim(timePassed) {
//     picture.style.left = timePassed / 5 + "px";
//   }
//   const animationInterval = setInterval(() => {
//     let timePassed = Date.now() - start;
//     console.log("Прошло времени", timePassed);
//     if (timePassed >= 5000) {
//       clearInterval(animationInterval);
//       return;
//     }
//     Anim(timePassed);
//   }, 10);
// };

// 1. Создаем новый слайд левее с полурозрачностью
// 2. двигаем слайд вправо и делаем непрозрачным постепенно
// 3. Во время движения нового слайда делаем прозрачным старый
// 4. Удаляем старый слайд

// let textBlock = document.getElementById("text");

// const text =
//   "1. Создаем новый слайд левее с полурозрачностью 2. двигаем слайд вправо и делаем непрозрачным постепенно 3. Во время движения нового слайда делаем прозрачным старый 4. Удаляем старый слайд";

// function Random(min, max) {
//   return Math.floor(Math.random() * max) - min;
// }

// let i = 0;
// let random = Random(200, 500);
// const textInterval = setInterval(() => {
//   textBlock.insertAdjacentText("beforeend", text[i]);
//   i++;
//   if (i === text.length) {
//     clearInterval(textInterval);
//   }
//   random = Random(200, 500);
// }, random);
