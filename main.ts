// Envio manual de datos por si acaso
input.onButtonPressed(Button.A, function () {
    radio.sendValue("temp", pins.analogReadPin(AnalogPin.P0) * 330 / 1023)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    radio.sendValue("temp2", input.temperature())
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if ("quiero" == receivedString) {
        radio.sendValue("temp", pins.analogReadPin(AnalogPin.P0) * 330 / 1023)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        radio.sendValue("temp2", input.temperature())
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    }
})
// **Opcional**
// Envio de información/emegencia para la otra micro:bit
input.onButtonPressed(Button.B, function () {
    radio.sendValue("pickup", 1)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
// Establece el mismo grupo en las dos micro:bit
radio.setGroup(67)
// Emite las temperaturas cada 10 segundos
loops.everyInterval(10000, function () {
    radio.sendValue("temp", pins.analogReadPin(AnalogPin.P0) * 330 / 1023)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    radio.sendValue("temp2", input.temperature())
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
