function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
const ul = document.getElementById('characters');
const url = 'https://rickandmortyapi.com/api/character';
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let characters = data.results;
        console.log(characters)
        for( let i = 0; i<6;i++){
           let div = createNode('div');
           div.className="card";
            let img = createNode('img');
            img.width=229;
            img.height=220;
            let span = createNode('span');
            img.src = characters[i].image;
            span.innerHTML = `<span class="info"><h2>${characters[i].name}</h2></span><br/><span class="info">${characters[i].status}</span>-<span class="info">${characters[i].species}</span><br/><span class="info gray" >Last known location:
            </span><br/><span class="info">${characters[i].location.name}</span><br/><span class="info gray" >First seen in:</span>`;
            append(div, img);
            append(div, span);
            append(ul, div);
        }

    })
    .catch(function (error) {
        console.log(error);
    });







