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

// Shop button listeners
clickApp.mousesButtonListener = function() {
  $("#mousesButton").click(function() {
    clickApp.pointsPerSecond += clickApp.mousesClicksPerSecond;
    clickApp.points -= clickApp.mousesCost;
    clickApp.mousesCost = Math.floor(clickApp.mousesCost * 1.15);
  });
};

clickApp.monkeysButtonListener = function() {

};

clickApp.childrenButtonListener = function() {

};

clickApp.professionalsButtonListener = function() {

};

// Shop button colours
clickApp.mousesButtonColors = function() {
  if (clickApp.points >= clickApp.mousesCost && $("#mousesButton").css("color") !== "rgb(0, 0, 0)") {
    $("#mousesButton").css(clickApp.clickableColors);
    clickApp.shopButtonColors();
  } else if (clickApp.points < clickApp.mousesCost) {
    $("#mousesButton").css(clickApp.unclickableColors);
    $("#mousesButton").unbind();
  }
};

clickApp.monkeysButtonColors = function() {
  if (clickApp.points >= clickApp.monkeysCost && $("#monkeysButton").css("color") !== "rgb(0, 0, 0)") {
    $("#monkeysButton").css(clickApp.clickableColors);
    clickApp.shopButtonColors();
  } else if (clickApp.points < clickApp.monkeysCost) {
    $("#monkeysButton").css(clickApp.unclickableColors);
    $("#monkeysButton").unbind();
  }
};

clickApp.childrenButtonColors = function() {
  if (clickApp.points >= clickApp.childrenCost && $("#childrenButton").css("color") !== "rgb(0, 0, 0)") {
    $("#childrenButton").css(clickApp.clickableColors);
    clickApp.shopButtonColors();
  } else if (clickApp.points < clickApp.childrenCost) {
    $("#childrenButton").css(clickApp.unclickableColors);
    $("#childrenButton").unbind();
  }
};

clickApp.professionalsButtonColors = function() {
  if (clickApp.points >= clickApp.professionalsCost && $("#professionalsButton").css("color") !== "rgb(0, 0, 0)") {
    $("#professionalsButton").css(clickApp.clickableColors);
    clickApp.shopButtonColors();
  } else if (clickApp.points < clickApp.professionalsCost) {
    $("#professionalsButton").css(clickApp.unclickableColors);
    $("#professionalsButton").unbind();
  }
};

clickApp.shopButtonColors = function() {
  clickApp.mousesButtonColors();
  clickApp.monkeysButtonColors();
  clickApp.childrenButtonColors();
  clickApp.professionalsButtonColors();
};

// Header button listeners
clickApp.pointsButtonListener = function() {
  $("#buyScoreboard").click(function() {
    $(".scoreboard").css("display", "inline-block");
    $("#buyScoreboard").css("visibility", "hidden");
    clickApp.points -= 2;
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
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
    clickApp.shopButtonColors();
    clickApp.displayPoints();
  });
};


// Header button colors
clickApp.buyScoreButton = function() {
  if (clickApp.points >= 2 && $("#buyScoreboard").css("color") !== "rgb(0, 0, 0)") {
    $("#buyScoreboard").css(clickApp.clickableColors);
    clickApp.pointsButtonListener();
  } else if (clickApp.points < 2) {
    $("#buyScoreboard").css(clickApp.unclickableColors);
    $("#buyScoreboard").unbind();
  }
};

clickApp.buyPricesButton = function() {
  if (clickApp.points >= 10 && $("#buyPrices").css("color") !== "rgb(0, 0, 0)") {
    $("#buyPrices").css(clickApp.clickableColors);
    clickApp.pricesButtonListener();
  } else if (clickApp.points < 10) {
    $("#buyPrices").css(clickApp.unclickableColors);
    $("#buyPrices").unbind();
  }
};

clickApp.buyShopButton = function() {
  if (clickApp.points >= 20 && $("#buyShop").css("color") !== "rgb(0, 0, 0)") {
    $("#buyShop").css(clickApp.clickableColors);
    clickApp.shopButtonListener();
  } else if (clickApp.points < 20) {
    $("#buyShop").css(clickApp.unclickableColors);
    $("#buyShop").unbind();
  }
};

clickApp.updateHeaderButtonColors = function() {
  clickApp.buyScoreButton();
  clickApp.buyPricesButton();
  clickApp.buyShopButton();
};

// Score display
clickApp.displayPoints = function() {
  $(".points").html(clickApp.points);
};

clickApp.displayPointsPerSecond = function() {
  $(".pointsPerSecond").html(clickApp.pointsPerSecond);
};

// Main app functions
clickApp.setMainListener = function() {
  $(".clickBox").click(function() {
    clickApp.points += clickApp.pointsPerClick;
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
    clickApp.displayPoints();
  });
};

clickApp.start = function() {
  clickApp.setMainListener();
};

$(clickApp.start);
