// Array of src urls from pool of content
const srcArray = [];
srcArray[0] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_0',
srcArray[1] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_254',
srcArray[2] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_5'

// Array to store used src objects for refilling srcArray when it is empty.
var srcArray2 = srcArray;

// //function to grab random array url
// function myFunction(items) {
//     return items[Math.floor(Math.random()*items.length)];
// }

// //establish the first src on page load
// function srcSet(){
//     document.getElementById('zero').src = myFunction(srcArray);
// }

//function to return a random id from the srcArray2 for use in removing the object and setting the src of the iframe
function randomId(items) {
    return Math.floor(Math.random()*items.length);
}

//another solution for randomization that doesn't repeat until all have been used then if array is empty refills it
function srcSwap(){
    var newId = randomId(srcArray2);
    
    //gets the url from srcArray and sets the iFrame src with it
    //var newUrl = srcArray2[newId];
    document.getElementById('zero').src = srcArray2[newId];
    
    //removes the object from srcArray so it is not repeated
    srcArray2.splice(newId, newId);

    //if the srcArray2 is empty refills it with the objects of srcArray
    if (srcArray2.length == 1) {
        srcArray2 = srcArray2.concat(srcArray);
    }
}

srcSwap();
//runs the shuffle constantly, works just comment out for development
setInterval(srcSwap, 8000);