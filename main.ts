Sugar.onButtonEvent(DigitalPin.P0, function () {
    if (AaBb == Password) {
        SugarBox.servo2kg(SugarBox.SPort.S1, 90)
        Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.On)
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.Off)
        music.play(music.stringPlayable("A B C5 B A B C5 B ", 200), music.PlaybackMode.InBackground)
        basic.pause(20000)
        SugarBox.servo2kg(SugarBox.SPort.S1, 180)
        Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.Off)
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
    } else {
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
    }
})
Sugar.onButtonEvent(DigitalPin.P2, function () {
    AaBb += 1
})
let AaBb = 0
let Password = 0
Password = 9
basic.forever(function () {
    basic.showNumber(AaBb)
})
basic.forever(function () {
    if (Sugar.Button(DigitalPin.P2)) {
        AaBb += 1
    }
})
basic.forever(function () {
    if (Sugar.Button(DigitalPin.P0)) {
        if (AaBb == Password) {
            SugarBox.servo2kg(SugarBox.SPort.S1, 90)
            Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.On)
            Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.Off)
            basic.pause(20000)
            SugarBox.servo2kg(SugarBox.SPort.S1, 180)
            Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.Off)
            Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
            music.play(music.stringPlayable("A B C5 B A B C5 B ", 200), music.PlaybackMode.InBackground)
        } else {
            Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
        }
    }
})
