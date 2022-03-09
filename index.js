// Array of src urls from pool of content
const srcArray = [];
srcArray[0] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_0',
srcArray[1] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_254',
srcArray[2] = 'https://docs.google.com/presentation/d/1C9R1uJ3UxTYtFIvq5gJJqNN4mo3kpLpk-dIRYZLBVXc/preview?rm=minimal&slide=id.g1163cbbd3f2_0_5'

// Array to store used src objects for refilling srcArray when it is empty.
const srcArray2 = srcArray;

//function to grab random array url
function myFunction(items) {
    return items[Math.floor(Math.random()*items.length)];
}

//establish the first src on page load
function srcSet(){
    document.getElementById('zero').src = myFunction(srcArray);
}

//function to return a random id from the srcArray2 for use in removing the object and setting the src of the iframe
function randomId(items) {
    return Math.floor(Math.random()*items.length);
}

// //swap the src to a different random option
// function srcSwap(){
//     //variable to store the new src
//     var newId = myFunction(srcArray);
//     //variable to store the current id
//     var currentId = document.getElementById('zero').src;
//     //check to make sure the new id is not the same as the current before updating the src
//     if(newId == currentId) {
//         return srcSwap()
//     } else {
//         document.getElementById('zero').src = newId;
//     }

// }

srcSet();

//another solution for randomization that doesn't repeat until all have been used then if array is empty refills it
function srcSwap(){
    var newId = randomId(srcArray2);
    
    //gets the url from srcArray and sets the iFrame src with it
    var newUrl = srcArray2[newId];
    document.getElementById('zero').src = newUrl;
    
    //removes the object from srcArray so it is not repeated
    srcArray2.splice(newId, newId);

    //if the srcArray is empty refills it with the objects of srcArray2 and then empties srcArray2
    if (srcArray2.length == 1) {
        srcArray2.pop();
        srcArray2 = srcArray;
    }
}

//runs the shuffle constantly, works just comment out for development
//setInterval(srcSwap, 8000);