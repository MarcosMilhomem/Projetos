const imgs = ["thanos", "card", "exfisico", "cardV", "maofogo", "bolafogo", "thanosPaula", "igreja", "excursao", "transform", "morroGelo", "ram", "edition", "burguer", "otrosa", "pao", "viagem", "convite", "dentist", "agenda", "pastel", "pizza", "futebol", "Mfogo", "pizzaLK", "burguerLK", "acaiLK", "fire", "thanosY", "transformugly", "BF", "mockup", "transformV", "emagrece", "espinha", "nvblue"]
const modalWork = document.querySelector(".modal-work")

imgs.forEach(function (name, index) {
    const img = document.getElementsByClassName("work-" + name)[0]

    img.addEventListener("click", (e) => {
        const clone = img.cloneNode(true)

        modalWork.innerHTML = "";
        modalWork.classList.add("open")
        modalWork.appendChild(clone)
    })
})

document.addEventListener("click", (e) => {
    console.log(e);
    if (e.target == modalWork) {
        modalWork.classList.remove("open")
    }
})