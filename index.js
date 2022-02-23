// function random_item(items)
// {
  
// return items[Math.floor(Math.random()*items.length)];
     
// }

// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));
var iFrameSource = document.getElementById('zero').src;
const srcArray = [];
srcArray[0] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_0',
srcArray[1] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_254',
srcArray[2] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_5'

//function to grab random array url
function myFunction(items) {
    //console.log("hello"); 1
    //console.log(iFrameSource); 2
    return items[Math.floor(Math.random()*items.length)];
}

//console.log(myFunction(srcArray)); 3
function srcSwap(){
    document.getElementById('zero').src = myFunction(srcArray);
}

//runs the shuffle constantly, works just comment out for development
//setInterval(srcSwap, 3000);