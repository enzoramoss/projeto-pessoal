const name = prompt("Qual é o seu nome?")

function calculateCalories(weight, carbsPerKg = 1.5) {
    const totalCarbohydrates = weight * carbsPerKg
    const calories = totalCarbohydrates * 4 // Cada grama de carboidrato tem 4 calorias
    alert(`Após a prática esportiva, você deve ingerir:\n${totalCarbohydrates.toFixed(2)} g de carboidratos, que equivalem a ${calories.toFixed(2)} calorias.`)
}

function personalizedCarbCalculation(weight) {
    const newCarbsPerKg = parseFloat(prompt("Quantos gramas de carboidratos por kg você deseja usar?"))
    if (isValidNumber(newCarbsPerKg)) {
        calculateCalories(weight, newCarbsPerKg)
    } else {
        alert("Valor inválido. Retornando ao menu.")
    }
}

function isValidNumber(value) {
    return !isNaN(value) && value > 0
}

function showReferences() {
    const references = "\nNutrition & Athletic Performance, American College of Sports Medicine, 2009\nNutrição Esportiva: uma visão prática, 2008\nGuia de Nutrição Esportiva, 1998\nRevista Brasileira de Medicina do Esporte, 2009"
    alert("Referências Bibliográficas:\n" + references)
}

function showTips() {
    const tips = "\nHidrate-se adequadamente após a atividade física.\nEvite alimentos processados e ricos em açúcar.\nConsuma uma refeição balanceada com proteínas e carboidratos.\nDescanse bem para permitir a recuperação muscular."
    alert("Dicas de Recuperação:\n" + tips)
}

let toContinue = true

do {
    const option = prompt("Escolha uma opção:\n1. Calcular\n2. Referências Bibliográficas\n3. Dicas de Recuperação\n4. Fechar")

    switch (option) {
        case '1':
            const weight = parseFloat(prompt("Qual é o seu peso (em kg)?"))
            if (isValidNumber(weight)) {
                calculateCalories(weight)
                if (confirm("Você gostaria de calcular uma ingestão de carboidratos diferente?")) {
                    personalizedCarbCalculation(weight)
                }
            } else {
                alert("Peso inválido. Retornando ao menu.")
            }
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
} while (toContinue)
