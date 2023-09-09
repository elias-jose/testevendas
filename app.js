var telemoveis = [
   {
      id: 1,
      descricao: "Iphone 14 Pro MAX",
      nome: "Apple",
      preco: "1,1200,000",
      imagem: "./iPhone-14-Pro-MAX.png",
   },

   {
      id: 2,
      descricao: "Samsung Galaxy S22 Ultra",
      nome: "Samsung",
      preco: "72,100",
      imagem: "./Samsung-Galaxy-S22-Ultra.png",
   },

   {
      id: 3,
      descricao: "Iphone 8",
      nome: "Apple",
      preco: "93,000",
      imagem: "./img1.jpg",
   },

   {
      id: 4,
      descricao: "Iphone X",
      nome: "Apple",
      preco: "120,000",
      imagem: "./img2.jpg",
   },

   {
      id: 5,
      descricao: "Samsung Galaxy A10 32GB",
      nome: "Samsung",
      preco: "100,000",
      imagem: "./img7.jpg",
   },

   {
      id: 6,
      descricao: "Samsung Galaxy A31",
      nome: "Samsung",
      preco: "120,000",
      imagem: "./img8.jpg",
   },

   {
      id: 7,
      descricao: "Samsung Galaxy Edge S7",
      nome: "Samsung",
      preco: "80,000",
      imagem: "./img9.jpg",
   },
];

var computadores = [
   {
      id: 1,
      descricao: "PC ACER",
      nome: "Computador",
      preco: "93,000",
      imagem: "./img3.jpg",
   },

   {
      id: 2,
      descricao: "PC LENOVO",
      nome: "Computador",
      preco: "120,000",
      imagem: "./img6.jpg",
   },

   {
      id: 3,
      descricao: "PC HP",
      nome: "Computador",
      preco: "100,000",
      imagem: "./img5.jpg",
   },

   {
      id: 4,
      descricao: "PC DELL",
      nome: "Computador",
      preco: "120,000",
      imagem: "./img4.jpg",
   },
];

var carrinhoObj = [];

const telemoveisHtml = document.getElementById("tel");
const computadoresHtml = document.getElementById("pcall");
var carrinhoHtml = document.getElementById("carrinho-container");

var dta = new Date().toLocaleDateString("pt-BR", {
   day: "numeric",
   month: "short",
   year: "numeric",
});

InicilazeComponent = () => {
   telemoveisHtml.innerHTML = "";
   //Fazendo loop no objeto para exibir o resultado

   telemoveis.map((item) => {
      //Inserindo cada produto com os respectivos valores

      telemoveisHtml.innerHTML += `
         <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">${item.nome}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${item.preco} <small class="text-muted">/ Kz</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Id produto: ${item.id}</li>
              <li>${item.descricao}</li>
              <li>Entrega ${dta} </li>
              <li>Garantia de até 10 meses</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Adicionar ao carrinho</button>
          </div>
        </div>
        `;
   });

   computadores.map((item) => {
      computadoresHtml.innerHTML += `
      <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">${item.nome}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">${item.preco} <small class="text-muted">/ Kz</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Id produto ${item.id}</li>
              <li>${item.descricao}</li>
              <li>Entrega ${dta}</li>
              <li>Garantia de até 10 meses</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-primary">Adicionar ao carrinho</button>
          </div>
        </div>
        `;
   });
};

//Função para obter os produtos seleccionados pelo usuário

actualizarCarrinho = (imageAt, attr, prc) => {
   v += 1;
   carrinhoHtml.innerHTML = v;

   obj.data = dta;
   obj.img = imageAt;
   obj.descricao = attr;
   obj.preco = prc;

   carrinhoObj.push(obj);
   alert(carrinhoObj);
};

//Inicilazar os componentes do site;

InicilazeComponent();

//Função para iniciar o carrinho

InicilazeCarrinho = () => {
   if (carrinhoObj[0] == undefined) {
      alert("Erro");
   } else {
      var header = document.querySelectorAll("header");
      header.forEach((item) => (item.style.display = "none"));
      telemoveisHtml.innerHTML = "";
      computadoresHtml.innerHTML = "";
      carrinhoObj.map((item) => {
         telemoveisHtml.innerHTML += `
                <div class="container">
                    <span> ${item.data} </span>
                    <h1> ${item.descricao} </h1>
                    <img src="${item.img}" alt="Imagem de ${item.descricao}"/>
                    <button type="button" onclick="removeC()">
                        Remover do carrinho
                    </button>
                    <p> Preço: ${item.preco} </p>
                </div>
            `;
      });
   }
};
