const paragraphNode = document.querySelector('.text');

const nodeCloning = (contentText) => {

  let clonedNode = paragraphNode.cloneNode();
  clonedNode.textContent = contentText;
  document.querySelector('.terminal-text').appendChild(clonedNode);

}

// const obj1 = {
//   name: "John",
//   age: 18,
//   link: {
//     link1: 1,
//     kink2: 2
//   }
// }
// const obj2 = {
//   name: "Asda",
//   age: 118,
//   linkSecond: {
//     linkSecond: 1,
//     kinkThreed: {
//       name: "Azure",
//       age: "417"
//     }
//   }
// }
// const obj3 = {
//   name: "Gagfield",
//   age: 8,
//   linkThreed: {
//     linkThreed: 1,
//     kinkFourd: 2
//   }
// }
// const arr = [obj1, obj2, obj3];



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

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => deepSearch(json));





  





