$(document).ready(function () {
    sizePlates();

    $(".draggable").on("mouseover", function () {
        $("#draggable-name").val($(this).attr("id"));
    });

    $(".draggable").on("mouseout", function () {
        $("#draggable-name").val("");
    });
    
    $(".draggable").draggable({
        revert: "invalid",
        containment: "document",
        helper: "clone",
        cursor: "grab"
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
});

function sizePlates() {
    $(".flowchart-container .plate").each(function () {
        $(this).width($(this).height());
    });
}

function accept($plate, $draggable) {
    $plate.html("");
    // $($draggable).clone().css({
    //     "width": $plate.width(),
    //     "height": $plate.height(),
    //     "margin": "0",
    //     "top": "0",
    //     "left": "0"
    // }).appendTo($plate);
    var $clone = $($draggable).clone();
    $clone.css({
        "width": $plate.width(),
        "height": $plate.height(),
        "margin": "0",
        "top": "0",
        "left": "0"
    });
    $clone.appendTo($plate);
    $clone.draggable({
        revert: false,
        containment: "document",
        cursor: "grab",
        start: function (event, ui) {
            ui.helper.data('dropped', false);
        },
        stop: function (event, ui) {
            // alert('stop: dropped=' + ui.helper.data('dropped'));
            if (!ui.helper.data('dropped')) {
                $(this).remove();
            }
            // Check value of ui.helper.data('dropped') and handle accordingly...
        }
    });
}