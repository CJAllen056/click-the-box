var clickApp = clickApp || {};

clickApp.score          = 0;
clickApp.scorePerSecond = 0;
clickApp.scorePerClick  = 1;

clickApp.scoreButtonListener = function() {
  $("#buyScoreboard").click(function() {
    $(".scoreboard").css("display", "inline-block");
  });
};

clickApp.pricesButtonListener = function() {

};

clickApp.shopButtonListener = function() {

};

clickApp.buyScoreButton = function() {
  if (clickApp.score === 2) {
    $("#buyScoreboard").css({
      "color": "black",
      "border-color": "black"
    });
    clickApp.scoreButtonListener();
  }
};

clickApp.buyPricesButton = function() {
  if (clickApp.score === 10) {
    $("#buyPrices").css({
      "color": "black",
      "border-color": "black"
    });
    clickApp.pricesButtonListener();
  }
};

clickApp.buyShopButton = function() {
  if (clickApp.score === 20) {
    $("#buyShop").css({
      "color": "black",
      "border-color": "black"
    });
    clickApp.shopButtonListener();
  }
};

clickApp.setMainListener = function() {
  $(".clickBox").click(function() {
    clickApp.score += clickApp.scorePerClick;
    clickApp.buyScoreButton();
    clickApp.buyPricesButton();
    clickApp.buyShopButton();
  });
};

clickApp.start = function() {
  clickApp.setMainListener();
};

$(clickApp.start);
