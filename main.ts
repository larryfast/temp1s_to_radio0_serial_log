let temperature = 0
radio.setGroup(0)
basic.forever(function () {
    basic.showNumber(0)
    basic.pause(1000)
    temperature = input.temperature()
    radio.sendValue(control.deviceName(), temperature)
    serial.writeValue(control.deviceName(), temperature)
    datalogger.log(datalogger.createCV("t", temperature))
    basic.showString("" + (temperature))
})
