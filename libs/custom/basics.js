/*Basics*/
var header = {
  set: function(mu){
    mu = mu || "";
    var t = "<button onclick='header.close()'><i class='fa fa-times'></i></button>" + mu;
    document.body.innerHTML += t;
  },
  remove: function(){
  },
  close: function(){
      $(".header").remove();
      $(".inspector").slideDown();
  }
}


function showInsp()
{
  $("body").toggleClass("showInsp");
}

