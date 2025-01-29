/*===== Scroll Reveal Animation*/
function LoadIndexAnimation() {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200
    });

    sr.reveal('.index-card',{});
    
    setTimeout(function() {
        window.location.href = "html/main.html";
    }, 5000);
}

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