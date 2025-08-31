const btn = document.getElementById("changeBtn");
const cc = document.getElementById("colorCode");

// ab main kaam kam
btn.addEventListener('mousemove', function () {
    let randomColor = "#" + Math.floor( Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    cc.textContent= " Current Color:  " + randomColor;
})
    