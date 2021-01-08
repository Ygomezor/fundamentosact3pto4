controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Digita un Número Entero")
    NumeroEntero = game.askForNumber("Digita un Número Entero")
    for (let index = 0; index < 3; index++) {
        Resultado = Resultado + NumeroEntero
    }
    game.splash("Hmm...")
    if (Resultado % 2 == 0) {
        scene.setBackgroundColor(5)
        game.splash("Resultado es Par!")
    } else {
        scene.setBackgroundColor(7)
        game.splash("Resultado es Impar!")
    }
    game.splash("El Número es:", convertToText(NumeroEntero))
    game.splash("El Resultado es:", convertToText(Resultado))
    game.reset()
})
let Resultado = 0
let NumeroEntero = 0
game.splash("")
scene.setBackgroundColor(9)
NumeroEntero = 0
Resultado = 0
game.splash("Identifica si el Resultado", "es Par o Impar")
game.splash("Cuando...")
game.splash("Resultado = Par", "Fondo = Amarillo")
game.splash("Resultado = Impar", "Fondo = Verde")
game.splash("Entonces...")
