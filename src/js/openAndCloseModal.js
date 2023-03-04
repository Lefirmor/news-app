const modal = document.querySelector(".menu_mob_btn")
const backdrop = document.querySelector(".backdrop")

modal.addEventListener("click", e => {
    backdrop.classList.remove("is-hidden")
})
//