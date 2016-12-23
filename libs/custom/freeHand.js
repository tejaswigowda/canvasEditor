var toolName = "freeHand";
initTool(toolName, "fa fa-pencil", fhInit);

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


function fhInit(){
  document.getElementById("drawing-color").onchange = function() {
    theCanvas.freeDrawingBrush.color = this.value;
  };
  document.getElementById("drawing-shadow-color").onchange = function() {
    theCanvas.freeDrawingBrush.shadowColor = this.value;
  };
}

/*
  drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowWidth.onchange = function() {
    canvas.freeDrawingBrush.shadowBlur = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };
  drawingShadowOffset.onchange = function() {
    canvas.freeDrawingBrush.shadowOffsetX =
    canvas.freeDrawingBrush.shadowOffsetY = parseInt(this.value, 10) || 0;
    this.previousSibling.innerHTML = this.value;
  };
*/
