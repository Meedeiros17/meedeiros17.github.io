function buscarEndereco() {
    const cep = document.querySelector("#cep").value;
  
    if (cep.length !== 8) {
      alert("CEP inválido");
      return;
    }
  
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          document.querySelector("#rua").value = data.logradouro;
          document.querySelector("#estado").value = data.uf;
          document.querySelector("#cidade").value = data.localidade;
          document.querySelector("#bairro").value = data.bairro;
        } else {
          alert("O CEP não foi encontrado");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Erro ao buscar o endereço");
      });
  }
