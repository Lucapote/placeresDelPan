// let logoContainer = document.querySelector(".banner__logoContainer");

// let hacerVisible = () => {
//     logoContainer.classList.add("visible")
//     console.log(elementos);
// } 


const observerCallBack = (entries, observer) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible")
            
            observer.unobserve(entry.target);
        }
    })
}

const observerOptions = {
    root: null, // usar el viewport como contenedor
    threshold: 0.1, // cuando al menos 10% del elemento es visible
    rootMargin: '0px'
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);

const elementos = document.querySelectorAll("[data-effect]");

elementos.forEach(elemento => {
    observer.observe(elemento)
})


// hacerVisible()