
let catMood = "";
let catImage = document.getElementById("cat");

function buttonEnd1() {
    catMood = "happy";

    catImage.src = "images/cat-tummy.png";

    document.getElementById("story").innerHTML =
        "The cat purrs as you pet its fur!";

    document.getElementById("part1").style.display = "none";
    document.getElementById("part2").style.display = "block";

    document.getElementById("followup").innerHTML =
        "The cat loves you! It wants more pets.";
}

function buttonEnd2() {
    catMood = "excited";

    catImage.src = "images/cat-happy.png";

    document.getElementById("story").innerHTML =
        "The cat eagerly devours the treat!";

    document.getElementById("part1").style.display = "none";
    document.getElementById("part2").style.display = "block";

    document.getElementById("followup").innerHTML =
        "The cat is now your biggest fan!";
}

function revealNext() {
    catMood = "sleepy";

    catImage.src = "images/cat-sleep.png";

    document.getElementById("story").innerHTML =
        "You give the cat some space, and it curls up for a nap.";

    document.getElementById("part1").style.display = "none";
    document.getElementById("part2").style.display = "block";

    document.getElementById("followup").innerHTML =
        "The cat is peacefully dreaming of fish.";
}


function resetCafe() {
    if (catMood == "happy") {
        catImage.src = "images/cat-laying.png";
        document.getElementById("story").innerHTML =
            "Welcome back! The cat remembers your relaxing pets.";
    } else if (catMood == "excited") {
        catImage.src = "images/cat-laying.png";

        document.getElementById("story").innerHTML =
            "Welcome back! The cat is hoping for another treat.";
    } else if (catMood == "sleepy") {
        catImage.src = "images/cat-sleep.png";
        document.getElementById("story").innerHTML =
            "Welcome back! The cat is still enjoying its nap.";
    }

    document.getElementById("part1").style.display = "block";
    document.getElementById("part2").style.display = "none";
}