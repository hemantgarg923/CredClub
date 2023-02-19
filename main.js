function scrollDiv() {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);
        if (window.scrollY < 700) {
            document.getElementById("pic").setAttribute("src", "fold1.png");
        }
        if (window.scrollY >= 700 && window.scrollY < 1400) {
            document.getElementById("pic").setAttribute("src", "fold2.png");
        }
        if (window.scrollY >= 1400 && window.scrollY < 2200) {
            document.getElementById("pic").setAttribute("src", "fold3.png");
        }
        if (window.scrollY >= 2200) {
            document.getElementById("pic").setAttribute("src", "fold4.png");
        }
    })
}

scrollDiv();