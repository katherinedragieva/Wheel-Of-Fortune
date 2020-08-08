function spin () {
    let x = 1024;
    let y = 9999;
    let deg = Math.floor(Math.random() * (x - y)) * y; 
    let mainbox = document.getElementById("outer-box");

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";
    mainbox.classList.remove("animate");

    setTimeout(() => {
        mainbox.classList.add("animate");
    }, 2000)
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("showcase").style.display = "flex";
    document.getElementById("outer-box").style.display="block";
}
setTimeout(showPage, 2000);