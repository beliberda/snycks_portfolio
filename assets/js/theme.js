

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



function replaceTemplateAttribute(product, template) {
    const attributeMass = [
        {
            title: "name",
            text: "{название товара}"
        },
        {
            title: "category",
            text: "{категория товара}"
        },
        {
            title: "size",
            text: "{размер товара}"
        },
        {
            title: "url",
            text: "{ссылка на товар}"
        },
    ]

    attributeMass.forEach(element => {
        let temp
        for (const key of Object.keys(product)) {
            if (key === element.title) {
                temp = product[key]
                console.log("temp", temp);
                break
            }
        }
        template = template.replace(element.text, temp)
    });
    return template

}

product = {
    name: "Джинсы",
    size: "XXL",
    category: "худи",
    url: "https://youtube.com"
}
template = "{название товара} супер пупер {категория товара} размера {размер товара}, доступен по ссылке {ссылка на товар}"
console.log(replaceTemplateAttribute(product, template));