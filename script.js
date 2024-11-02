const name = prompt("Qual é o seu nome?")
let toContinue = true

// Função para calcular a ingestão de carboidratos
function calculateCarbohydrates() {
    let weight = parseFloat(prompt("Qual é o seu peso (em kg)?"))
    let carbohydratesPerKg = 1.3 // Quantidade média sugerida por quilograma (mínimo 1.0 / máximo 1.5)
    let totalCarbohydrates = weight * carbohydratesPerKg
    let calories = totalCarbohydrates * 4

    alert(`Após a prática esportiva, você deve ingerir:\n${totalCarbohydrates.toFixed(2)} g de carboidratos, que equivalem a ${calories.toFixed(2)} calorias.`)

    if (confirm("Você gostaria de calcular uma ingestão de carboidratos diferente?")) {
        let newValue = parseFloat(prompt("Quantos gramas de carboidratos por kg você deseja usar?"))
        let totalCarbohydratesPersonalized = weight * newValue
        let caloriesPersonalized = totalCarbohydratesPersonalized * 4

        alert(`Você deve ingerir:\n${totalCarbohydratesPersonalized.toFixed(2)} g de carboidratos,\nque equivalem a ${caloriesPersonalized.toFixed(2)} calorias.`)
    } else {
        alert("Continuando com o cálculo padrão.")
    }
}

// Função para exibir referências bibliográficas
function showReferences() {
    const references = 
        "Nutrition & Athletic Performance, American College of Sports Medicine, 2009\n" +
        "Nutrição Esportiva: uma visão prática, 2008\n" +
        "Guia de Nutrição Esportiva, 1998\n" +
        "Revista Brasileira de Medicina do Esporte, 2009"

    alert("Referências Bibliográficas:\n" + references)
}

// Função para exibir dicas de recuperação
function showTips() {
    const tips =
        "Hidrate-se adequadamente após a atividade física.\n" +
        "Evite alimentos processados e ricos em açúcar.\n" +
        "Consuma uma refeição balanceada com proteínas e carboidratos.\n" +
        "Descanse bem para permitir a recuperação muscular."

    alert("Dicas de Recuperação:\n" + tips)
}

// Função principal do menu
function showMenu() {
    let option = prompt(
        `Escolha uma opção:\n1. Calcular\n2. Referências Bibliográficas\n3. Dicas de Recuperação\n4. Fechar`
    )

    switch (option) {
        case '1':
            calculateCarbohydrates()
            break
        case '2':
            showReferences()
            break
        case '3':
            showTips()
            break
        case '4':
            toContinue = false
            alert("Programa encerrado.")
            break
        default:
            alert("Opção inválida. Tente novamente.")
    }
}

// Loop principal que chama o menu até o usuário escolher sair
do {
    showMenu()
} while (toContinue)
