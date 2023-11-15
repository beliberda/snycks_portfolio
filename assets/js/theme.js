

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