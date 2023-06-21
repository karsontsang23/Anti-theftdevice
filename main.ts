Sugar.onButtonEvent(DigitalPin.P0, function () {
    if (Sugar.Angle(AnalogPin.P1) == 9) {
        SugarBox.servo2kg(SugarBox.SPort.S1, 90)
        Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.On)
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.Off)
    } else {
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
    }
})
Sugar.onButtonEvent(DigitalPin.P2, function () {
    SugarBox.servo2kg(SugarBox.SPort.S1, 180)
    Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
})
SugarBox.waitready()
basic.forever(function () {
    if (Sugar.Button(DigitalPin.P0)) {
        if (Sugar.Angle(AnalogPin.P1) == 9) {
            SugarBox.servo2kg(SugarBox.SPort.S1, 90)
            Sugar.ledOnoff(DigitalPin.P3, Sugar.LEDSta.On)
            Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.Off)
        } else {
            Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
        }
    }
})
basic.forever(function () {
    if (Sugar.Button(DigitalPin.P2)) {
        SugarBox.servo2kg(SugarBox.SPort.S1, 180)
        Sugar.ledOnoff(DigitalPin.P4, Sugar.LEDSta.On)
    }
})
