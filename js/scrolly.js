
function addHomeBtn(){
  var theWindow = $(window);
  var windowTop;
  var addHMBtn = $('#divToAddHomeBtn');
  var divXPos = addHMBtn.position().top;
  var HMBtn = document.getElementById('Home-Btn');

  theWindow.on('scroll', function(){
    divXPos = addHMBtn.position().top;
    windowTop = theWindow.scrollTop();

    if(windowTop > divXPos){
      if(addHMBtn.children("#extra").length != 1){
        HMBtn.style.display="inline";
        $('#Home-Btn').fadeIn(1000);
      }
    }else if(windowTop<divXPos){
      HMBtn.style.display="none";
    }

  });
}


function initNav(){
  $("#nav li a").click(function(e){
    e.preventDefault();
    var self = $(this);
    moveContent(self.attr("href"));
  })
}

function moveContent(targ){

  var x = targ;
  var xPos = $(x).position().top;

  switch(x){
    case "#education":
      $(window).scrollTop(xPos- 40);
      console.log(xPos);
    break;

    case "#human-services":
      $(window).scrollTop(xPos - 140);
    break;

    case "#environment":
      $(window).scrollTop(xPos - 140);
    break;
  }
}




$(function(){
  addHomeBtn();
  initNav();
});