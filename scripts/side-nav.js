let menuOpen = false;

function toggleMenu () {
    $(".side-nav-items-toggle").fadeToggle();
    menuOpen = menuOpen ? false : true;
    if(menuOpen) {
        $(".side-nav-items").animate({backgroundColor: "rgba(255,255,255,1)"}, 400)
        $("body").css("overflow", "hidden");
        console.log("geschlossen")
    }
    else {
        $(".side-nav-items").animate({backgroundColor: "rgba(255,255,255, 0)"}, 400)
        $("body").css("overflow", "auto");
        console.log("geöffnet")
    }
}


function closeMenu () {
    if(menuOpen) {
        menuOpen = false;
        $(".side-nav-items-toggle").fadeOut();
        $(".side-nav-items").animate({backgroundColor: "rgba(255,255,255,0)"}, 400)
        //$(".side-nav-items").css("background-color", "rgba(0,0,0,0)");
        $("body").css("overflow", "auto");
    }

}

$(".hamburger").click(toggleMenu);
$(".main").click(closeMenu);