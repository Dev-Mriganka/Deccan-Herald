let btns = document.querySelectorAll("#subscribe_btn")
let emails = document.querySelectorAll("#subscriber_email")
let submits = document.querySelectorAll("#first_value")
let latest = document.querySelectorAll("#see-latest")
btns.forEach(el=>el.addEventListener("click", getData));
function getData(){
    console.log("X")
}


// sumits.forEach(el=>el.addEventListener("click", getData));
// function getData(){
//     console.log("y")
//     el.classList.toggle("show")
// }
for (let i = 0; i < submits.length; i++) {
    submits[i].addEventListener("click", function () {
        submits[i].classList.toggle("show")
        emails[i].classList.toggle("show")
        btns[i].classList.toggle("show")
        latest[i].classList.toggle("show")
    })
}