var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // store a ref. on the dragged elem
      dragged = event.target;
      // make it half transparent
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset the transparency
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // prevent default to allow drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }
    
  }, false);


// 1e versie

// const dragElementen = document.querySelector("#dragElement");
// const img =  document.querySelector('img')

// dragElementen.addEventListener("dragstart", e => {
//   e.dataTransfer.setData("text/plain", dragElementen.id);
// });

// const dropZones = document.querySelectorAll(".drop-zone")

// for (const dropZone of dropZones) {
//   dropZone.addEventListener("dragover", e => {
//     e.preventDefault();
//     dropZone.classList.add("drop-zone--over");
//   });
// }


// 2e versie

// const dragElementen = document.getElementById("dragElement");  
// const img =  document.querySelector('img')
// img.addEventListener("dragstart", e => {
//   e.dataTransfer.setData("text/plain", e.target.img);
// });
// const dropZones = document.querySelectorAll(".drop-zone");
// for (const dropZone of dropZones) {
//   dropZone.addEventListener("dragover", e => {
//     e.preventDefault();
//     dropZone.classList.add("drop-zone--over");
//   });
// }







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