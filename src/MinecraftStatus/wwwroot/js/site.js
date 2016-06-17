// Write your Javascript code.
$(document).mousemove(function(e) {
    window.mouseX = e.pageX;
    window.mouseY = e.pageY;
});

var playerSkinCache = new Map();

function renderPlayerSkin(hoverElement, skin) {
//    console.log("Loaded");
    var skinElement = $('<div class="skin-popup" />');
    hoverElement.append(skinElement);
    skinElement.css('left', mouseX);
    skinElement.css('top', mouseY);
    $skin = $(skin);
    $skin.addClass('img-thumbnail');
    $skin.appendTo(skinElement);
}

function showSkinPopup(element) {
    var $element = $(element);
    var uuid = $element.attr("player-id");
    var skin = playerSkinCache.get(uuid);

    if (skin === undefined) {
        img = new Image();
        img.width = 120;
        img.height = 270;
        img.alt = $element.attr("player-name");
        img.src = "http://mcapi.afa.moe/" + uuid;
        img.onload = function () {
            playerSkinCache.set(uuid, img);
            renderPlayerSkin($element, img);
        }
    } else {
        renderPlayerSkin($element, skin);
    }
}

function removeSkinPopup(element) {
    var $element = $(element);
    $element.find('.skin-popup').remove();
}