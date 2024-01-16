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


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});