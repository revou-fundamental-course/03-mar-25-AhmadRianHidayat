// ini file javascriptnya

let userName = document.getElementById('userName')
let userNameInput = prompt("Hello what is your name? ",)
if (!userNameInput){
    userName.textContent = "There";
}else{
    userName.textContent = userNameInput;
}

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

// this code for form handling
let inputName = document.getElementById('name');
let inputBirthday = document.getElementById('birthday');
let inputGender = document.getElementsByName('gender');
let inputTextArea = document.getElementById('messageMe');

// this is for output handling
let nameOutput = document.getElementById('nameOutput');
let dateOutput = document.getElementById('birthdayOutput');
let genderOutput = document.getElementById('genderOutput');
let textAreaOutput = document.getElementById('messageOutput')

let btnSubmit = document.getElementById('btnSubmit');

const submitValue = () => {
    // this code for, when i submit form, the website doesn't reload
    event.preventDefault()

    const errorMessage = []
    let isValid = true;

    // this is for name 
    if(inputName.value === ""){
        errorMessage.push("Name must be fill out!");
        isValid = false;
    }

    // this is for date
    if(inputBirthday.value === ""){
        errorMessage.push("Birthday must be fill out!")
        isValid = false;
    }

    // this is for gender
    let indexRadio = -1;
    for(let i = 0; i < inputGender.length; i++){
        if(inputGender[i].checked === true){
            indexRadio = i;
            break
        }
    }
    if(indexRadio === -1){
        errorMessage.push("Gender must be selected!")
        isValid = false;
    }

    // console.log(indexRadio)
    // inputGender[indexRadio].checked = false;

    // this is for text area
    if(inputTextArea.value === ""){
        errorMessage.push("Message must be fill out!")
        isValid = false;
    }

    if(!isValid){
        alert(errorMessage.join("\n"));
    }

    // this is to reset value when success
    if(isValid){
        // set value when user already fill all the input

        nameOutput.textContent = inputName.value;
        dateOutput.textContent = inputBirthday.value;
        genderOutput.textContent = inputGender[indexRadio].value;
        textAreaOutput.textContent = inputTextArea.value;
        // formContainer.style.display = "flex";

        //reset when succes
        inputName.value="";
        inputBirthday.value="";
        if(indexRadio !== -1){
            inputGender[indexRadio].checked = false;
        }
        inputTextArea.value="";
    }
}
btnSubmit.addEventListener('click',()=>{submitValue()})
// console.log(btnSubmit)