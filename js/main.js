function Main() {
    let banner = document.querySelector('.banner')
    let dayNight = document.querySelector('.dayNight')

    dayNight.onclick = function() {
        banner.classList.toggle('night')
    }
    let typingText = new Typed("#text", {
        strings : ["Axel", "Coder"],
        loop : true,
        typeSpeed : 80,
        backSpeed : 80,
        backDelay : 1500,
    })
}