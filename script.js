
let myDivs = document.getElementsByClassName('chosen');
let myFirstDiv = myDivs[0];
let actualIndex = 0;

window.onload = function()
{
    myFirstDiv.style.visibility = "visible"
    window.addEventListener('wheel', function(event)
    {
     if (event.deltaY < 0) {
      console.log('scrolling up');
      if(actualIndex >= 0){
          if(actualIndex !== 0){
            actualIndex--;
          }
      if(actualIndex >= 0){
        myDivs[actualIndex + 1].style.visibility = "hidden"
      }
      myDivs[actualIndex].style.visibility = "visible"
      myDivs[actualIndex].className +=  " fadeInBottom"
     }
    }
     else if (event.deltaY > 0) {
        if(actualIndex >= 0 && actualIndex < myDivs.length){
        actualIndex++;
        if(actualIndex < myDivs.length){
            myDivs[actualIndex - 1].style.visibility = "hidden"
        }
    
        myDivs[actualIndex].style.visibility = "visible"
       }
      console.log('scrolling down');
    //   document.getElementById('status').textContent= 'scrolling down';
     }
    });




}

