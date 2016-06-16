// Write your Javascript code.
var playerSkinCache = new Map();

function renderPlayerInfo(playerInfo) {
    
}

function getPlayerInfo(eventData) {
    var playerName = eventData.playerName;
    var skin = playerSkinCache.get(playerName);

    if (playerInfo === undefined) {
        $.ajax("http://crafatar.com/skins/" + playerName).done(function (data) {
            playerSkinCache.set(playerName, data);
        }).then(function () { renderPlayerInfo(skin); });
    } else {
        renderPlayerInfo(skin);
    }
}
