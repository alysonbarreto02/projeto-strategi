export const validateCEP = (cep) => {
    cep = cep.replace(/[^0-9]/gi, "");
    if (cep.length == 8) {
        return true;
    }{
      return false
    }
  }

  export const myData = (r) => {
    inputLogradouro.value = r.logradouro;
    inputCidade.value = r.localidade;
    inputBairro.value = r.bairro;
    inputEstado.value = r.uf;
  };