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

    if(x == "#education"){
      $(window).scrollTop(xPos + 80);
    }
    else{
      $(window).scrollTop(xPos - len);
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