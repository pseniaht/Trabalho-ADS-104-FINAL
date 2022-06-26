function direita(id) {
    var peganomeimg = ""
    var novoid = ""
    var outroid = ""
    var a = `${id}`
    var array = a.split('')
    var numero = array[4]
    numero = Number(numero)
    var outroidarrumado = "" 

    if (numero >= 1 && numero <= 3) {
        // arruma o outro id
        for (var i = 0; i <= 4; i++) {
            outroid += array[i]
        }
        outroid += 'a'
        numero++

        arrayarrumado = outroid.split('')
        arrayarrumado[4] = numero
        for (i in arrayarrumado) {
            outroidarrumado += arrayarrumado[i]
        }

        document.getElementById(outroid).setAttribute('id', `${outroidarrumado}`);
        // fim arruma o outro id

        for (var i = 0; i <= 3; i++) {
            outroid += array[i]
        }
        outroid += numero
        arraynovoid = array
        arraynovoid[4] = numero
        for (i in arraynovoid) {
            novoid += array[i]
        }

        document.getElementById(id).setAttribute('id', `${novoid}`);

        //pega o nome da img
        for (var i = 0; i <= 3; i++) {
            peganomeimg += array[i]
        }

        numero = array[4]
        numero--
        //fim pega o nome da img
        var image = document.getElementById(`${peganomeimg}${numero}`)

        var veri = (image.classList.contains('volta'))
        if (veri == true) {
            image.classList.remove("volta")
        }
        image.classList.add("retira")

    } else {
        return
    }

}

function esquerda(id) {
    arraynovoid = []
    var peganomeimg = ""
    var novoid = ""
    var outroid = ""
    var a = `${id}`
    var array = a.split('')
    var numero = array[4]
    numero = Number(numero)
    var outroidarrumado = ""

    if (numero >= 2 && numero <= 4) {
        // arruma o outro id
        for (var i = 0; i <= 4; i++) {
            outroid += array[i]
        }
        outroid += 'd'
        numero--

        arrayarrumado = outroid.split('')
        arrayarrumado[4] = numero
        for (i in arrayarrumado) {
            outroidarrumado += arrayarrumado[i]
        }

        document.getElementById(outroid).setAttribute('id', `${outroidarrumado}`);
        // fim arruma o outro id
        // arruma o novo id
        arraynovoid = array
        arraynovoid[4] = numero
        for (i in arraynovoid) {
            novoid += array[i]
        }

        document.getElementById(id).setAttribute('id', `${novoid}`);
        //fim arruma o novo id
        //pega o nome da img
        for (var i = 0; i <= 3; i++) {
            peganomeimg += array[i]
        }


        //fim pega o nome da img

        var image = document.getElementById(`${peganomeimg}${numero}`)
        var veri = (image.classList.contains('retira'))
        if (veri == true) {
            image.classList.remove("retira")
        }

        image.classList.add("volta")

    } else {
        return
    }
}

var posicao = 1
function direitaprod() {
    if (posicao >= 1 && posicao <= 6) {
        var image = document.getElementById(`prod${posicao}`)
        var veri = (image.classList.contains('volta'))
        if (veri == true) {
            image.classList.remove("volta")
        }
        image.classList.add("retira")
        posicao += 1
    }

}
function esquerdaprod() {
    if(posicao >= 2 && posicao <= 7){
        posicao +=-1
        var image = document.getElementById(`prod${posicao}`)
        
    var veri = (image.classList.contains('retira'))
    if (veri == true) {
        image.classList.remove("retira")
    }
    image.classList.add("volta")
    
    }
    
}
