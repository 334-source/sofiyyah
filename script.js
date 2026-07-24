window.onload = function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2000);
};

function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "2011") {
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("mainPage").classList.remove("hidden");
        startConfetti();
    } else {
        document.getElementById("error").innerHTML = "Wrong password. Try again!";
    }
}

const birthday = new Date("August 19, 2026 14:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

function startConfetti() {

    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 3 + 1
        });
    }

    function draw() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#FFD700";

        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            p.y += p.d;

            if (p.y > canvas.height) {
                p.y = -10;
            }
        });

        requestAnimationFrame(draw);
    }

    draw();

}
