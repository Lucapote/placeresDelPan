const boton = document.querySelector(".nav__crossContainer");
const lineas = document.querySelectorAll(".nav__crossLinea");
const aside = document.querySelector(".layout__asideNav");

let cruz = false;
let visible = "aside__visible"

let esconder = ()=>{
    
    if(!cruz){
        cruz = true

        lineas.forEach((linea, index)=>{
        
            let mostrar = `clicked${index+1}`;
    
            linea.classList.add(mostrar)  
        })

        aside.classList.add(visible);
    }else{
        cruz=false;

        lineas.forEach((linea, index)=>{

            let mostrar = `clicked${index+1}`;

            linea.classList.remove(mostrar)

        })

        aside.classList.remove(visible)
    }
    
}

boton.addEventListener("click", esconder);

addEventListener("scroll", ()=>{
    lineas.forEach((linea, index)=>{
        
        let mostrar = `clicked${index+1}`;

        linea.classList.remove(mostrar)
    })

    cruz= false;
    
    aside.classList.remove(visible)
})

let index = true;

const imgProducto = document.querySelectorAll(".productos__img")
const navLinea = document.querySelectorAll(".nav__crossLinea");
window.addEventListener("load", ()=>{
    index = window.location.pathname === "/index.html"

    if(!index){
        navLinea.forEach(linea => linea.style.backgroundColor = "#302E2C")
    }
})

window.addEventListener("scroll", ()=>{
    const navBar = document.querySelector(".layout__nav");
    const navLink = document.querySelectorAll(".nav__link");
    const navLogo = document.querySelector(".nav__logo");
    const scrollPoition = window.scrollY;

    if(scrollPoition > 50){
        navBar.classList.add("scrolled")
        if(!index){
            
            navLink.forEach(link => link.style.color = "#FAFAF9");
            navLinea.forEach(linea => linea.style.backgroundColor = "#FAFAF9");
            navLogo.setAttribute("src", "/Img/soloLetras.svg");
        }
    }else{
        navBar.classList.remove("scrolled")
        if(!index){
            console.log(index);
            
            navLink.forEach(link => link.style.color = "#302E2C")
            navLinea.forEach(linea => linea.style.backgroundColor = "#302E2C")
            navLogo.setAttribute("src", "/Img/soloLetrasNegras.svg")
        }
    }
})