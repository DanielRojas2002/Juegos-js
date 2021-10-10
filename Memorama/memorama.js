 


let iconos = []
let selecciones = []

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="./Memorama/recursos/1.png">',
        '<img src="./Memorama/recursos/2.png">',
        '<img src="./Memorama/recursos/3.png">',
        '<img src="./Memorama/recursos/4.png">',
        '<img src="./Memorama/recursos/5.png">',
        '<img src="./Memorama/recursos/6.png">',
        '<img src="./Memorama/recursos/7.png">',
        '<img src="./Memorama/recursos/8.png">',
        '<img src="./Memorama/recursos/9.png">',
        '<img src="./Memorama/recursos/10.png">',
        '<img src="./Memorama/recursos/12.png">',
        '<img src="./Memorama/recursos/13.png">',
        '<img src="./Memorama/recursos/14.png">',
        '<img src="./Memorama/recursos/15.png">',
        '<img src="./Memorama/recursos/16.png">',
        '<img src="./Memorama/recursos/18.png">',
        '<img src="./Memorama/recursos/19.png">',
        '<img src="./Memorama/recursos/20.png">',
        '<img src="./Memorama/recursos/21.png">',
        '<img src="./Memorama/recursos/22.png">',
        '<img src="./Memorama/recursos/23.png">',
        '<img src="./Memorama/recursos/24.png">',
        '<img src="./Memorama/recursos/25.png">',
        '<img src="./Memorama/recursos/26.png">',
        '<img src="./Memorama/recursos/27.png">',
        '<img src="./Memorama/recursos/28.png">',
        '<img src="./Memorama/recursos/29.png">',
        '<img src="./Memorama/recursos/30.png">',
        '<img src="./Memorama/recursos/31.png">',
        '<img src="./Memorama/recursos/32.png">',
        '<img src="./Memorama/recursos/33.png">',
        '<img src="./Memorama/recursos/34.png">',
        '<img src="./Memorama/recursos/35.png">',
        
    ]
}

function generarTablero() {
    cargarIconos()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    let x="hola adad ad ada"
    for (let i = 0; i < 66; i++) {
        tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${iconos[0]}
                   
                </div>
                <div class="cara superior">
                    <i class="far fa-question-circle"></i>
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "./Memorama/rotateY(180deg)") {
        tarjeta.style.transform = "./Memorama/rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "./Memorama/rotateY(0deg)"
            tarjeta2.style.transform = "./Memorama/rotateY(0deg)"
        }else{
            trasera1.style.background = "plum"
            trasera2.style.background = "plum"
        }
    }, 1000);
}
