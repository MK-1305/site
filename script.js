
const loading = document.getElementById("loading");
const loadingScreen = document.querySelector('#loading-screen');
const loadingLogo = document.querySelector('#loading-logo background-image');

console.log(loading);

window.addEventListener('load', () => {
    loading.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 3000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards'
        }
    )
    loadingScreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: "ease",
            fill: "forwards",
        }
    );
});




