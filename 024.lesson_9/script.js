const imgNames = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg", "8.svg", "9.svg"];


const indexRndm = Math.floor(Math.random() * imgNames.length);
const imgNameRan = imgNames[indexRndm];
const imgRndm = document.getElementById("random_image");
imgRndm.src = "images/" + imgNameRan;