const colors = [0, 0, 0,];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const Counter = document.getElementById("counterid");
let count = 0;

btn.addEventListener('click', function() {
    // get a random color and turns it into a random color
    const RandomColor = getRandomColor(255);
    count++;
    Counter.innerHTML = "Number of counts: " + count;
    // console.log(RandomColor);
    document.body.style.backgroundColor = "rgb("+colors[0]+","+colors[1]+","+colors[2]+")";
    color.textContent = RandomColor;
});

function getRandomColor(max) {
    colors[0] = Math.floor(Math.random() * max);
    colors[1] = Math.floor(Math.random() * max);
    colors[2] = Math.floor(Math.random() * max);
    return "rbg("+colors+")";
}
