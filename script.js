const receiveBtn = document.querySelector('.receive-data-button');
const paragraphNode = document.querySelector('.text');
const paragraphParent = document.querySelector('.terminal-text');

const nodeCloning = (contentText) => {

  let clonedNode = paragraphNode.cloneNode();
  clonedNode.textContent = contentText;
  document.querySelector('.terminal-text').appendChild(clonedNode);

}

receiveBtn.addEventListener('click', () => {

  nodeCloning("Receivind data...");

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      nodeCloning("Prepairing data...");

      const serverData = {
        space: "Russia",
        IP: "187.315.86.17",
        host: "Eternet Walkers"
      }
      resolve(serverData)
    }, 2000)
  }).then(data => {
    
    const p = new Promise((resolve, reject) => {
      
      setTimeout(() => {

        nodeCloning("Modification data...");
        data.modify = true;
        resolve(data)
      }, 2000)

    }).then(modifiedData => {
      setTimeout(() => {

        nodeCloning("Data prepared: ");
        for(let prop in modifiedData) {
          nodeCloning(prop + ": " + modifiedData[prop]);
        }
        nodeCloning("____________________________");
      }, 2000)
    })
  })

});


