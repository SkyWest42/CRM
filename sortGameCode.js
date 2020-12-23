const BIG_WIDTH = 600,
    BIG_HEIGHT = 280;

var elResponse;
var ogOffset;
var nCurrResponse = 0;

var nDivider = 3;
var arrStrResponses = ["first","second","third","fourth","fifth"];
var queueNResponses = [];

var startX, startY;
var shootDeg;
var pullBackLength;

//colors
var color1= "#ffebe3";
var color2= "#c0d2f6";
var color3 = "#fad2da";
var color4 = "#c0c7fa";
var currColor = 1;

$(document).ready(function () {
    $(".game-elements").hide();
});

function initGame() {
    $(".game-elements").fadeIn();
    elResponse = $("#to-shoot");
    ogOffset = elResponse.offset();
    elResponse.css({
        "top": ogOffset.top,
        "left": ogOffset.left
    });
    initQueue();
    loadResponse();
    elResponse.on("mousedown", startPull);
}

function initQueue() {
    var randomIndex;
    for (var index = 0; index < arrStrResponses.length; index++){
        randomIndex = Math.floor(Math.random() * arrStrResponses.length);
        while (queueNResponses.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * arrStrResponses.length);
        }
        queueNResponses.push(randomIndex);
    }
}

function loadResponse() {
    // nCurrResponse++;
    // elResponse.on("mousedown", startPull);
    if (queueNResponses.length !== 0) {
        elResponse.css("background-color", getRandomColor());
        nCurrResponse = queueNResponses.shift();
        elResponse.html(arrStrResponses[nCurrResponse]);
    $("#arrow").css("top", ogOffset.top);
    } else {
        pourTrash();
    }
}

function getRandomColor() {
    var newColor = currColor;
    while (newColor===currColor)
        newColor = Math.floor(Math.random() * 4) + 1;
    currColor = newColor;
    return eval("color" + currColor);
}

function startPull(event) {
    pullBackLength = 0;
    event.preventDefault();
    $(document).on("mousemove", pull);
    $(document).on("mouseup", stopPull);
    elResponse.css({
        "left": ogOffset.left + (BIG_WIDTH / 4),
        "top": ogOffset.top + (BIG_HEIGHT / 2 + 50 - 150),
        "width": (BIG_WIDTH / 2) + "px",
        "height": (BIG_HEIGHT / 2) + "px"
    });
    $("#arrow").css({
        "height": "120px",
        "transform": "rotate(" + 0 + "deg)",
        "display": "block"
    });
    startX = event.clientX;
    startY = event.clientY;
}

function pull(event) {
    shootDeg = (startX - event.clientX) / 5;
    if (shootDeg > 30) {
        shootDeg = 30;
    } else if (shootDeg < -30) {
        shootDeg = -30;
    }
    $("#to-shoot, #arrow").css({
        "transform": "rotate(" + shootDeg + "deg)"
    });

    pullBackLength = event.clientY - startY;
    if (pullBackLength > 0 && pullBackLength < 100) {
        elResponse.css("top", ogOffset.top + (BIG_HEIGHT / 2 + 50 - 150 + pullBackLength));
        $("#arrow").css("height", (120 + pullBackLength) + "px");
    }
}

function stopPull(event) {
    $(document).off("mousemove", pull);
    $(document).off("mouseup", stopPull);
    elResponse.off("mousedown", startPull);

    $("#arrow").hide();

    if (pullBackLength < 90) {
        revert();
        showTip();
    } else {
        shoot();
    }
}

function showTip() {
    
}

//if response wasn't shot
function revert() {
    elResponse.css({
        "transform": "rotate(" + 0 + "deg)",
        "left": ogOffset.left + (BIG_WIDTH / 8),
        "top": ogOffset.top + (BIG_HEIGHT / 4),
        "width": (BIG_WIDTH / 4 * 3) + "px",
        "height": (BIG_HEIGHT / 4 * 3) + "px"
    });
    
    $("#arrow").css({
        "height": "120px",
        "transform": "rotate(" + 0 + "deg)"
    });

    elResponse.on("mousedown", startPull);
}

//if response wasn shot-
//either shot and recieved in which case isNewResponse=true
//or shot into middle, in which case isNewResponse=false
function revertOriginal(isNewResponse) {
    var transformValue = "none";
    if (isNewResponse)
        transformValue = "scale(0.001)";
    elResponse.css({
        "transition": "0.5s ease-out",
        "transform": transformValue,
        "left": ogOffset.left,
        "top": ogOffset.top,
        "width": BIG_WIDTH + "px",
        "height": BIG_HEIGHT + "px"
    });
    
    //wait until response is in position, then enlarge, 0.5s added for indication to end
    setTimeout(function () {
        elResponse.css("transform", "scale(1)");
        elResponse.on("mousedown", startPull);
    }, 1000);
}

var elReceiver;
function shoot() {
    var isReceived = false;
    var isTrash = nCurrResponse >= nDivider;
    elResponse.css({
        "transition": "top 2s, left 2s, right 2s, transform 2s ease-in",
        "top": $(".destroyer").height() / 3 + "px",
        "transform": "scale(0.001)"
    });

    $(".destroyer").css("animation", "none");

    if (shootDeg > 15) {
        elReceiver = $("#phone");
        recieve(!isTrash);
        isReceived = true;
    } else if (shootDeg < -15) {
        elReceiver = $("#trash");
        recieve(isTrash);
        isReceived = true;
    }
    //wait until response travels up and disappears, then revert
    setTimeout("revertOriginal(" + isReceived + ")", 2500);
}

function recieve(isCorrect) {
    elResponse.css({
        "left": elReceiver.css("left")
    });

    if (isCorrect) {
        elReceiver.css({
            "animation": "indicateCorrect 2s linear 1.5s 1, yay 1.5s ease-in-out 1.5s 1 both"
        });
    } else {
        elReceiver.css({
            "animation": "indicateWrong 2s linear 1.5s 1, shake 0.6s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1.5s 1 both"
        });
        queueNResponses.push(nCurrResponse);
    }
    setTimeout(loadResponse, 2500);
}

function pourTrash() {
    alert("done!");
}