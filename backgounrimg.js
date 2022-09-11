const images = ["2.jpg","3.jpg","4.jpg"];
const chosenImage = images[Math.floor(Math.random()*images.length)]
const bgImage = document.querySelector('body');

bgImage.style.backgroundImage = `url('./${chosenImage}')`;
// bgImage.style.backgroundSize = "cover";
