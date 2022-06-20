
let plus = document.querySelectorAll(".toggle")
let show = document.querySelectorAll(".side-dropdown")
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", function () {
        show[i].classList.toggle("show")
        show.forEach(el => {
        if (el != show[i]) { 
            el.classList.remove("show")
        }
    })
    })
}
    
let sideNav = document.querySelector(".nav-hamburger")
sideNav.addEventListener("click", () => { 
    document.querySelector("#side-nav").classList.toggle("open")
    document.querySelector(".side-nav-overlay").classList.toggle("overlay-active")
})

let cross = document.querySelector(".side-nav__close")
cross.addEventListener("click", () => { 
    document.querySelector("#side-nav").classList.remove("open")
    document.querySelector(".side-nav-overlay").classList.toggle("overlay-active")
})
let overlay = document.querySelector(".side-nav-overlay")
overlay.addEventListener("click", () => { 
    document.querySelector("#side-nav").classList.remove("open")
    document.querySelector(".side-nav-overlay").classList.toggle("overlay-active")
})


        window.addEventListener('scroll', function () {
            let header = document.querySelector('#top-nav');
            let windowPosition = window.scrollY > 10;
            // header.classList.toggle('scrolling-active', windowPosition);
            document.querySelector(".navbar").classList.toggle('after-scroll', windowPosition);
        })
window.onload = () => {
    let rtClock = new Date()
    let hours = rtClock.getHours()
    let minutes = rtClock.getMinutes()
    let amPm = (hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    document.querySelector("#real-time").innerText = "UPDATED: " + hours + ":" + minutes + " " + amPm + " IST"
    
        switch (new Date().getDay()) {
    case 0:
        day = "SUNDAY";
        break;
    case 1:
        day = "MONDAY";
        break;
    case 2:
        day = "TUESDAY";
        break;
    case 3:
        day = "WEDNESDAY";
        break;
    case 4:
        day = "THURSDAY";
        break;
    case 5:
        day = "FRIDAY";
        break;
    case 6:
        day = "SATURDAY";
    }

    let month = rtClock.getMonth()+1;
    switch(month){
        case 1: b = "JAN";
            break;
        case 2: b = "FEB";
            break;
        case 3: b = "MAR";
            break;
        case 4: b = "APR";
            break;
        case 5: b = "MAY";
            break;
        case 6: b = "JUN"; 
            break;
        case 7: b = "JUL";
            break;
        case 8: b = "AUG";
            break;
        case 9: b = "SEP";
            break;
        case 10: b = "OCT";
            break;
        case 11: b = "NOV";
            break;
        case 12: b = "DEC";
            break;
        }
    let year = rtClock.getFullYear();
    let date = rtClock.getDate();

    document.querySelector("#real-date").innerText =day+" " + date + " " + b+" "+year
}

$(document).ready(function() {
     
		    $(".fi-br-search").click(function() {
		       $(".search-box").toggle();
		       $("input[type='text']").focus();
		     });
 
 		});
