var settingsmenu=document.querySelector(".settings-menu");
var darkbtn=document.getElementById("dark-btn")
var notification=document.querySelector(".notifpop")
var massege=document.querySelector(".msmpop")
function increase() {
    var count=document.getElementById("counter")
    var value=count.innerHTML;
    ++value;
    document.getElementById("counter").innerHTML=value;

}

function settingsMenutoggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}
function notificationtoggle() {
    notification.classList.toggle("notifpop-height");
}
function massegetoggle() {
    massege.classList.toggle("msmpop-height");
}
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme")=="light")
    {
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light")
    }
}
if(localStorage.getItem("theme")=="light")
{
    darkbtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")

}
else if(localStorage.getItem("theme")=="dark")
{
    darkbtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")

}
else{
    localStorage.setItem("theme","light")
}
// localStorage.setItem("theme","dark");
// localStorage.getItem("theme")