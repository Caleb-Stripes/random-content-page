// Array of src urls from pool of content
const srcArray = [];
srcArray[0] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_0',
srcArray[1] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_254',
srcArray[2] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_5',
srcArray[3] = 'https://www.w3schools.com/js/js_if_else.asp',
srcArray[4] = 'https://www.w3schools.com/jsref/met_loc_reload.asp'

//an array to work with as the functions run
let array2 = srcArray;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function srcSwap(){
      //check if the array is empty and refresh it
      if (array2.length <= 1) {
          location.reload();
      }

      //shuffle sources
      shuffle(array2);

      //take the last one for the iFrame src
      document.getElementById('zero').src = array2.pop();
  }

  srcSwap();
  setInterval(srcSwap, 3000);