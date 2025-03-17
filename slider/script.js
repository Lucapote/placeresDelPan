let windowWith, widthCarrousel = 0;
let gap = 40;
let contenedorCarrusel = document.querySelector(".carrousel");
let carrouselVia = document.querySelector(".carrousel__via");
let imagenes = document.querySelectorAll(".imagen");

const anchoImg = (widthCarrousel, gaps) =>{
    if(calcularCantidadImagenes(widthCarrousel) === 1) return 200
    return (widthCarrousel - (gap * gaps)) / calcularCantidadImagenes(widthCarrousel)
}

const calcularCantidadImagenes = (widthCarrousel) => {
   if (widthCarrousel >= 945) return 4
   if (widthCarrousel >= 688) return 3
   return 1 
}

const calcularGaps = (cantImg) => {
    if (cantImg === 4 || cantImg === 3) return cantImg - 1
    return 0
}

addEventListener("resize", (e)=> {
    windowWith = screen.width;
    widthCarrousel = contenedorCarrusel.clientWidth;
    
    console.log(`${windowWith} , ${widthCarrousel}, ${anchoImg(widthCarrousel, calcularGaps(calcularCantidadImagenes(widthCarrousel)))}, ${calcularCantidadImagenes(widthCarrousel)}`); 
    // console.log(calcularCantidadImagenes(widthCarrousel));
    // console.log(calcularGaps(calcularCantidadImagenes(widthCarrousel)));
    
    
    if(calcularCantidadImagenes(widthCarrousel) !== 1){
        // carrouselVia.style.width = "fit-content"
        imagenes.forEach(imagen => {
            imagen.style.width = `${anchoImg(widthCarrousel, calcularGaps(calcularCantidadImagenes(widthCarrousel)))}px`;
            imagen.style.height = `${anchoImg(widthCarrousel, calcularGaps(calcularCantidadImagenes(widthCarrousel)))}px`;
        })
    }else{
        imagenes.forEach(imagen => {
            imagen.style.width = "200px";
            imagen.style.height = "200px";
        })
    }
})

addEventListener("DOMContentLoaded", (e)=> {
    windowWith = screen.width;
    widthCarrousel = contenedorCarrusel.clientWidth;

    imagenes.forEach(imagen => {
        imagen.style.width = `${anchoImg(widthCarrousel, calcularGaps(calcularCantidadImagenes(widthCarrousel)))}px`;
        imagen.style.height = `${anchoImg(widthCarrousel, calcularGaps(calcularCantidadImagenes(widthCarrousel)))}px`;
    })
})