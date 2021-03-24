const dragElementen = document.querySelector("#dragElement");

dragElementen.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", dragElementen.id);
});

for (const dropZone of document.querySelector(".drop-zone")) {
  dropZone.addEventListener("dragover", e => {
    e.preventDefault();
    dropZone.classList.add("drop-zone--over");
  });
}

//event.target
// variabelen aanmaken van de figures 
// verberg de kaarten (soort toggle door .hidden)
// classList om een array te koppelen
// 2 eventlisteners voor click/hover
// e = event
// let figures in array voor de classlist 
// parentNode html groep (parent) 
// e.
// ! soort van :not
// siblings verwijst naar de parentNode
// sibling 
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/