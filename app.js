// let toggle=document.querySelector(".menu-toggle");
// toggle.addEventListener("click",()=>{
//     doToggle();
// })
// function doToggle(){
//     let scroll=document.getElementById("main-nav-wrap");
//     console.log("working");
//     setTimeout(()=>{
//     if(scroll.style.display!=="none"){

//         scroll.style.display="none";
//     }else{
//         scroll.style.display="block";
//     }},250);

// }
let toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
    doToggle();
});

function doToggle() {
    let scroll = document.getElementById("main-nav-wrap");
    scroll.classList.toggle("nav-active"); // Toggle the class for visibility
}
