const path = window.location.pathname
const imagenContainer = document.querySelectorAll(".productos__img")

const dulce = [
    "/Img/galeriaDulce1Filtro.jpeg",
    "/Img/galeriaDulce7Filtro.jpeg",
    "/Img/galeriaDulce3Filtro.jpeg",
    "/Img/galeriaDulce4Filtro.jpeg",
    "/Img/galeriaDulce2Filtro.jpeg",
    "/Img/galeriaDulce5Filtro.jpeg",
    "/Img/galeriaDulce8Filtro.jpeg",
    "/Img/galeriaDulce6Filtro.jpeg",
]
const salado = [
    "/Img/galeriaSalado1Filtro.jpg",
    "/Img/galeriaSalado8Filtro.jpg",
    "/Img/galeriaSalado5Filtro.jpg",
    "/Img/galeriaSalado3Filtro.jpg",
    "/Img/galeriaSalado4Filtro.jpg",
    "/Img/galeriaSalado6Filtro.jpg",
    "/Img/galeriaSalado7Filtro.jpg",
    "/Img/galeriaSalado2Filtro.jpg",
]

const dondeEstoy = () => {
    console.log(imagenContainer);

    imagenContainer.forEach((imagen, index) => {
        if(path.includes("dulce")){
            imagen.style.backgroundImage = `url(${dulce[index]})`
        }else if(path.includes("salado")){
            imagen.style.backgroundImage = `url(${salado[index]})`
        }
    })
}

dondeEstoy()