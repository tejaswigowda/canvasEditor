var toolName = "freeHand";
initTool(toolName, "fa fa-pencil");

/** FREE HAND */
function freeHandActive()
{
  header.show("Free hand");
  theCanvas.isDrawingMode = true
}

function freeHandDeActive()
{
  theCanvas.isDrawingMode = false;
  //inspectorDisp.show();
}
