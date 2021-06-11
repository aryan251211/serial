basic.forever(function () {
    for (let index = 0; index <= 1000; index++) {
        serial.writeValue("Current Temperature", input.temperature())
        basic.pause(5000)
    }
})
