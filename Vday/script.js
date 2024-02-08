
const buttontest=document.querySelector('#yes');
const buttontest2=document.querySelector('#no');
const hearts = document.querySelector("#t1");
const yes = document.querySelector("#yay");

buttontest.addEventListener("click",()=>{
    yes.style.display= 'block';
});
buttontest2.addEventListener("mouseover",()=>{
    buttontest2.style.left = Math.floor(Math.random() * 90) + 1 + '%'
    buttontest2.style.top = Math.floor(Math.random() * 90) + 1 + '%'
})



