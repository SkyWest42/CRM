$(document).ready(function () {
    sizePlates();

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
});

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
        alert(checkUserAnswer(getUserAnswer()));
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
    ["smartphone", "website"],
    ["smartphone", "website"],
    ["close"],
    ["transfer"]
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
    var countBefore2 = 0;

    for (var groupIndex = 0; groupIndex < MAT_ANSWER.length; groupIndex++) {
        mistakeCounter += removeDuplicates(matUserAnswer[groupIndex]);
        // MAT_ANSWER[groupIndex].sort();
        // matUserAnswer[groupIndex].sort();
        if (groupIndex > 0) {
            countBefore2 += MAT_ANSWER[groupIndex - 1].length;
        }
        for (var valueIndex = 0; valueIndex < matUserAnswer[groupIndex].length; valueIndex++) {
            if (!MAT_ANSWER[groupIndex].includes(matUserAnswer[groupIndex][valueIndex])) {
                $("#plate" + (countBefore2 + valueIndex + 1) + " img").css("border", "red 5px solid");
                mistakeCounter++;
            }
        }
    }
    return mistakeCounter;
}

function removeDuplicates(array) {
    var mistakeCount = 0;
    var val;
    var arrayLength = array.length;
    for (var i = 0; i < arrayLength - 1; i++) {
        val = array.splice(i, 1).shift();
        if (!array.includes(val)) {
            array.unshift(val);
        } else {
            mistakeCount++;
        }
    }
    return mistakeCount;
}

function showCorrect() {
    
}