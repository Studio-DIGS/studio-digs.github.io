export function scroll(){

    //helper functions to change transforms, transitions not set here are set in the css files
    function scrollDownAnimation(){
        //animate title
        let title = document.querySelector(".title h1");
        title.style.transform = "translateY(-1000px)";

        //animate monkey gif
        let monkeyGif = document.querySelector(".monkey-gif");
        monkeyGif.style.transform = "translateY(-1000px)";

        //animate nav-title
        let nav_title = document.querySelector(".nav-title");
        nav_title.style.opacity = "1";
        nav_title.style.transform = "scale(1)";
        nav_title.style.transition = nav_transition;
    }

    function scrollUpAnimation(){
        //animate title
        let title = document.querySelector(".title h1");
        title.style.transform = "translateY(0em)";

        //animate monkey gif
        let monkeyGif = document.querySelector(".monkey-gif");
        monkeyGif.style.transform = "translateY(0em)";

        //animate nav-title
        let nav_title = document.querySelector(".nav-title");
        nav_title.style.opacity = "0";
        nav_title.style.transform = "scale(0.5)";
        nav_title.style.transition = "all 0.2s ease-in 0s";
    }


    let moveMonkey = false;
    let nav_title = document.querySelector(".nav-title");
    let nav_transition = nav_title.style.transition

    window.addEventListener("scroll", function() {
        let elementTarget = document.getElementsByClassName("scroll-from-top")[0];

        if(this.window.scrollY >= (elementTarget.offsetTop + elementTarget.offsetHeight + 50)){
            moveMonkey = true;
            console.log(moveMonkey)
            scrollDownAnimation()
        }else{
            moveMonkey = false;
            scrollUpAnimation()
        }
    });
}

