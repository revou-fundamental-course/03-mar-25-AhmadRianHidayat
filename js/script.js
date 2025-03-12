// ini file javascriptnya

// this code for slide show drawing contentme('drawing-banner')
let bannerIndex = 0;
const nextBanner = () => {
    bannerIndex += 1;
    showBanners();
    // console.log(bannerIndex)
}
// console.log(bannerIndex)
const showBanners = () => {
    const banners = document.getElementsByClassName('drawing-banner')

    if(bannerIndex >= banners.length){
        bannerIndex = 0;
    }

    //looping to all banner to give display none
    for(let i = 0; i < banners.length; i++){
        banners[i].style.display = 'none';
    }
    //show first banner
    banners[bannerIndex].style.display = 'block';
}
setInterval(() => {
    nextBanner()
}, 3000);

showBanners()

// this is for website page slide show
let bannerWebIndex = 0;
const nextWebBanner = () => {
    bannerWebIndex += 1;
    showWebBanners();
    // console.log(bannerWebIndex)
}
// console.log(bannerIndex)
const showWebBanners = () => {
    const webBanners = document.getElementsByClassName('web-banner')

    if(bannerWebIndex >= webBanners.length){
        bannerWebIndex = 0;
    }

    //looping to all banner to give display none
    for(let i = 0; i < webBanners.length; i++){
        webBanners[i].style.display = 'none';
    }
    //show first banner
    webBanners[bannerWebIndex].style.display = 'block';
}
setInterval(() => {
    nextWebBanner()
}, 3000);

showWebBanners()

// this is code for to top button
const btnToTop = document.getElementById('totop');

// this code for, when user scroll, the button will appear/disapear
window.onscroll = ()=>{scrollFunction()}
const scrollFunction = ()=>{
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
        btnToTop.style.display = "block";
    }else{
        btnToTop.style.display = "none"
    }
}

const doToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

btnToTop.addEventListener('click',()=>{doToTop()})

