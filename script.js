const receiveBtn = document.querySelector('.receive-data-button');
const paragraphNode = document.querySelector('.text');
const paragraphParent = document.querySelector('.terminal-text');

const nodeCloning = (contentText) => {
  let clonedNode = paragraphNode.cloneNode();
  clonedNode.textContent = contentText;
  document.querySelector('.terminal-text').appendChild(clonedNode);
}

receiveBtn.addEventListener('click', () => {

    nodeCloning("Receiving data...");

    const dataRetriever = new Promise((resolve, reject) => {

    setTimeout(() => {

      nodeCloning("Prepairing data...");

      const serverData = {
        
        port: 2080,
        IP: "181.414.75.82",
        host: "EthernetWalkers"

      }
      
      resolve(serverData);

    }, 2000)

  });


  dataRetriever.then(data => {

    const p = new Promise((resolve, reject) => {

      setTimeout(() => {

        data.modified = true;
        resolve(data);

      }, 2000);

    }).then(clientData => {

      nodeCloning("Modification data...");
      setTimeout(() => {

        nodeCloning("Data received: ");
        for(let prop in data) {
          nodeCloning(prop + ": " + data[prop]);
        }
      
      }, 2000)
    
    });

  })

});

// const dataRetriever = new Promise((resolve, reject) => {

//   setTimeout(() => {

//     console.log("Preparing data...");

//     const serverData = {
      
//       port: 2080,
//       IP: "181.414.75.82",
//       host: "EthernetWalkers"

//     }
    
//     resolve(serverData);

//   }, 2000)

// });


// dataRetriever.then(data => {

//   const p = new Promise((resolve, reject) => {

//     setTimeout(() => {

//       data.modified = true;
//       resolve(data);

//     }, 2000);

//   }).then(clientData => {

//     console.log("Data received", clientData);
  
//   });

// })