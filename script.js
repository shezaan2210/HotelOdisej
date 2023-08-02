function init(){
    gsap.registerPlugin(ScrollTrigger);
  
//   Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }
  init();






gsap.to(`#main>svg`,{
    scale:.5,
    scrollTrigger:{
        trigger:`#main`,
        scroller:`#main`,
        start:`top top`,
        end:`13% 20%`,
        // markers:true,
        scrub:2,
        
    },
   
})

var tl = gsap.timeline()

tl.from(`#page1>img`,{
    scale:.5,
    delay:.5,
    duration:1.5,
    ease:Power4.easeOut,
})

.from(`#main>svg`,{
    opacity:0,
    y:-50,
    duration:.8,
    delay:-0.4

})
.from(`#nav`,{
    opacity:0,
    y:-50,
    duration:.8,


})

gsap.to(`#page2>#btm1, #page2>#btm2`,{
    scrollTrigger:{
        trigger:`#page2`,
        scroller:`#main`,
        start:`90% bottom`,
        end:`150% 20%`,
        // markers:true,
        scrub:true,
        
    },
    transform: `translate(-20%)`,
    duration:5

})

var clutter = " ";
document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`
document.querySelector("#page2>h1").innerHTML = clutter;


});

gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1`,
        start:`20% bottom`,
        end:`60% top`,
        scroller:`#main`,
        scrub:4,
        // markers:true,
        
    },
    stagger:.3,
    color:`#E3E3C4`,
    ease:Power4.easeOut,
})

var clutter = " ";
document.querySelector("#page3>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`
document.querySelector("#page3>h1").innerHTML = clutter;


});

gsap.to("#page3>h1>span",{
    scrollTrigger:{
        trigger:`#page3>h1`,
        start:`30% 80%`,
        end:`60% 30%`,
        scroller:`#main`,
        scrub:2,
        // markers:true,
        
    },
    stagger:.3,
    color:`#434B33`,
    ease:Power4.easeOut,
})

var box = document.querySelector(`#page4>#container>.elem`);

var h3 = document.querySelector(`#container>.elem>h3`);


// box.forEach(function(){

// })

       // h3.innerHTML = ` <i class="ri-arrow-right-line"></i>`
        // h3.style.color = `#fff`
        // h3.style.backgroundColor = `#434b33`




 // h3.innerHTML = `01`
        // h3.style.color = `#e3e3c4`
        // h3.style.backgroundColor = `#434b33`




tl.from(`#page3>#container>#one`,{
    scrollTrigger:{
        trigger:`#page3>#container>#one`,
        start:`10% 80%`,
        end:`60% 30%`,
        scroller:`#main`,
        scrub:2,
        // markers:true,
    },
    opacity:0,
    y:50


})   

.from(`#page3>#container>#two`,{
    scrollTrigger:{
        trigger:`#page3>#container>#two`,
        start:`10% 80%`,
        end:`60% 30%`,
        scroller:`#main`,
        scrub:2,
        // markers:true,
    },
    opacity:0,
    y:50


})  

tl.from(`#page3>#container>#three`,{
    scrollTrigger:{
        trigger:`#page3>#container>#three`,
        start:`10% 80%`,
        end:`60% 30%`,
        scroller:`#main`,
        scrub:2,
        // markers:true,
    },
    opacity:0,
    y:50


})  

gsap.from(`#page4>#container>.elem`,{
    opacity:0,
    y:50,
    scrollTrigger:{
        trigger:`#page4>#container>.elem`,
        start:`10% 80%`,
        end:`60% 30%`,
        scroller:`#main`,
        scrub:2,
        markers:true,
       
    },
    // stagger:.2,
   


})  

