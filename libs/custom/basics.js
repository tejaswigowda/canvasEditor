/*Basics*/
var PATH = "libs/custom/";
var CURRTOOL = null;

var inspectorDisp = {
  default: "doc",
  show: function(mu){
    mu = mu || inspectorDisp.default;
    $(".inspector").hide();
    $("#insp-" + mu).stop().show();
  }
}

var header = {
  show: function(mu){
    mu = mu || "";
    document.getElementById("headerTitle").innerHTML = mu;
    $("#header").slideDown();
  },
  close: function(){
     deactivateTool();
     $("#header").slideUp();
  }
}


function showInsp(f)
{
  if(f){
    $("body").addClass("showInsp");
  }
  else{
    $("body").toggleClass("showInsp");
  }
  if(CURRTOOL == null) inspectorDisp.show();
}

function toolSelected(tool)
{
  deactivateTool();

  CURRTOOL = tool;
  inspectorDisp.show(CURRTOOL)

  setTimeout(tool + "Active()", 100);
}



function toolClose()
{
}

function deactivateTool()
{
  inspectorDisp.show();
  if(CURRTOOL == null) return;
  setTimeout(CURRTOOL + "DeActive()",0);
  CURRTOOL = null;
}
