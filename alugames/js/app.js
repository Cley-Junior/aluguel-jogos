function alterarStatus(id) {
    //Can use querySelector searching for the class
    let field = document.getElementById(`game-${id}`).querySelector("a");
    let imageField = document.getElementById(`game-${id}`).querySelector("div");

    if (field.innerHTML == "Alugar") {
        field.innerHTML = "Devolver";
        field.classList.add("dashboard__item__button--return");
        imageField.classList.add("dashboard__item__img--rented");
    } else if (field.innerHTML == "Devolver") {
        field.innerHTML = "Alugar";
        field.classList.remove("dashboard__item__button--return");
        imageField.classList.remove("dashboard__item__img--rented");
    }
}