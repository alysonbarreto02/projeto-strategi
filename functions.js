
export const isValidCPF = (cpf) => {
  cpf = cpf.replace(/[^0-9]/gi, "");
  if (cpf.length == 11) {
      return true;
  }{
    return false
  }
  
}

