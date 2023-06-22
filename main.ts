let _ = 0
Sugar.onButtonEvent(DigitalPin.P0, function () {
    if (_ == 9) {
        SugarBox.servo2kg(SugarBox.SPort.S1, 90)
        Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.On)
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.Off)
        music.play(music.stringPlayable("A B C5 B A B C5 B ", 200), music.PlaybackMode.InBackground)
    } else {
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
    }
})
Sugar.onButtonEvent(DigitalPin.P2, function () {
    SugarBox.servo2kg(SugarBox.SPort.S1, 180)
    Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
})
basic.forever(function () {
    if (Sugar.Button(DigitalPin.P0)) {
        if (_ == 9) {
            SugarBox.servo2kg(SugarBox.SPort.S1, 90)
            Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.On)
            Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.Off)
            music.play(music.stringPlayable("A B C5 B A B C5 B ", 200), music.PlaybackMode.InBackground)
        } else {
            Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
            music.play(music.stringPlayable("F F F F F F F F ", 500), music.PlaybackMode.InBackground)
        }
    }
})
basic.forever(function () {
    if (Sugar.Button(DigitalPin.P2)) {
        SugarBox.servo2kg(SugarBox.SPort.S1, 180)
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
    }
})
