let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle("active");
    console.log('Hello toggle');
}



document.querySelectorAll('.about .video-container .controls .control-btn').forEach(ele =>{
    ele.onclick = ()=>{
        let src = ele.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})