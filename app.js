function buscarCep(){
    const cep = document.querySelector('#cep').value
    const url = 'https://brasilapi.com.br/api/cep/v2/'+cep


    document.getElementById('state').value = ""
    document.getElementById('street').value = ""
    document.getElementById('city').value = ""
    fetch(url).then(response => response.json())
    .then(response => {

        if(response.cep){
            console.log(response)
            document.getElementById('state').value = response.state
            document.getElementById('street').value = response.street
            document.getElementById('city').value = response.city
        }else{
            alert("Cep invalido");
            document.getElementById('field').disabled=false;
        
        }

    })

}
