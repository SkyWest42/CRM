$(document).ready(function () {
    $(".flowchart-container .plate").css("width", $(".flowchart-container .plate").css("height"));
    $(".flowchart-container .connection-plate").css("width", $(".flowchart-container .connection-plate").css("height"));

    $(".draggable").draggable({
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        // helper: "clone",
        cursor: "grab"
    });

    $(".plate").droppable({
        accept: ".draggable",
        // classes: {
        //     "ui-droppable-active": "ui-state-highlight"
        // },
        drop: function (event, ui) {
            deleteImage(ui.draggable);
        }
    });
});

function deleteImage($item) {
    $(".plate").html("");
    $item.css({
        "top": "0",
        "left": "0"
    });
    $(".plate").append($item);
}