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
    clickApp.mouses++;
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
    clickApp.displayPoints();
    clickApp.mousesButtonCost();
    clickApp.mousesButtonCount();
    clickApp.displayPointsPerSecond();
  });
};

clickApp.monkeysButtonListener = function() {
  $("#monkeysButton").click(function() {
    clickApp.pointsPerSecond += clickApp.monkeysClicksPerSecond;
    clickApp.points -= clickApp.monkeysCost;
    clickApp.monkeysCost = Math.floor(clickApp.monkeysCost * 1.15);
    clickApp.monkeys++;
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
    clickApp.displayPoints();
    clickApp.monkeysButtonCost();
    clickApp.monkeysButtonCount();
    clickApp.displayPointsPerSecond();
  });
};

clickApp.childrenButtonListener = function() {
  $("#childrenButton").click(function() {
    clickApp.pointsPerSecond += clickApp.childrenClicksPerSecond;
    clickApp.points -= clickApp.childrenCost;
    clickApp.childrenCost = Math.floor(clickApp.childrenCost * 1.15);
    clickApp.children++;
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
    clickApp.displayPoints();
    clickApp.childrenButtonCost();
    clickApp.childrenButtonCount();
    clickApp.displayPointsPerSecond();
  });
};

clickApp.professionalsButtonListener = function() {
  $("#professionalsButton").click(function() {
    clickApp.pointsPerSecond += clickApp.professionalsClicksPerSecond;
    clickApp.points -= clickApp.professionalsCost;
    clickApp.professionalsCost = Math.floor(clickApp.professionalsCost * 1.15);
    clickApp.professionals++;
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
    clickApp.displayPoints();
    clickApp.professionalsButtonCost();
    clickApp.professionalsButtonCount();
    clickApp.displayPointsPerSecond();
  });
};

// Shop button costs
clickApp.mousesButtonCost = function() {
  $(".mousesCost").html(clickApp.mousesCost + "p");
};

clickApp.monkeysButtonCost = function() {
  $(".monkeysCost").html(clickApp.monkeysCost + "p");
};

clickApp.childrenButtonCost = function() {
  $(".childrenCost").html(clickApp.childrenCost + "p");
};

clickApp.professionalsButtonCost = function() {
  $(".professionalsCost").html(clickApp.professionalsCost + "p");
};

// Shop button counts
clickApp.mousesButtonCount = function() {
  $(".mousesCount").html(clickApp.mouses);
};

clickApp.monkeysButtonCount = function() {
  $(".monkeysCount").html(clickApp.monkeys);
};

clickApp.childrenButtonCount = function() {
  $(".childrenCount").html(clickApp.children);
};

clickApp.professionalsButtonCount = function() {
  $(".professionalsCount").html(clickApp.professionals);
};

// Shop button colours
clickApp.mousesButtonColors = function() {
  if (clickApp.points >= clickApp.mousesCost && $("#mousesButton").css("color") !== "rgb(0, 0, 0)") {
    $("#mousesButton").css(clickApp.clickableColors);
    clickApp.mousesButtonListener();
  } else if (clickApp.points < clickApp.mousesCost) {
    $("#mousesButton").css(clickApp.unclickableColors);
    $("#mousesButton").unbind();
  }
};

clickApp.monkeysButtonColors = function() {
  if (clickApp.points >= clickApp.monkeysCost && $("#monkeysButton").css("color") !== "rgb(0, 0, 0)") {
    $("#monkeysButton").css(clickApp.clickableColors);
    clickApp.monkeysButtonListener();
  } else if (clickApp.points < clickApp.monkeysCost) {
    $("#monkeysButton").css(clickApp.unclickableColors);
    $("#monkeysButton").unbind();
  }
};

clickApp.childrenButtonColors = function() {
  if (clickApp.points >= clickApp.childrenCost && $("#childrenButton").css("color") !== "rgb(0, 0, 0)") {
    $("#childrenButton").css(clickApp.clickableColors);
    clickApp.childrenButtonListener();
  } else if (clickApp.points < clickApp.childrenCost) {
    $("#childrenButton").css(clickApp.unclickableColors);
    $("#childrenButton").unbind();
  }
};

clickApp.professionalsButtonColors = function() {
  if (clickApp.points >= clickApp.professionalsCost && $("#professionalsButton").css("color") !== "rgb(0, 0, 0)") {
    $("#professionalsButton").css(clickApp.clickableColors);
    clickApp.professionalsButtonListener();
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
clickApp.buttonsButtonListener = function() {
  $("#buyButtons").click(function() {
    $("header").html("<div class='buyButton' id='buyScoreboard'>buy scoreboard<span class='hiddenPrice'>: 2p</span></div><div class='buyButton' id='buyPrices'>buy prices<span class='hiddenPrice'>: 10p</span></div><div class='buyButton' id='buyShop'>buy shop<span class='hiddenPrice'>: 20p</span></div><div class='buyButton' id='buyUpgradeShop'>buy upgrades<span class='hiddenPrice'>: 100p</span></div><div class='buyButton' id='buyStyleShop'>buy styles<span class='hiddenPrice'>: 200p</span></div>");
    clickApp.points -=1;
  });
};

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
  $("#buyPrices").click(function() {
    $(".hiddenPrice").removeClass("hiddenPrice");
    $("#buyPrices").css("visibility", "hidden");
  });
};

clickApp.shopButtonListener = function() {
  $("#buyShop").click(function() {
    $(".rightBoard").css("display", "inline-block");
    $(".leftBoard").css("width", "70%");
    $("#buyShop").css("visibility", "hidden");
    clickApp.points -= 20;
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
    clickApp.displayPoints();
  });
};


// Header button colors
clickApp.buyButtonsButton = function() {
  if (clickApp.points >= 1) {
    $("#buyButtons").css(clickApp.clickableColors);
    clickApp.buttonsButtonListener();
  }
};

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

clickApp.buyUpgradeShopButton = function() {
  if (clickApp.points >= 100 && $("#buyUpgradeShop").css("color") !== "rgb(0, 0, 0)") {
    $("#buyUpgradeShop").css(clickApp.clickableColors);
    clickApp.shopButtonListener();
  } else if (clickApp.points < 20) {
    $("#buyUpgradeShop").css(clickApp.unclickableColors);
    $("#buyUpgradeShop").unbind();
  }
};

clickApp.buyStyleShopButton = function() {
  if (clickApp.points >= 200 && $("#buyStyleShop").css("color") !== "rgb(0, 0, 0)") {
    $("#buyStyleShop").css(clickApp.clickableColors);
    clickApp.shopButtonListener();
  } else if (clickApp.points < 20) {
    $("#buyStyleShop").css(clickApp.unclickableColors);
    $("#buyStyleShop").unbind();
  }
};

clickApp.updateHeaderButtonColors = function() {
  clickApp.buyScoreButton();
  clickApp.buyPricesButton();
  clickApp.buyShopButton();
  clickApp.buyUpgradeShopButton();
  clickApp.buyStyleShopButton();
};

// Score display
clickApp.displayPoints = function() {
  $(".points").html(Math.floor(clickApp.points));
};

clickApp.displayPointsPerSecond = function() {
  $(".pointsPerSecond").html(clickApp.pointsPerSecond.toFixed(1));
};

clickApp.updateScore = function() {
  clickApp.points += (clickApp.pointsPerSecond/5);
  clickApp.displayPoints();
  clickApp.updateHeaderButtonColors();
  clickApp.shopButtonColors();
};

// Main app functions
clickApp.setMainListener = function() {
  $(".clickBox").click(function() {
    clickApp.points += clickApp.pointsPerClick;
    clickApp.buyButtonsButton();
    clickApp.updateHeaderButtonColors();
    clickApp.shopButtonColors();
    clickApp.displayPoints();
  });
};

clickApp.start = function() {
  clickApp.setMainListener();
  setInterval("clickApp.updateScore()", 200);
};

$(clickApp.start);
