def on_button_p0():
    if AaBb == Password:
        SugarBox.servo2kg(SugarBox.SPort.S1, 90)
        Sugar.led_onoff(DigitalPin.P3, Sugar.LEDSta.ON)
        Sugar.led_onoff(DigitalPin.P4, Sugar.LEDSta.OFF)
        music.play(music.string_playable("A B C5 B A B C5 B ", 200),
            music.PlaybackMode.IN_BACKGROUND)
        basic.pause(20000)
        SugarBox.servo2kg(SugarBox.SPort.S1, 180)
        Sugar.led_onoff(DigitalPin.P3, Sugar.LEDSta.OFF)
        Sugar.led_onoff(DigitalPin.P4, Sugar.LEDSta.ON)
    else:
        Sugar.led_onoff(DigitalPin.P4, Sugar.LEDSta.ON)
Sugar.on_button_event(DigitalPin.P0, on_button_p0)

def on_button_p2():
    global AaBb
    AaBb += 1
Sugar.on_button_event(DigitalPin.P2, on_button_p2)

AaBb = 0
Password = 0
Password = 9

def on_forever():
    global AaBb
    if Sugar.button(DigitalPin.P2):
        AaBb += 1
basic.forever(on_forever)

def on_forever2():
    if Sugar.button(DigitalPin.P0):
        if AaBb == Password:
            SugarBox.servo2kg(SugarBox.SPort.S1, 90)
            Sugar.led_onoff(DigitalPin.P3, Sugar.LEDSta.ON)
            Sugar.led_onoff(DigitalPin.P4, Sugar.LEDSta.OFF)
            basic.pause(20000)
            SugarBox.servo2kg(SugarBox.SPort.S1, 180)
            Sugar.led_onoff(DigitalPin.P3, Sugar.LEDSta.OFF)
            Sugar.led_onoff(DigitalPin.P4, Sugar.LEDSta.ON)
            music.play(music.string_playable("A B C5 B A B C5 B ", 200),
                music.PlaybackMode.IN_BACKGROUND)
        else:
            Sugar.led_onoff(DigitalPin.P4, Sugar.LEDSta.ON)
basic.forever(on_forever2)

def on_forever3():
    basic.show_number(AaBb)
basic.forever(on_forever3)
