let mainHeight = $(".main").height();
let windowHeight = $(window).height();
const pos1 = 0, pos2 = 90, pos3 = 180, pos4 = 230;
let i = 0;
console.log(mainHeight, windowHeight, mainHeight/windowHeight);
let myInterval;
let timerSet = false;
let hueAngle = 0;

const factorDefault = .3;
let factor = factorDefault;



$( window ).scroll(function() {
    if(!timerSet && (!($(window).scrollTop() === 0) || ($(window).scrollTop() === mainHeight - windowHeight))) {
        i = 0;
        myInterval = setInterval(logNumber, 1);
    }
    console.log($(window).scrollTop());
    
    if($(window).scrollTop() < windowHeight/2) {
    console.log("sichbar");
    $(".heading").hide();
    $(".top-navigation").css("justify-content", "center");
    $(".side-navigation").css("justify-content", "flex-end");
}
else {
    $(".heading").fadeIn("slow")
    $(".top-navigation").css("justify-content", "space-between");
    $(".side-navigation").css("justify-content", "space-between");
}
});


function logNumber() {
    if(i <= 400)  {
    i++;
    
    hueAngle-=factor;
    factor /= 1.01;
    //console.log(i);
    //console.log(factor);
    $(".main").css("filter", `hue-rotate(${hueAngle%360}deg)`)
    timerSet = true;
    }
    else {
        clearInterval(myInterval);
        timerSet = false;
        factor = factorDefault;
    }

}



//---------------------------------------title-hide--------------------------
