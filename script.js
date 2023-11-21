function validaFormulario(){
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;
    

    //validação de campos vazios
    if(nome === "" || email === "" || senha === ""){
        alert("ERRO..:\nFaça o que é pedido")
        return
    }

    //Validação do campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]=$/
    if (!emailRegex.test(email)) {
        alert("Digite um email válido")
        return
    }

    //Validação do campo da senha
    if (senha.lenght > 8) {
        alert("A senha deve conter 8 caracteres")
        return

    }
    alert("Cadastro realizado com sucesso!")
}
