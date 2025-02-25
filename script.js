$(document).ready(function() {
    console.log("birdseye-view-app initialized.");

    let spaceContainer = $("#spaceContainer");

    for (let i = 1; i <= 5; i++) {
        let newItem = $("<div>", {
            class: "spaceItem",
            text: "Item " + i,
            css: {
                top: Math.random() * 400 + "px",
                left: Math.random() * 700 + "px"
            }
        });
        spaceContainer.append(newItem);
    }

    $(".spaceItem").draggable({
        containment: "#spaceContainer",
        stop: function(event, ui) {
            console.log("New Position: ", ui.position);
        }
    });
});