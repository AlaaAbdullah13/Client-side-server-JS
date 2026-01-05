var originalImg = document.querySelector("#header img");

originalImg.style.position = "absolute";
originalImg.style.top = "0";
originalImg.style.right = "0";


var clonedImg = originalImg.cloneNode(true);

clonedImg.style.top = "auto";    
clonedImg.style.right = "auto";  
clonedImg.style.left = "0";

document.body.appendChild(clonedImg);


var centerDiv = document.querySelector(".center");
centerDiv.style.height = "70vh";
centerDiv.style.display = "flex";
centerDiv.style.flexDirection = "column";
centerDiv.style.justifyContent = "center";
centerDiv.style.alignItems = "center";