let noClicks = 0;

const noButton = document.getElementById("noButton");
const openButton = document.getElementById("openButton");
const yesBUtton = document.getElementById("yesButton");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");


noButton.onclick = function() {

    noClicks++;

    if (noClicks === 1) {
        noButton.style.fontSize = "25px";
        noButton.textContent = "No 🥺";
    }

    else if (noClicks === 2) {
        noButton.style.fontSize = "30px";
        noButton.textContent = "Ayaw ba 😭";
    }

    else if (noClicks === 3) {
        noButton.style.fontSize = "40px";
        noButton.textContent = "Ayaw lagiii😭💔";
    }

    else if (noClicks === 4) {
        noButton.style.fontSize = "50px";
        noButton.textContent = "Plsss 😭😭";
    }

    else if (noClicks === 5) {

        noButton.textContent = "NOOOOO 😭💔💔💔";

        noButton.style.position = "fixed";
        noButton.style.top = "0";
        noButton.style.left = "0";
        noButton.style.width = "100vw";
        noButton.style.height = "100vh";
        noButton.style.fontSize = "60px";
        noButton.style.zIndex = "1";

        // Keep OPEN button clickable
        openButton.style.position = "fixed";
        openButton.style.bottom = "30px"
        openButton.style.left = "50%";
        openButton.style.tansform = "translateX(-50%)";
        openButton.style.zIndex = "9999";
    }
};


/* OPEN BUTTON */

openButton.onclick = function() {

    page1.style.display = "none";
    page2.style.display = "flex";

};

openButton1.onclick = function(){
    page2.style.display = "none";
    page3.style.display = "flex";

}

let noClicks2 = 0;

const noButton2 = document.getElementById("noButton2");

noButton2.onclick = function(){
    noClicks2++;

     if (noClicks2 === 1) {
        noButton2.style.fontSize = "25px";
        noButton2.textContent = "No 🥺";
    }

    else if (noClicks2 === 2) {
        noButton2.style.fontSize = "30px";
        noButton2.textContent = "sure ka? 😭";
    }

    else if (noClicks2 === 3) {
        noButton2.style.fontSize = "40px";
        noButton2.textContent = "Really ha?! 😭💔";
    }

    else if (noClicks2 === 4) {
        noButton2.style.fontSize = "50px";
        noButton2.textContent = "NOOOO 😭😭";
    }

    else if (noClicks2 === 5) {
        noButton2.style.position = "fixed";
        noButton2.style.top = "0";
        noButton2.style.left = "0";
        noButton2.style.width = "100vw";
        noButton2.style.height = "100vh";
        noButton2.style.fontSize = "60px";
        noButton2.style.zIndex = "1";

        noButton2.textContent = "NOOOOO 😭❤️";

        yesButton.style.position = "fixed";
        yesButton.style.bottom = "30px";
        yesButton.style.left = "50%";
        yesButton.style.transform = "translateX(-50%)";
        yesButton.style.zIndex = "9999";
    }
};
yesButton.onclick = function() {
    page3.style.display = "none";
    page4.style.display = "flex";
}
