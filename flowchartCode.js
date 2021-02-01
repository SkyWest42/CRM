var grade;
var mistakePoints = 6.25;

$(document).ready(function () {
    grade = Number(sessionStorage.getItem("grade"));
    sizePlates();
    $("#close-instructions-btn").on("click", function () {
        initGame();
    });
});

function initGame() {
    $("#instructions-container").remove();
    $(".draggable").on("mouseover", function () {
        $("#draggable-name").val($(this).attr("data-channel-name"));
    });

    $(".draggable").on("mouseout", function () {
        $("#draggable-name").val("");
    });

    $(".draggable").draggable({
        revert: "invalid",
        containment: "document",
        helper: "clone"
    });

    $(".channel-plate").droppable({
        accept: ".channel",
        drop: function (event, ui) {
            accept($(this), ui.draggable);
            ui.helper.data('dropped', true);
        }
    });

    $(".connection-plate").droppable({
        accept: ".connector",
        drop: function (event, ui) {
            accept($(this), ui.draggable);
            ui.helper.data('dropped', true);
        }
    });

    $("#check-btn").on("click", check);
}

function sizePlates() {
    $(".flowchart-container .plate").each(function () {
        $(this).width($(this).height());
    });
}

function accept($plate, $draggable) {
    if ($draggable.parent()[0] !== $plate[0]) {
        $plate.html("");
    }
    var $toAppend;
    if ($draggable.hasClass("clone")) {
        $toAppend = $draggable;
    } else {
        $toAppend = $draggable.clone();
        $toAppend.addClass("clone");
        $toAppend.draggable({
            revert: false,
            containment: "document",
            cursor: "grab",
            start: function (event, ui) {
                ui.helper.data('dropped', false);
            },
            stop: function (event, ui) {
                if (!ui.helper.data('dropped')) {
                    $(this).remove();
                }
            }
        });
    }
    $toAppend.css({
        "width": $plate.width(),
        "height": $plate.height(),
        "margin": "0",
        "top": "0",
        "left": "0",
    });
    $toAppend.appendTo($plate);
}


function check() {
    if (isFilled()) {
        $("#check-btn").off();
        $(".draggable").draggable("destroy");
        $(".draggable").css("cursor", "auto");
        $("#check-btn").html("סיים לומדה!");
        grade -= checkUserAnswer(getUserAnswer()) * mistakePoints;
        $("#check-btn").on("click", function () {
            sessionStorage.setItem("grade", grade);
            window.location.replace("form.html");
        });
    } else {
        $("#confirmation-box").show();
        $("#confirm").on("click", function () {
            $("#confirmation-box").hide();
            $("#confirm").off();
        });
    }
}

function isFilled() {
    var isFilled = true;
    $(".plate").each(function (index) {
        isFilled = $(this).html() !== "";
        return isFilled;
    });
    return isFilled;
}

var MAT_ANSWER = [
    ["website"],
    ["facebook", "phone", "email"],
    ["facebook", "email"],
    ["smartphone", "website"],
    ["transfer"],
    ["close"],
    ["close"]
];

function getUserAnswer() {
    var matUserAnswer = [];
    var countBefore = 0;
    for (var i = 0; i < MAT_ANSWER.length; i++){
        matUserAnswer[i] = [];
        if (i > 0) {
            countBefore += MAT_ANSWER[i - 1].length;
        }
        for (var j = 0; j < MAT_ANSWER[i].length; j++){
            matUserAnswer[i][j] = $("#plate" + (countBefore + j + 1) + " img").attr("data-channel-id");
        }
    }
    return matUserAnswer;
}

// `function checkUserAnswer(matUserAnswer) {
//     var mistakeCounter = 0;
//     for (var groupIndex = 0; groupIndex < MAT_ANSWER.length; groupIndex++) {
//         mistakeCounter += removeDuplicates(matUserAnswer[groupIndex]);
//         // MAT_ANSWER[groupIndex].sort();
//         // matUserAnswer[groupIndex].sort();
//         for (var valueIndex = 0; valueIndex < matUserAnswer[groupIndex].length; valueIndex++) {
//             if (!MAT_ANSWER[groupIndex].includes(matUserAnswer[groupIndex][valueIndex])) {
//                 mistakeCounter++;
//             }
//         }
//     }
//     return mistakeCounter;
// }`

function checkUserAnswer(matUserAnswer) {
    var mistakeCounter = 0;
    for (var groupIndex = 0; groupIndex < MAT_ANSWER.length; groupIndex++) {
        removeDuplicates(matUserAnswer[groupIndex]);
        for (var valueUserIndex = 0; valueUserIndex < matUserAnswer[groupIndex].length; valueUserIndex++) {
            var valueAnswerIndex = MAT_ANSWER[groupIndex].indexOf(matUserAnswer[groupIndex][valueUserIndex]);
            if (valueAnswerIndex === -1) {
                mistakeCounter++;
            } else {
                MAT_ANSWER[groupIndex][valueAnswerIndex] = MAT_ANSWER[groupIndex].splice(valueUserIndex, 1, MAT_ANSWER[groupIndex][valueAnswerIndex])[0];
                // MAT_ANSWER[groupIndex].splice(valueUserIndex, 0, MAT_ANSWER[groupIndex].splice(valueAnswerIndex, 1)[0]);
            }
        }
    }
    showCorrect(matUserAnswer, 1, 0, 0);
    return mistakeCounter;
}

function removeDuplicates(array) {
    var val;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength - 1; i++) {
        val = array.splice(i, 1).shift();
        if (!array.includes(val)) {
            array.splice(i, 0, val);
        } else {
            array.splice(i, 0, "duplicate");
        }
    }
}

// function showCorrect(matUserAnswer) {
//     var countBefore = 0;
//     var plateNumber;
//     var answerValue;
//     for (var groupIndex = 0; groupIndex < MAT_ANSWER.length; groupIndex++) {
//         if (groupIndex > 0) {
//             countBefore += MAT_ANSWER[groupIndex - 1].length;
//         }
//         for (var valIndex = 0; valIndex < MAT_ANSWER[groupIndex].length; valIndex++) {
//             if (MAT_ANSWER[groupIndex][valIndex] !== matUserAnswer[groupIndex][valIndex]) {
//                 plateNumber = countBefore + valIndex + 1;
//                 answerValue = MAT_ANSWER[groupIndex][valIndex];
//                 $("#plate" + plateNumber + " img").css("animation", "pulse 1s ease-out " + (plateNumber * 0.5) + "s")
//                     .delay(600 + plateNumber * 500)
//                     .queue(function (next) {
//                         $(this).attr("src", "media/flowchartMedia/" + answerValue + ".png");
//                         next();
//                     })
//                     // .attr("src", "media/flowchartMedia/" + MAT_ANSWER[groupIndex][valIndex] + ".png");
//             }
//         }
//     }
// }

function showCorrect(matUserAnswer, plateNumber, groupIndex, valIndex) {
    var answerValue = MAT_ANSWER[groupIndex][valIndex];
    var timeout = 0;

    if (matUserAnswer[groupIndex][valIndex] !== answerValue) {
        timeout = 1200;
        $("#flowchart-container").append("<img class='mistake' src='media/mistake6.25.png'/>")
        $("#plate" + plateNumber + " img").css("animation", "pulseAndTurn 1.2s ease-out")
            .delay(600)
            .queue(function (next) {
                $("#plate" + plateNumber + " img").attr("src", "media/flowchartMedia/" + answerValue + ".png");
                $(this).dequeue();
            });
    }
    setTimeout(function () {
        plateNumber++;
        if (valIndex < MAT_ANSWER[groupIndex].length - 1) {
            valIndex++;
            showCorrect(matUserAnswer, plateNumber, groupIndex, valIndex);
        } else if (groupIndex < MAT_ANSWER.length - 1) {
            valIndex = 0;
            groupIndex++;
            showCorrect(matUserAnswer, plateNumber, groupIndex, valIndex);
        } else {
            $("#answer-explanation").show();
            $("#flowchart-container").css("animation", "pulse 1.2s ease-out");
            $("#check-btn").delay(1000)
                .queue(function (next) {
                    $(this).css("box-shadow", "0px 0px 40px 10px #ff0080")
                    $(this).dequeue();
                });
        }
    }, timeout);
}