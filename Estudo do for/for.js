const lista = document.querySelector("#lista")
const lista = document.querySelector("#lista")
const botaoImprimir = document.querySelector("#imprimir")

function valor(limite) {
    for (let contador = 0; contador <=limite; contador = contador + 1) {
        if (contador === 4) {
            continue
        }

        //if (contador === 7) {
            //break

        //}

        const novoItem = document.createElement("li")
        novoItem.innerText = contador
        //criar li
        //colocar contador no li
        //colocar li na lista
        //let lista =  document.querySelector("ul")

        if (contador % 2 == 0) {
            novoItem.classList.add("par")

        }
        else {
            novoItem.classList.add("impar")
        }
        lista.appendChild(novoItem)
        //novoItem.classList.add("impar")
    }


}
valor(8)