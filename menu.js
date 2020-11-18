

/////////////////////////////////////////////////////
/////////////////////  ICON 1  //////////////////////
/////////////////////////////////////////////////////

$(document).ready(function () {
    ///Initiation Variables
    var icon_1 = document.getElementById("box");
    var topLine_1 = document.getElementById("top-line-1");
    var middleLine_1 = document.getElementById("middle-line-1");
    var bottomLine_1 = document.getElementById("bottom-line-1");
    var state_1 = "menu";  // can be "menu" or "arrow"
    var topLineY_1;
    var middleLineY_1;
    var bottomLineY_1;
    var topLeftY_1;
    var topRightY_1;
    var bottomLeftY_1;
    var bottomRightY_1;
    var topLeftX_1;
    var topRightX_1;
    var bottomLeftX_1;
    var bottomRightX_1;

    ///Animation Variables
    var segmentDuration_1 = 15;
    var menuDisappearDurationInFrames_1 = segmentDuration_1;
    var arrowAppearDurationInFrames_1 = segmentDuration_1;
    var arrowDisappearDurationInFrames_1 = segmentDuration_1;
    var menuAppearDurationInFrames_1 = segmentDuration_1;
    var menuDisappearComplete_1 = false;
    var arrowAppearComplete_1 = false;
    var arrowDisappearComplete_1 = false;
    var menuAppearComplete_1 = false;
    var currentFrame_1 = 1;

    ///Menu Disappear 
    function menuDisappearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= menuDisappearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                //top line
                topLineY_1 = AJS.easeInBack(25, 50, menuDisappearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M10," + topLineY_1 + " L90," + topLineY_1);
                //bottom line
                bottomLineY_1 = AJS.easeInBack(75, 50, menuDisappearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M10," + bottomLineY_1 + " L90," + bottomLineY_1);
                //recursion
                menuDisappearAnimation_1();
            });
        } else {
            middleLine_1.style.opacity = "0";
            currentFrame_1 = 1;
            menuDisappearComplete_1 = true;
            openMenuAnimation_1();
        }
    }

    ///Cross Appear
    function arrowAppearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= arrowAppearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                //top line
                topLeftX_1 = AJS.easeOutBack(10, 23, arrowAppearDurationInFrames_1, currentFrame_1);
                topLeftY_1 = AJS.easeOutBack(50, 23, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomRightX_1 = AJS.easeOutBack(90, 77, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomRightY_1 = AJS.easeOutBack(50, 77, arrowAppearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
                //bottom line
                bottomLeftX_1 = AJS.easeOutBack(10, 23, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomLeftY_1 = AJS.easeOutBack(50, 77, arrowAppearDurationInFrames_1, currentFrame_1);
                topRightX_1 = AJS.easeOutBack(90, 77, arrowAppearDurationInFrames_1, currentFrame_1);
                topRightY_1 = AJS.easeOutBack(50, 23, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
                //recursion
                arrowAppearAnimation_1();
            });
        } else {
            currentFrame_1 = 1;
            arrowAppearComplete_1 = true;
            openMenuAnimation_1();
        }
    }

    ///Combined Open Menu Animation
    function openMenuAnimation_1() {
        if (!menuDisappearComplete_1) {
            menuDisappearAnimation_1();
        } else if (!arrowAppearComplete_1) {
            arrowAppearAnimation_1();
        }
    }

    ///Cross Disappear
    function arrowDisappearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= arrowDisappearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                //top line
                topLeftX_1 = AJS.easeInBack(23, 10, arrowDisappearDurationInFrames_1, currentFrame_1);
                topLeftY_1 = AJS.easeInBack(23, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomRightX_1 = AJS.easeInBack(77, 90, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomRightY_1 = AJS.easeInBack(77, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
                //bottom line
                bottomLeftX_1 = AJS.easeInBack(23, 10, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomLeftY_1 = AJS.easeInBack(77, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                topRightX_1 = AJS.easeInBack(77, 90, arrowDisappearDurationInFrames_1, currentFrame_1);
                topRightY_1 = AJS.easeInBack(23, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
                //recursion
                arrowDisappearAnimation_1();
            });
        } else {
            middleLine_1.style.opacity = "1";
            currentFrame_1 = 1;
            arrowDisappearComplete_1 = true;
            closeMenuAnimation_1();
        }
    }

    ///Menu Appear
    function menuAppearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= menuAppearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                //top line
                topLineY_1 = AJS.easeOutBack(50, 25, menuDisappearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M10," + topLineY_1 + " L90," + topLineY_1);
                //bottom line
                bottomLineY_1 = AJS.easeOutBack(50, 75, menuDisappearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M10," + bottomLineY_1 + " L90," + bottomLineY_1);
                //recursion
                menuAppearAnimation_1();
            });
        } else {
            currentFrame_1 = 1;
            menuAppearComplete_1 = true;
            closeMenuAnimation_1();
        }
    }

    ///Close Menu Animation
    function closeMenuAnimation_1() {
        if (!arrowDisappearComplete_1) {
            arrowDisappearAnimation_1();
        } else if (!menuAppearComplete_1) {
            menuAppearAnimation_1();
        }
    }

    ///Events
    icon_1.addEventListener("click", () => {
        if (state_1 === "menu") {
            openMenuAnimation_1();
            state_1 = "arrow";
            arrowDisappearComplete_1 = false;
            menuAppearComplete_1 = false;
            $("#info-container").css("pointer-events", "none");
            $(".menu").css("transform", "scaleY(1)");
            $("#sidebar-overlay").css("display", "block");
        } else if (state_1 === "arrow") {
            closeMenuAnimation_1();
            state_1 = "menu";
            menuDisappearComplete_1 = false;
            arrowAppearComplete_1 = false;
            $("#info-container").css("pointer-events", "auto");
            $(".menu").css("transform", "scaleY(0)");
            $("#sidebar-overlay").css("display", "none");
        }
    });
});