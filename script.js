const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector('#back-to-top').addEventListener("click",function(){
    scroll.scrollTo(0)
})

tl=gsap.timeline()


tl.to('#loader1',{
    top:'-100%',
    delay:.2,
    duration:.3
})
tl.to('#loader h1',{
    delay:.6,
    duration:.3,
    color:'Black'
})
tl.to('#loader video',{
    top:'-200vh',
    delay:.2,
    duration:.2
})
tl.to('#loader',{
    opacity:0,
    display:'None'
})


elem=document.querySelectorAll('#elem')
page2=document.querySelector('#page2')
// console.log(elem)
elem.forEach((e) => {
    console.log(e)
    e.addEventListener('mouseenter',function(){
        bgimg=e.getAttribute('data-img')
        // console.log(bgimg)
        page2.style.background=`url(${bgimg})`
        page2.style.backgroundSize='Cover'
        page2.style.backgroundPosition='Center'
    })
});