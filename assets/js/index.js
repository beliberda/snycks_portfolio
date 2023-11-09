

let light = document.getElementById("light")
let background = document.querySelector("body")

light.onclick = function () {

    if (light.checked) {
        Object.assign(document.documentElement, {
            style: `--text-primary: white;`,
        });
        background.style.backgroundImage = "url('./assets/images/background-dark.png')"
    }
    else {
        Object.assign(document.documentElement, {
            style: `--text-primary: #4062a7;`,
        });
        background.style.backgroundImage = null

    }


}


let qualificList = document.querySelector(".qualification-list")
let educationList = [
    {
        title: "Aboba",
        place: "Мухосранск",
        date: "1800 - 1812"
    },
    {
        title: "Booba",
        place: "Йошкар-Ола",
        date: "1800 - 1812"
    }
]
for (let i = 0; i < educationList.length; i++) {
    qualificList.insertAdjacentHTML("beforeend", `<article class="qualification-item"><h4>${educationList[i].title}</h4><footer class="qualification-item__bottom"><h5>${educationList[i].place}</h5><div class="qualification-item__date"><img src="./assets/images/icons/calendar.svg" alt="" /><h6>${educationList[i].date}</h6></div></footer></article > `)
}

let workList = [
    {
        title: "Boba",
        place: "Шлёппинск",
        date: "1800 - 1812"
    },
    {
        title: "Dart Vader",
        place: "Усть Кузминск",
        date: "1800 - 1812"
    }
]






let work = document.getElementById("work")
let education = document.getElementById("education")

education.classList.add("--qualification-active")


work.addEventListener("click", function () {
    work.classList.add("--qualification-active")
    education.classList.remove("--qualification-active")

    qualificList.innerHTML = ""
    workList.forEach(element => {
        qualificList.insertAdjacentHTML("beforeend", `<article class="qualification-item"><h4>${element.title}</h4><footer class="qualification-item__bottom"><h5>${element.place}</h5><div class="qualification-item__date"><img src="./assets/images/icons/calendar.svg" alt="" /><h6>${element.date}</h6></div></footer></article > `)
    });

})
education.addEventListener("click", function () {
    education.classList.add("--qualification-active")
    work.classList.remove("--qualification-active")

    qualificList.innerHTML = ""
    for (let i = 0; i < educationList.length; i++) {
        qualificList.insertAdjacentHTML("beforeend", `<article class="qualification-item"><h4>${educationList[i].title}</h4><footer class="qualification-item__bottom"><h5>${educationList[i].place}</h5><div class="qualification-item__date"><img src="./assets/images/icons/calendar.svg" alt="" /><h6>${educationList[i].date}</h6></div></footer></article > `)
    }
})