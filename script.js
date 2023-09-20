const paragraphNode = document.querySelector('.text');

const nodeCloning = (contentText) => {

  let clonedNode = paragraphNode.cloneNode();
  clonedNode.textContent = contentText;
  document.querySelector('.terminal-text').appendChild(clonedNode);

}

const deepSearch = array => {

  for(let index in array) {

    const str = "--------";
    let i = 0;

    const reccFunc = (object) => {

      for(let property in object) {
        
        if(typeof(object[property]) !== "object") {
            
          nodeCloning(str.repeat(i) + property + ": " + object[property]);          
            
        } else {

          nodeCloning(str.repeat(i) + " (Nested object) " + property + ": =>");
          i++;
          reccFunc(object[property]);
            
        }
        
      }
    }

    reccFunc(array[index]);

  }
  
}

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => deepSearch(json));

document.querySelector('.receive-data-button').addEventListener('click', () => {

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => deepSearch(json));

})



  





