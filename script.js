import { myData } from "./functionsCEP.js";
import { isValidCPF } from "./functions.js";
import { validateCEP } from "./functionsCEP.js";

const estado = document.getElementById("inputEstado");
const cidade = document.getElementById("inputCidade");
const bairro = document.getElementById("inputBairro");
const numero = document.getElementById("inputNumero");
const logradouro = document.getElementById("inputLogradouro");
const data = document.getElementById("inputData");
const idade = document.getElementById("inputIdade");
const cep = document.getElementById("inputCEP");
const nome = document.getElementById("inputNome");
const checkbox = document.getElementById("LGPDCheck");
const cpf = document.getElementById("inputCPF");
const hobby = document.getElementById("inputHobby");
const divHobby = document.getElementById("divHobby");

const buttonAdd = document.getElementById("buttonAdd");
const buttonMenos = document.getElementById("buttonMenos");
const submit = document.getElementById("submit");

let contador = 1;

checkbox.checked ? "" : submit.setAttribute("disabled", true);

checkbox.addEventListener("click",()=>{
  submit.removeAttribute("disabled") 
})

cep.addEventListener("blur", async () => {
  const remove = cep.value.replace("-", "");

  validateCEP(remove)
    ? (smallCEP.innerText = "")
    : (smallCEP.innerText = "Digite um CEP válido");

  const dados = await fetch(`https://viacep.com.br/r/ws/${remove}/json/ `);
  const dadosConvertidos = await dados.json();

  myData(dadosConvertidos);
});

cpf.addEventListener("blur", () => {
  const remove = cpf.value.replace("-", "");
  const valideCPF = isValidCPF(remove);

  const smallCPF = document.getElementById("smallCPF");

  valideCPF
    ? (smallCPF.innerText = "")
    : (smallCPF.innerText = "Digite um CPF válido");
});

buttonAdd.addEventListener("click", () => {
  contador + 1;
  createLabel();
  createInput();
});

buttonMenos.addEventListener("click", () => {
  const menosHobby = document.getElementById(`hobby${contador}`);
  const menosLabelHobby = document.getElementById(`labelHobby${contador}`);
  menosLabelHobby.remove();
  menosHobby.remove();
  contador - 1;
});

const createLabel = () => {
  let elemento = document.createElement("label");
  elemento.setAttribute("for", "nome_" + contador);
  elemento.setAttribute("id", "labelHobby" + contador);
  elemento.textContent = "Hobby";

  divHobby.appendChild(elemento);
};

const createInput = () => {
  let elemento = document.createElement("input");
  elemento.setAttribute("type", "text");
  elemento.setAttribute("class", "col-md-12");
  elemento.setAttribute("id", "hobby" + contador);

  divHobby.appendChild(elemento);
};

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const textModal = document.getElementById("textModal");
    textModal.innerText = `
  {
  nome: ${nome.value},
  cpf: ${cpf.value},
  data de nascimento: ${data.value},
  idade: ${idade.value},
  cep: ${cep.value},
  rua: ${logradouro.value},
  numero : ${numero.value},
  bairro : ${bairro.value},
  cidade : ${cidade.value},
  estado: ${estado.value},
  hobbys : {
    ${hobby.value}
  }
  lgpd : ${checkbox.checked}
}
  `;
  })
;

const btnModal = document.getElementById("btnModal");
btnModal.addEventListener("click", () => {
  document.location.reload(true);
});
