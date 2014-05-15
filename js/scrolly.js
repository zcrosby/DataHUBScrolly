/*Tab functionality*/
$(document).ready(function ($) {
  $('#tabs').tab();
});
/*END Tab functionality*/

function addHomeBtn(){
  var theWindow = $(window);
  var windowTop;
  var addHMBtn = $('#divToAddHomeBtn');
  var divXPos = addHMBtn.position().top;
  var HMBtn = document.getElementById('home-btn');

  theWindow.on('scroll', function(){
    divXPos = addHMBtn.position().top;
    windowTop = theWindow.scrollTop();

    if(windowTop > divXPos){
      if(addHMBtn.children("#extra").length != 1){
        HMBtn.style.display="inline";
        $('#home-btn').fadeIn(1000);
      }
    }else if(windowTop<divXPos){
      HMBtn.style.display="none";
    }

  });
}

function moveContent(targ){

  var x = targ;
  var xPos = $(x).position().top;
  var len = 30;

  switch(x){
    case "#education":
      $(window).scrollTop(xPos);
      console.log(xPos);
    break;

    case "#human-services":
      $(window).scrollTop(xPos - len);
    break;

    case "#environment":
      $(window).scrollTop(xPos - len);
    break;

    case "#arts-culture":
      $(window).scrollTop(xPos - len);
    break;

    case "#economy":
      $(window).scrollTop(xPos - len);
    break;

    case "#housing":
      $(window).scrollTop(xPos - len);
    break;
  }
}

function initNav(){
  $("#nav li a").click(function(e){
    e.preventDefault();
    var self = $(this);
    moveContent(self.attr("href"));
  })
}

$(function(){
  addHomeBtn();
  initNav();
});