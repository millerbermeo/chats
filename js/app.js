//variables 

let btn1 = document.querySelector(".menu-amb ")
let sidebar = document.querySelector(".sidebar-menu ")
let home = document.querySelector(".dashboard-main")
let bodyElement = document.querySelector(".dashboard-main");



let btnInfo = document.querySelector(".btn-options")
let contentInfo = document.querySelector(".content-options")


//funcion para abrir y cerrar modal de opciones

btnInfo.addEventListener("click", () => {
    if (contentInfo.classList.contains("active")) {
        contentInfo.classList.remove("active")
    } else {
        contentInfo.classList.add("active")
    }
})
bodyElement.addEventListener("click", () => {
    if (contentInfo.classList.contains("active")) {
        contentInfo.classList.remove("active")
    }
})

//funcion para abrir y cerrar el sidebar

btn1.addEventListener("click", () => {

    sidebar.classList.toggle("active")
    home.classList.toggle("active")
    overlay.classList.toggle("active")
})


