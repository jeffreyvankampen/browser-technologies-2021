const figures = document.querySelectorAll('figure');
figures.forEach(figure => {
    figure.addEventListener('click', (e) => {
        e.stopPropagation()
        const event = e.target.closest('figure') 
        const nextFigure = event.nextSibling
        const siblings = getSiblings(event)
        console.log(siblings)
    });
})
// closest 
// stopPropagation 
// => een callback function
const getSiblings = (e) => {
    let siblings = [];
  
    if (!e.parentNode) {
      return siblings;
    }
  
    let sibling = e;
  
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };

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