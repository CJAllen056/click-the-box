var clickApp = clickApp || {};

// Points variables
clickApp.points          = 0;
clickApp.pointsPerSecond = 0;
clickApp.pointsPerClick  = 1;

// Shop item variables
clickApp.mouses         = 0;
clickApp.monkeys        = 0;
clickApp.children       = 0;
clickApp.professionals  = 0;

clickApp.mousesClicksPerSecond        = 0.1;
clickApp.monkeysClicksPerSecond       = 1;
clickApp.childrenClicksPerSecond      = 10;
clickApp.professionalsClicksPerSecond = 100;

clickApp.mousesCost         = 15;
clickApp.monkeysCost        = 100;
clickApp.childrenCost       = 1100;
clickApp.professionalsCost  = 12000;

// Header variables
clickApp.clickableColors = {
  "color": "black",
  "border-color": "black"
};
clickApp.unclickableColors = {
  "color": "lightgrey",
  "border-color": "lightgrey"
};

clickApp.pointsButtonListener = function() {
  $("#buyScoreboard").click(function() {
    $(".scoreboard").css("display", "inline-block");
    $("#buyScoreboard").css("visibility", "hidden");
    clickApp.points -= 2;
    clickApp.updateHeaderButtonColors();
    clickApp.displayPoints();
  });
};

clickApp.pricesButtonListener = function() {

};

clickApp.shopButtonListener = function() {
  $("#buyShop").click(function() {
    $(".rightBoard").css("display", "inline-block");
    $(".leftBoard").css("width", "70%");
    $("#buyshop").css("visibility", "hidden");
    clickApp.points -= 20;
    clickApp.updateHeaderButtonColors();
    clickApp.displayPoints();
  });
};

clickApp.buyScoreButton = function() {
  console.log($("#buyScoreboard").css("color"));
  if (clickApp.points >= 2 && $("#buyScoreboard").css("color") !== "rgb(0, 0, 0)") {
    $("#buyScoreboard").css(clickApp.clickableColors);
    clickApp.pointsButtonListener();
  } else if (clickApp.points < 2) {
    $("#buyScoreboard").css(clickApp.unclickableColors);
  }
};

clickApp.buyPricesButton = function() {
  if (clickApp.points >= 10 && $("#buyPrices").css("color") !== "rgb(0, 0, 0)") {
    $("#buyPrices").css(clickApp.clickableColors);
    clickApp.pricesButtonListener();
  } else if (clickApp.points < 10) {
    $("#buyPrices").css(clickApp.unclickableColors);
  }
};

clickApp.buyShopButton = function() {
  if (clickApp.points >= 20 && $("#buyShop").css("color") !== "rgb(0, 0, 0)") {
    $("#buyShop").css(clickApp.clickableColors);
    clickApp.shopButtonListener();
  } else if (clickApp.points < 20) {
    $("#buyShop").css(clickApp.unclickableColors);
  }
};

clickApp.updateHeaderButtonColors = function() {
  clickApp.buyScoreButton();
  clickApp.buyPricesButton();
  clickApp.buyShopButton();
};

clickApp.displayPoints = function() {
  $(".points").html(clickApp.points);
};

clickApp.displayPointsPerSecond = function() {
  $(".pointsPerSecond").html(clickApp.pointsPerSecond);
};

clickApp.setMainListener = function() {
  $(".clickBox").click(function() {
    clickApp.points += clickApp.pointsPerClick;
    clickApp.updateHeaderButtonColors();
    clickApp.displayPoints();
    console.log(clickApp.points);
  });
};

clickApp.start = function() {
  clickApp.setMainListener();
};

$(clickApp.start);
