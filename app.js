const container = document.querySelector(".flex-container");
const header = document.querySelector(".pageHeader");

let headerContent = document.createElement('DIV');
headerContent.innerHTML = `<h1>Mini tienda de llaves</h1>
    <p>En esta mini app para comprar una llave, solo trabajamos la parte del FrontEnd. Se puede ver a muy a grandes rasgos el sencillo pero buen trabajo hecho para desarrollar esta sencilla aplicacion.</p>
`;
header.appendChild(headerContent);

function createKey(name, model, price){
    var img = `<img src="llave.jpg">`;
    var name = `<h2>${name}</h2>`;
    var model= `<h3>${model}</h3>`;
    var price = `<h4>${price}</h4>`;
    return [img, name, model, price];
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++){
    let model = Math.round(Math.random()*10000);
    let price = Math.round(Math.random()*10+30);
    let llave = createKey(`Llave ${i}`, `Modelo: ${model}`, `Precio: <b>$${price}</b>`);
    let div = document.createElement('DIV');
    div.addEventListener("click", () =>{
        document.querySelector(".key-data").value = model;
    })
    div.tabIndex = i;
    div.classList.add('flex-item', `item-${i}`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

container.appendChild(documentFragment);


