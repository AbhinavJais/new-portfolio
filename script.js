var header = document.querySelector(".navbar")
const menunav = document.querySelector(".navbar button")
const fullscr = document.querySelector(".full-scr")
const clos = document.querySelector(".close")
const clos1 = document.querySelector(".close1")
const clos2 = document.querySelector(".close2")
const clos3 = document.querySelector(".close3")
var flag = 0


//for page reloding
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

//for the menu toggle  
menunav.addEventListener("click", () => {
    if(flag == 0){
        console.log("clicked")
        fullscr.style.top = 0
        flag = 1
    }
    else{
        console.log("clicked again")
        fullscr.style.top = "-100%"
        flag = 0
    }
})

//for the menu options closing
clos.addEventListener( "click" , ()=>{
    console.log("clicked")
    fullscr.style.top = "-100%"
    flag= 0
})

clos1.addEventListener( "click" , ()=>{
    console.log("clicked")
    fullscr.style.top = "-100%"
    flag= 0
})

clos2.addEventListener( "click" , ()=>{
    console.log("clicked")
    fullscr.style.top = "-100%"
    flag= 0
})

clos3.addEventListener( "click" , ()=>{
    console.log("clicked")
    fullscr.style.top = "-100%"
    flag= 0
})


window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})

//gsap code
var tl = gsap.timeline();

tl.from(".navbar h4, .leftsidenav",{
    y: 20,
    delay:.7,
    opacity: 0,
    stagger:0.1,
})
tl.from("#center",{
    y: 20,
    opacity: 0,
    stagger:0.2,
})

gsap.from("#projectpage h1, .project-content",{
    y:100,
    opacity:0,
    delay: 1,
    scrollTrigger:{
        trigger:"#projectpage",
        trigger:".project-content",
        scroller:"body",
        // markers:true,
        start:"50",
        end:"600",
        scrub:4,
    }
})

gsap.from("#skillspage h1, .skills-content",{
    y:100,
    opacity:0,
    delay: 1,
    scrollTrigger:{
        trigger:"#skillspage",
        trigger:".skills-content",
        scroller:"body",
        // markers:true,
        start:"680",
        end:"1250",
        scrub:2,
    }
})

// text suffling code -->

const text = baffle('.left h3');

text.set({
    character:'',
    speed: 120,
})
text.start();
text.reveal(4000);








// ScrollTrigger.addEventListener("refresh",() => 
// locoScroll.update());

// ScrollTrigger.refresh();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main",{
//         scrollTop(value){
//         return arguments.length?locoScroll.scrollTo(value,0,0):locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect(){
//             return{top:0, left:0, width:widow.innerWidth, height:window.innerHeight};
//     },
//     pinType: document.querySelector("#main").style.transform?"transform" : "fixed"
// })
