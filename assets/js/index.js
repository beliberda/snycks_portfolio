

let light = document.getElementById("light")

console.log(light);

light.onclick = function () {

    if (light.checked) {
        Object.assign(document.documentElement, {
            style: `--text-primary: black;`,
        });
    }
    else {
        Object.assign(document.documentElement, {
            style: `--text-primary: #4062a7;`,
        });
    }


}
// let title_h2 = document.querySelectorAll("h2")

// console.log(title_h2[2]);

// title_h2[2].innerHTML = " dfwqedfwe"

// let check = document.getElementById("light")
// let light = document.getElementsByClassName("light")
// // console.log(classes);

// Object.assign(document.documentElement, {
//     style: `--text-primary: black;`,
// });

