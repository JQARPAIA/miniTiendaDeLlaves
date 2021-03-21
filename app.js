const container = document.querySelector(".flex-container");

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


