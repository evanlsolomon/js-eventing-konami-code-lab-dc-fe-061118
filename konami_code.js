const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

  // Write your JavaScript code inside the init() function
  function onKeyDownHandler(e) {
  
  const key = parseInt(e.detail || e.which);
  console.log(key);
  if (key === konamiCode[index]) {
    index++;
    console.log(index);
    if (index === konamiCode.length) {
      alert("Hurray!");
      index = 0;
    }
  } 
  else {
    index = 0;
  }
}






 
// Keep track of index outside of the event handler.

 
// This is the function that would be invoked by the event listener.


document.body.addEventListener('keydown', onKeyDownHandler);