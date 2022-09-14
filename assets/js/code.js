let count = document.getElementById("skor");
let artı = document.querySelector(".arttır");
let eksi = document.querySelector(".azalt");
let reset = document.querySelector(".reset");

let integer = 0;
artı.addEventListener("click", function () {
    integer += 1;
    count.innerHTML = integer;

})
eksi.addEventListener("click", function () {
    integer -= 1;
    count.textContent = integer;
})
reset.addEventListener("click", function () {
    integer = 0;
    count.textContent = integer;
})


