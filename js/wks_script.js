var myPix = ["img/PrettyPerfectHerPink.webp", "img/Pinkywinona.webp", "img/PrincessPink.webp", "img/VioletSplash.webp", "img/pinkypromisedtokeepitplatonic.webp", "img/coolfruitherjuice.webp", "img/Bluewithouther.webp", "img/niceorangeyellowsmiles.webp", "img/PrettyPerfectHerPink.webp", "img/Pinkywinona.webp", "img/PrincessPink.webp", "img/VioletSplash.webp"];
setInterval(function walkPix() {
   const a = myPix.length;
   const b = Math.floor(Math.random() * a - 0);
   document.getElementById("smallBlock").src = myPix[b]
}, 3700);
