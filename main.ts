input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    temperature = Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C)
    basic.showString("T:" + convertToText(temperature) + "'C")
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    pressureNow = Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.mBar)
    if (pressureNow < 1013) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("P:" + convertToText(pressureNow) + "mBar")
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showString("P:" + convertToText(pressureNow) + "mBar")
    }
    strip.showColor(neopixel.rgb(0, 0, 0))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    led.stopAnimation()
    humidity = Kitronik_klimate.humidity()
    if (humidity > 60) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("H:" + convertToText(humidity) + "%")
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showString("H:" + convertToText(humidity) + "%")
    }
    strip.showColor(neopixel.rgb(0, 0, 0))
})
let humidity = 0
let pressureNow = 0
let temperature = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip.setBrightness(150)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.forever(function () {
    humidity = Kitronik_klimate.humidity()
    temperature = Kitronik_klimate.temperature(Kitronik_klimate.TemperatureUnitList.C)
    pressureNow = Kitronik_klimate.pressure(Kitronik_klimate.PressureUnitList.mBar)
    basic.showString("H:" + convertToText(humidity) + "%")
    basic.showString("T:" + convertToText(temperature) + "'C")
    basic.showString("P:" + convertToText(pressureNow) + "mBar")
})
