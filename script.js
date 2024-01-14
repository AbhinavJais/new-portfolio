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



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});