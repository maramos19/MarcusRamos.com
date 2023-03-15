(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



let scrollDownTracker = 0;
window.addEventListener('scroll', () => {

    //User scrolled down
    if(document.documentElement.scrollHeight - window.innerHeight <= window.scrollY){
        scrollDownTracker ++;
        if(scrollDownTracker % 2 != 0){
            console.log("Scrolled Down");
        }
    }
});

