// Credit goes to gblazex for this program.
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32:1, 33: 1, 34: 1, 36: 1, 35: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}


$(document).ready(() => {
    // For the fixed navigation bar to appear/disappear depending on the
    // the scroll progress. As well as showing different button schemes
    // depending on the device's width.

    // Updates the links/button that appear on the navigation bar
    // depending on the width of the device screen.
    const MOBILE_WIDTH = 800;

    function updateFixedNavBarOnResize() {
        let deviceWidth = Math.max(window.screen.width, window.innerWidth);

        if (deviceWidth <= MOBILE_WIDTH) {
            $("#mobileSidebarOpenButton").removeClass("hidden");
            $(".fixed-nav-bar-list-container").addClass("hidden");
        } else {
            $("#mobileSidebarOpenButton").addClass("hidden");
            $(".fixed-nav-bar-list-container").removeClass("hidden");
        }
    }


    const NAV_BAR_APPEAR_OFFSET = $("section > div.nav-bar").height() + 10;
    console.log(NAV_BAR_APPEAR_OFFSET);
    let fixedNavBarVisible = false;
    let animationRunning = false;

    function fixedNavBarAppearAnimation() {
        let fixedNavBarContainer = $("div.fixed-nav-bar");

        fixedNavBarContainer.stop(true);
        fixedNavBarContainer.css("opacity", "0");
        fixedNavBarContainer.removeClass("hidden");
        fixedNavBarContainer.animate({ opacity: 1 }, 100, () => {
            console.log("Appeared");
        });
    }

    function fixedNavBarDisappearAnimation() {
        let fixedNavBarContainer = $("div.fixed-nav-bar");
        console.log("is this even running?");

        fixedNavBarContainer.stop(true);
        fixedNavBarContainer.css("opacity", "1");
        fixedNavBarContainer.animate({ opacity: 0 }, 100, () => {
            fixedNavBarContainer.addClass("hidden");
            console.log("Disappeared");
        });
    }

    // Performs an animation of the navigation bar appearing or disappearing
    // depending on if the navigation bar is already visible and the current
    // scroll progress on the website.
    function updateFixedNavBarOnScroll() {
        let currentScroll = window.scrollY;
        let fixedNavBarContainer = $("div.fixed-nav-bar");

        if (currentScroll >= NAV_BAR_APPEAR_OFFSET && !fixedNavBarVisible) {
            fixedNavBarVisible = true;

            fixedNavBarAppearAnimation();
        } else if (currentScroll < NAV_BAR_APPEAR_OFFSET && fixedNavBarVisible) {
            fixedNavBarVisible = false;

            fixedNavBarDisappearAnimation();
        }
    }

    updateFixedNavBarOnResize();
    updateFixedNavBarOnScroll();

    $(window).resize(updateFixedNavBarOnResize);
    $(window).scroll(updateFixedNavBarOnScroll);


    // Provides functionality to make the side bar appear on mobile devices.
    let sideBarOpenButton = $("#mobileSidebarOpenButton");
    let sideBarCloseButton = $("#mobileSidebarCloseButton");
    
    let sideBarContainer = $("div.side-bar-mobile-container");
    let sideBarListContainer = $("div.side-bar-list-container");

    let sideBarOpen = false;
    const ANIMATION_TIME = 150;

    sideBarOpenButton.click(() => {
        if (!sideBarOpen) {
            disableScroll();
            sideBarOpen = true;

            sideBarContainer.css("background-color", "rgba(0,0,0,0)");
            sideBarContainer.removeClass("hidden");
            sideBarContainer.animate({backgroundColor: "rgba(0,0,0,0.75)"}, ANIMATION_TIME, () => {
                console.log("Open!");
            });

            sideBarListContainer.addClass("side-bar-list-appearing");
        }
    });

    sideBarCloseButton.click(() => {
        if (sideBarOpen) {
            enableScroll();
            sideBarOpen = false;
    
            sideBarListContainer.removeClass("side-bar-list-appearing");
    
            sideBarContainer.css("background-color", "rgba(0,0,0,0.75)");
            sideBarContainer.animate({backgroundColor: "rgba(0,0,0,0)"}, ANIMATION_TIME, () => {
                console.log("Closed!");
                sideBarContainer.addClass("hidden");
            });
        }
    });

    // This is to highlight certain nav-links depending on where the user is 
    // on the website.
    let screenHeight = $(window).height();
    let previousRegion = 0;
    let linkIDList = ["aboutLinkFixedNavBar", "projectsLinkFixedNavBar", "contactLinkFixedNavBar"];
    const HIGHLIGHT_COLOR = "#80bfff";

    function getBorderOffset(htmlObject) {
        return Math.floor(htmlObject.offset().top + 0.5 * htmlObject.outerHeight(true) - screenHeight);
    }

    let regionBorderOffsets = [
        0, // This is to prevent index out of bounds error, no highlighting here btw
        getBorderOffset($("section.about-me-section")), // Highlight about
        getBorderOffset($("section.projects-section")), // Highlight projects
        getBorderOffset($("section.contact-section")), // Highlight contact
        $(document).height() // Max since it is the document's full height
    ]
    
    function getCurrentRegion() {
        let currentScroll = window.scrollY;

        let p = 0;
        let q = regionBorderOffsets.length - 1;
        let r = 0;

        while (p <= q) {
            r = Math.floor( (p + q) / 2);
            if (currentScroll >= regionBorderOffsets[r] && currentScroll <= regionBorderOffsets[r+1]) {
                return r;
            } else if (currentScroll < regionBorderOffsets[r]) {
                q = r - 1;
            } else if (currentScroll > regionBorderOffsets[r]) {
                p = r + 1;
            }
        }

        console.log("Error: Could not find which scroll region the user is in (" + currentScroll +"px)");
        return null;
    }

    function resetNavBarLinkHighlights() {
        linkIDList.forEach( (id, index) => {
            $("#" + id).css("color", "var(--base-text-color)");
        });
    }

    function setNavBarLinkHighlight(region) {
        if (1 <= region && region <= 3)
            $("#" + linkIDList[region - 1]).css("color", HIGHLIGHT_COLOR);
    }

    function updateNavBarLinkHighlightOnScroll() {
        let currentRegion = getCurrentRegion();

        // Only when the region changes do we update the highlighting.
        if (previousRegion != currentRegion) {
            resetNavBarLinkHighlights();
            setNavBarLinkHighlight(currentRegion);
            previousRegion = currentRegion;
        }
    }

    // Subscribe this event to the nav-bar if the device actually has the nav-bar visible
    // AKA when the device is not a mobile device.
    if (MOBILE_WIDTH <= Math.max(window.screen.width, window.innerWidth)) {
        $(window).scroll(updateNavBarLinkHighlightOnScroll);
    }

    // Making it so that the links in the navigation bars scroll to the specified section in the page.
    
})