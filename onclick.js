function changeColor(){
    let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
    document.body.style.background= 'rgb(' + red + ',' + green + ',' + blue + ')';
    
  }