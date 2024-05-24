let typed=new Typed(".text",{
    strings: ["Frontend Developer.","Software Developer."],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});
let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");
let sidemenu=document.getElementById("sidemenu");
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzGzzNEDUU3QotTWM8HQAYiPN4stFuOkaaNM9qOlBdziZvwB6mzh8okNn1CBrTwF-fs/exec';
const form = document.forms['submit-to-google-sheet'];
const msg=document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent Successfully";
        setTimeout(function(){
            msg.innerHTML="";
        },3000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
