import { myData } from "./functions";

const cep = document.getElementById("inputCEP");

const checkbox = document.getElementById('LGPDCheck')

checkbox.checked ? inputNome.value = "deu certo" : "deu errado"; 

cep.addEventListener("blur", async () => {
  const remove = cep.value.replace("-", "");

  const dados = await fetch(`https://viacep.com.br/r/ws/${remove}/json/ `);
  const dadosConvertidos = await dados.json();

  myData(dadosConvertidos);

});
