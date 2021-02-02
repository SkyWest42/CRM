const BIG_WIDTH = 600,
    BIG_HEIGHT = 280;

var grade = 100;
var mistakePoints = 6.25;

var elResponse;
var ogOffset;
var nCurrResponse = 0;

var nDivider = 4;
var arrStrResponses = [
    '<p>מלש"ב/ית יקר/ה, בהמשך לפניתך נפתחה לך הפניה למדור בריאות הנפש בלשכת גיוס תל השומר. זימון ישלח אליך לאחר שתשלימ/י את כלל הליכי הצו הראשון.</p><p>בהצלחה!</p>',
    '<p>מלש"ב/ית יקרה, שאלונך הרפואי נקלט ונבדק.</p><p>מצורפת רשימת המסמכים שעליך לצרף.</p><p>חלק ג של השאלון הרפואי (ממולא ע"י אופטימטריסט. במידה והמספר במשקפיים עולה על 4 יש לצרף חוות דעת רופא עיניים ובדיקת קרקעיות), בדיקת שתן תקינה ועדכנית (עד שלושה חודשים טרם הצו), וחוו"ד רופא עור משנה אחרונה.</p><p>את השאלון הרפואי ניתן למצוא באתר מתגייסים תחת "טפסים" "צו ראשון" "שאלון רפואי".</p><p>המשך הליך גיוס נעים!</p>',
    'מלש"ב/ית יקר/ה, בקשתך לשינוי מועד גיוסך התקבלה במערכת ונבחנה על ידי הגורמים הרלוונטיים במיטב. לצערנו לא ניתן לאשר את בקשתך לאור גילך הצעיר יחסית לעומת שאר המתגייסים בעונת הגיוס המבוקשת. צו הגיוס שבידך הינו בתוקף. אנו מאחלים לך גיוס מוצלח!',
    'מלש"ב/ית יקר/ה, לאחרונה התקבלה פנייתך בנוגע לבקשת מיון כלל חמן בחיל המודיעין, הרינו להודיע לך שבנקודה זו תמו המיונים למחזור גיוסך ולכן לא נוכל להיענות לבקשתך. אנו בטוחים כי תוכל לממש את כישוריך בכלל המסלולים אותם מציע צה"ל. בהצלחה!',
    '<p>מלש"ב/ית יקר/ה, בהמשך לפנייתך בנושא פניה שאינה בסמכות מיטב, עליך לפנות ל(שם סמכות).</p><p>המשך הליך גיוס נעים!</p>',
    'מלש"ב יקר ענו על המסמכים ששלחת "הודפס עדיין חסר תפקודי כליות ואנמניזה"',
    'פנייה כפולה',
    '.'
];
var queueNResponses = [];
var wasMistake = [];

var arrStrReviews = [
    '<ul><li class="good">יש פניה אל הנמען</li><li class="bad">האזכור לפניה לא ברור</li><li class="bad">חסרה הצבה בתבנית</li><li class="bad">הניסוח לא ברור, אין תשובה סופית בנוגע לפניה, והמלש"ב לא יודע מה עליו לעשות לשם המשך הטיפול בסוגיה.</li><li class="good">פיסוק נכון</li><li class="good">יש סיום</li></ul>',
    '<ul><li class="good">יש פניה אל הנמען</li><li class="good">יש אזכור לפניה</li><li class="bad">הניסוח לא ברור, אין תשובה סופית בנוגע לפניה, והמלש"ב לא יודע מה עליו לעשות לשם המשך הטיפול בסוגיה.</li><li class="bad">אין פיסוק</li><li class="bad">אין סיום</li></ul>',
    '<ul><li class="bad">אין פניה אל הנמען</li><li class="bad">אין אזכור לפניה</li><li class="bad">המלש"ב מקבל הודעה חסרת תוכן ולא מבין מה רוצים ממנו</li><li class="bad">אין סיום</li></ul>',
    '<ul><li class="bad">אין פניה אל הנמען</li><li class="bad">אין אזכור לפניה</li><li class="bad">המלש"ב מקבל הודעה חסרת תוכן ולא מבין מה רוצים ממנו</li><li class="bad">אין סיום</li></ul>'
];
var nPickTrashCounter = 0;

var startX, startY;
var shootDeg;
var pullBackLength;

//colors
var color1= "#ffebe3";
var color2= "#c0d2f6";
var color3 = "#fad2da";
var color4 = "#c0c7fa";
var currColor = 1;

var arrOpeningContent = [
    '<ul><li><strong> בודקים שסיווג השלשה נכון</strong>- אחרת נקבל תבניות תשובה שגויות.</li><li><strong> מוודאים</strong> <strong>שבחרנו תבנית תשובה מתאימה</strong>- או שהמלש"ב לא יבין מה אנחנו רוצים.</li><li><strong> ממלאים את החלקים החסרים בתבנית התשובה</strong>- נסתכל אם צריך להשלים או למחוק דברים מיותרים.</li><li><strong> מלל חופשי- רק אם חייבים</strong>- אין תבנית מתאימה? בקשו מהאחראי להזין מלל חופשי מתאים. קורה כמה פעמים עם אותה שאלה? בקשו תבנית חדשה מ"עולים לאוויר".</li><li><strong> מתנסחים בצורה ראויה</strong>- עם הסבר מדויק מה צריך לעשות, להביא, מה חסר.</li></ul><div class="footer"><p><strong>היו גאים בשירות שאתם נותנים!</strong></p><div id="next" class="button next-btn"><img src="media/sortGameMedia/nextArrow.png"/></div></div>',
    '<p class="footer"><strong>במלל חופשי נזכור:</strong></p><ul><li><strong>פניה אל הנמען-</strong> "מלש"ב/ית יקר/ה".</li><li><strong>התייחסות לפניה</strong>- "בהמשך לפנייתך בנושא [נושא הפניה]".</li><li><strong>תשובה סופית בנוגע לפניה, או הוראות ברורות כיצד עליו להמשיך</strong>- "הוחלט לדחות את בקשתך/הוחלט לאשר את בקשתך/עליך לשלוח מסמך [שם המסמך] וכו&apos;".</li><li><strong>סיום פניה-</strong> "&apos;המשך הליך גיוס נעים/בהצלחה וכו".</li></ul><div class="footer"><p><strong>תנו את התשובה שהייתם רוצים לקבל</strong></p><div id="prev" class="button prev-btn"><img src="media/sortGameMedia/prevArrow.png"/></div><div id="start" class="button start-btn">בואו נתרגל!<img src="media/sortGameMedia/prevArrow.png"/></div>'
];

$(document).ready(function () {
    $(".game-elements").hide();
    $(".text-container").html(arrOpeningContent[0]);
    $("#next").on("click", buttonClicked);
});

function buttonClicked(event) {
    var strButtonId = $(this).attr("id");
    switch (strButtonId) {
        case "next":
            $(".text-container").html(arrOpeningContent[1]);
            $("#prev").on("click", buttonClicked);
            $("#start").on("click", buttonClicked);
            break;
        case "prev":
            $(".text-container").html(arrOpeningContent[0]);
            $("#next").on("click", buttonClicked);
            break;
        case "start":
            $("#prev").off("click", buttonClicked);
            $("#start").off("click", buttonClicked);
            initGame();
            break;
    }
}

function initGame() {
    $("#opening-container").hide();
    $(".game-elements").fadeIn();
    $("#instructions").show();
    $("#close-instructions-btn").on("click", function () {
        instructionsToTip();
        startGame();
    });
}

function instructionsToTip() {
    $("#instructions").html('<p>?<video id="instructions-video" class="video-insert" autoplay="autoplay" loop="loop" muted="" width="300" height="150">                <source src="media/sortGameMedia/gameInstructions.mp4" type="video/mp4" />            </video></p><p class="instructions-paragraph">לחצו ומשכו אחורה על מנת לטעון, הזיזו את העכבר ימינה או שמאלה על מנת לכוון. שחררו כדי לשגר.</p>');
    $("#instructions").css({
        "width": "fit-content",
        "height": "fit-content",
        "padding": "0",
        "right": "0",
        "cursor": "pointer",
        "bottom": "-29%"
    });

    $("#instructions").mouseover(function () {
        $(this).css("bottom", "0%");
    }).mouseout(function () {
        $(this).css("bottom", "-29%");
    });

    $("#instructions *").css({
        "width": "200px"
    });

}

function startGame() {
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
        wasMistake[index] = false;
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
        "height": (BIG_HEIGHT / 2) + "px",
        "font-size": "54%",
        "padding": "2%"
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

    if (pullBackLength < 60) {
        revert();
        // showTip();
    } else {
        shoot();
    }
}

// function showTip() {
//     // $("#tip").show();
// }

//if response wasn't shot
function revert() {
    elResponse.css({
        "transform": "rotate(" + 0 + "deg)",
        "left": ogOffset.left + (BIG_WIDTH / 8),
        "top": ogOffset.top + (BIG_HEIGHT / 4),
        "width": (BIG_WIDTH / 4 * 3) + "px",
        "height": (BIG_HEIGHT / 4 * 3) + "px",
        "font-size": "81%",
        "padding": "3%"
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
        "height": BIG_HEIGHT + "px",
        "font-size": "108%",
        "padding": "4%"
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
        if (!wasMistake[nCurrResponse]) {
            $("#page-container").append("<img class='mistake' src='media/mistake6.25.png'/>");
            grade -= mistakePoints;
            wasMistake[nCurrResponse] = true;
        }
        queueNResponses.push(nCurrResponse);
    }
    setTimeout(loadResponse, 2500);
}

function pourTrash() {
    elResponse.off().hide();
    $("#instructions").off().hide();
    $("#arrow").hide();
    $("#shooting-platform").css({
        "transition": "2s ease-in",
        "width": "100%",
        "height": "100%",
        "border-style": "none",
        "border-radius": "0",
    });
    $("#page-container").append("<div id='overlay' class='overlay'></div>");
    $("#overlay").append("<div id='trash-response-review' class='trash-response-review'></div>");
    for (var trashIndex = 0; trashIndex < arrStrResponses.length - nDivider; trashIndex++) {
        $("#shooting-platform").append("<div class='to-shoot trash-response' id='trash-response" + (trashIndex + 1) + "'>" + arrStrResponses[trashIndex + nDivider] + "</div>");
    }
    $("#trash").css("animation", "pourTrash 4s ease-out 2s forwards");
    setTimeout(function() {
        $(".trash-response").on("click", pickTrash);
    }, 6000);
}

function pickTrash(event) {
    nPickTrashCounter++;
    $(this).off();
    $("#overlay").show();
    $("#overlay").append($(this));
    $(this).css({
        "top": "10%",
        "right": "10%",
        "animation": "none",
        "cursor": "unset"
    });
    $(this).removeClass("trash-response");
    $(this).addClass("trash-response-reviewed");
    $(this).append("<img id='close-review-btn' src='media/sortGameMedia/close.png' class='close-btn close-review-btn'/>")
    $("#trash-response-review").css("backgroundColor", $(this).css("backgroundColor"));
    $("#trash-response-review").html(arrStrReviews[Number($(this).attr("id").slice(14)) - 1]);
    $("#close-review-btn").on("click", function () {
        $(this).parent().remove();
        $("#overlay").hide();
        if (nPickTrashCounter === arrStrReviews.length) {
            endGame();
        }
    });
}

function endGame() {
    $("#trash").fadeOut('slow', function () {
        sessionStorage.setItem("grade", grade);
        window.location.replace("flowchart.html");
    });
}