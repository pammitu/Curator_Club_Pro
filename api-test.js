require('isomorphic-fetch');

fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
    .then(response => response.json())
    .then(data => {
        
        const objectIDs = data.objectIDs.slice(0, 3);

        return Promise.all(objectIDs.map(id =>
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                .then(response => response.json())
        ));
    })
    .then(objects => console.log(objects))
    .catch(error => console.error('Error:', error));
