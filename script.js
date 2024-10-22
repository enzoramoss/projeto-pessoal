const name = prompt("Qual é o seu nome?")
let weight

while (true) {
    weight = parseFloat(prompt("Qual é o seu peso (em kg)?"))
    if (weight > 0) {
        break
    } else {
        alert("Por favor, insira um peso válido (número positivo).")
    }
}

let toContinue = true

do {
    let option = prompt("Escolha uma opção:\n1. Calcular\n2. Referências Bibliográficas\n3. Dicas de Recuperação\n4. Fechar")

    switch (option) {
        case '1':
            let carbohydratesPerKg = 1.5 // Quantidade recomendada máxima
            let totalCarbohydrates = weight * carbohydratesPerKg // Total em gramas
            let calories = totalCarbohydrates * 4 // Cada grama de carboidrato tem 4 calorias

            alert(`Após a prática esportiva, ${name}, você deve ingerir:\n${totalCarbohydrates.toFixed(2)} g de carboidratos,\nque equivalem a ${calories.toFixed(2)} calorias.`)
            break

        case '2':
            let references = [
                "Nutrition and Athletic Performance, American College of Sports Medicine, 2009",
                "Nutrição Esportiva: uma visão prática, 2008",
                "Guia de Nutrição Esportiva, 1998",
                "Revista Brasileira de Medicina do Esporte, 2009"
            ]

            let referenceList = ""
            for (let i = 0; i < references.length; i++) {
                referenceList += references[i] + "\n"
            }

            alert("Referências Bibliográficas:\n" + referenceList)
            break

        case '3':
            let tips = [
                "Hidrate-se adequadamente após a atividade física.",
                "Consuma uma refeição balanceada com proteínas e carboidratos.",
                "Descanse bem para permitir a recuperação muscular.",
                "Evite alimentos processados e ricos em açúcar."
            ]

            let listTips = ""
            for (let i = 0; i < tips.length; i++) {
                listTips += tips[i] + "\n"
            }

            alert("Dicas de Recuperação:\n" + listTips)
            break

        case '4':
            toContinue = false
            alert("Programa encerrado.")
            break

        default:
            alert("Opção inválida. Tente novamente.")
    }

    if (option === '1') {
        let carbohydratesIntake = prompt("Você gostaria de calcular uma ingestão de carboidratos diferente? (S/N)").toUpperCase()
        if (carbohydratesIntake === 'S') {
            let newValue = parseFloat(prompt("Quantos gramas de carboidratos por kg você deseja usar?"))
            let totalCarbohydratesPersonalized = weight * newValue
            let caloriesPersonalized = totalCarbohydratesPersonalized * 4

            alert(`Você deve ingerir:\n${totalCarbohydratesPersonalized.toFixed(2)} g de carboidratos,\nque equivalem a ${caloriesPersonalized.toFixed(2)} calorias.`)
        } else if (carbohydratesIntake === 'N') {
            alert("Continuando com o cálculo padrão.")
        } else {
            alert("Opção inválida. Retornando ao menu.")
        }
    }

} while (toContinue)
