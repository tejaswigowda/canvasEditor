/*Basics*/
var PATH = "libs/custom/";
var inspectorDisp = {
  show: function(mu){
    mu = mu || "";
    $(".inspector").hide();
    $("#insp-" + mu).stop().show();
  }
}

var header = {
  show: function(mu){
    mu = mu || "";
    document.getElementById("headerTitle").innetHTML = mu;
    $("#header").slideDown();
  },
  close: function(){
     $("#header").slideUp();
  }
}


function showInsp()
{
  $("body").toggleClass("showInsp");
}

