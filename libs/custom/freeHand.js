/*Basics*/
var header = {
  set: function(mu){
  },
  remove: function(){
  }
}


/** FREE HAND */
var fhS = false;
function toggleFreeHand()
{
  if(fhS){
    freeHandDeActive();
  }
  else{
    freeHandActive();
  } 
}

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
