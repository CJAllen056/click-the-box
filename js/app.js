var clickApp = clickApp || {};

clickApp.score          = 0;
clickApp.scorePerSecond = 0;
clickApp.scorePerClick  = 1;

clickApp.scoreButtonListener = function() {
  $("#buyScoreboard").click(function() {
    $(".scoreboard").css("display", "inline-block");
    $("#buyScoreboard").css("visibility", "hidden");
    clickApp.score -= 2;
    clickApp.updateHeaderButtonColors();
  });
};

clickApp.pricesButtonListener = function() {

};

clickApp.shopButtonListener = function() {

};

clickApp.clickableColors = {
  "color": "black",
  "border-color": "black"
};
clickApp.unclickableColors = {
  "color": "lightgrey",
  "border-color": "lightgrey"
};

clickApp.buyScoreButton = function() {
  if (clickApp.score >= 2) {
    $("#buyScoreboard").css(clickApp.clickableColors);
    clickApp.scoreButtonListener();
  } else {
    $("#buyScoreboard").css(clickApp.unclickableColors);
  }
};

clickApp.buyPricesButton = function() {
  if (clickApp.score >= 10) {
    $("#buyPrices").css(clickApp.clickableColors);
    clickApp.pricesButtonListener();
  } else {
    $("#buyPrices").css(clickApp.unclickableColors);
  }
};

clickApp.buyShopButton = function() {
  if (clickApp.score >= 20) {
    $("#buyShop").css(clickApp.clickableColors);
    clickApp.shopButtonListener();
  } else {
    $("#buyShop").css(clickApp.unclickableColors);
  }
};

clickApp.updateHeaderButtonColors = function() {
  clickApp.buyScoreButton();
  clickApp.buyPricesButton();
  clickApp.buyShopButton();
};

clickApp.setMainListener = function() {
  $(".clickBox").click(function() {
    clickApp.score += clickApp.scorePerClick;
    clickApp.updateHeaderButtonColors();
  });
};

clickApp.start = function() {
  clickApp.setMainListener();
};

$(clickApp.start);
