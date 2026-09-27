const rateButtons = document.querySelectorAll(".rating button");
const submit = document.getElementById("submit");
const rateForm = document.getElementById("rate-form");
let rate = 0;
rateButtons.forEach(btn => btn.addEventListener("click", (e) => {
    rate = +e.currentTarget.textContent;
    removeCheckedClass(rateButtons);
    e.currentTarget.classList.add("ch")
}));

function removeCheckedClass(buttons) {
    buttons.forEach(btn => btn.classList.remove("ch"))
}

rateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(rateForm);
    formData.set("rate", rate);

    document.getElementById("rate-card").style.display = "none";
    document.getElementById("thanks-card").style.display = "flex";
    document.getElementById("rate").textContent = formData.get("rate");
})