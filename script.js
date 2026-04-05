//solicita ao usuario a opcao de vinho desejada por este
let vinho = prompt("Qual vinho o senhor deseja\n 1 - Tinto\n2 - Branco\n3 - Rose")
//solicita ao usuario o ano da safra 
let safra = prompt("De qual ano o senhor deseja a safra?")
//solicita a quantidade de vinhos 
let estoque = prompt("Qual a quantidade em estoque?")

//inserção de variaveis com o prompt sempre retornando em string, tornando necessario converte-los em valor numerico 
vinho = parseInt(vinho)
safra = parseInt(safra) 
estoque = parseInt(estoque)

// verifica o conjunto valido de opcoes 
if (vinho < 1 || vinho > 3) {
    // Se a opção for inválida, exibe um alerta avisando o usuário
    alert("Digite uma opção válida")
}
else {
    // Se a opção for válida avisa que os dados serão exibidos no console
    alert("As informações sobre seu vinho estão expostas na aba console!")
}

// Verifica cada opção escolhida e exibe os dados correspondentes no console
if (vinho == 1) {

    console.log(`Vinho cadastrado: Tinto\nSafra: ${safra}\nQntd no estoque: ${estoque}´)
}
else if (vinho == 2) {

    console.log(`Vinho cadastrado: Branco\nSafra: ${safra}\nQntd no estoque: ${estoque}´)
}
else {

    console.log(`Vinho cadastrado: Rosé\nSafra: ${safra}\nQntd no estoque: ${estoque}´)
}