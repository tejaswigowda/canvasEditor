var toolName = "freeHand";
$("#toolbar").append('<button type="button" class="button button-default"><span class="icon fa fa-pencil"></span></button>');
loadFile(PATH + toolName + ".insp", function(data){
console.log(data);
  $("#inspectorWrapper").append("<div class='inspector' id='insp-" + toolName + "'>" + data + "</div>");
});

/** FREE HAND */
function freeHandActive()
{
  fhS = true;
  dkrm.canvas.isDrawingMode = fhS;
}

function freeHandDeActive()
{
  fhS = false;
  dkrm.canvas.isDrawingMode = fhS;
}
