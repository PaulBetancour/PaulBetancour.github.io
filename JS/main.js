function filterSelection(category) {
    let skills = document.getElementsByClassName("skill");

    for (let i = 0; i < skills.length; i++) {
        skills[i].style.display = "none";

        if (category === "all" || skills[i].classList.contains(category)) {
            skills[i].style.display = "inline-block";
        }
    }
}
