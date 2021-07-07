const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

// console.log(bgImage);

bgImage.src = `./src/img/${chosenImage}`;
bgImage.id = "bgImage";
document.body.appendChild(bgImage);
