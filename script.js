
gsap.set(".anim", { opacity: 0, y: 10 })
gsap.set("#shoes", { opacity: 0, y: 15, scale: 4 })


gsap.from("#left", {
    width: "0",
    duration: 2,
    ease: Expo.easeInOut

})
gsap.from("#right", {
    width: "0",
    duration: 1.1,
    delay: 1.4,
    ease: Expo.easeInOut,
})

gsap.to(".anim", {

    opacity: 1,
    y: 0,
    ease: Expo.easeOut,
    stagger: 0.2,
    duration: 2,
    delay: 1.5,
})

gsap.to("#shoes", {

    opacity: 1,
    ease: Expo.easeOut,
    scale:1,
    duration: 2,
    delay: 4,
})





gsap.from("#right #center #samples img",{

    delay:2,
    scale:2
})
document.querySelector("#right #shoes").addEventListener("mousemove", function () {
    document.querySelector("#right #shoes").style.transform = 'rotate(15deg)';
})
document.querySelector("#right #shoes").addEventListener("mouseleave", function () {
    document.querySelector("#right #shoes").style.transform = 'rotate(-28deg)';
})

