var toolName = "doc";
initTool(toolName, "fa fa-file");
/** FREE HAND */
function docActive()
{
  showInsp(true);
}

function docDeActive()
{
 
}


function updateCanvasDim()
{
 var w = $("#inspectorWrapper #canvas-width").val();
 var h = $("#inspectorWrapper #canvas-height").val();
 theCanvas.setDimensions({width:w, height:h});
}
