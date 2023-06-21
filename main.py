def on_button_p0():
    if Sugar.angle(AnalogPin.P1) == 9:
        SugarBox.servo2kg(SugarBox.SPort.S1, 90)
Sugar.on_button_event(DigitalPin.P0, on_button_p0)

SugarBox.waitready()

def on_forever():
    if Sugar.button(DigitalPin.P0):
        if Sugar.angle(AnalogPin.P1) == 9:
            SugarBox.servo2kg(SugarBox.SPort.S1, 90)
basic.forever(on_forever)
