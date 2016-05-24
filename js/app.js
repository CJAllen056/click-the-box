var clickApp = clickApp || {};

clickApp.score          = 0;
clickApp.scorePerSecond = 0;
clickApp.scorePerClick  = 1;

clickApp.setMainListener = function() {
  $(".clickBox").click(function() {
    clickApp.score += clickApp.scorePerClick;
  });
};

clickApp.start = function() {
  clickApp.setMainListener();
};

$(clickApp.start);
