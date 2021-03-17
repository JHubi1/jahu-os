def on_button_pressed_ab():
    global activaded
    if activaded == True:
        activaded = False
        basic.pause(500)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        basic.pause(500)
        basic.show_string("Hallo!")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

activaded = False
activaded = False
basic.show_leds("""
    . # . . .
    # # # # .
    . # . # .
    . # # # .
    . . . . .
    """)
activaded = True

def on_forever():
    pass
basic.forever(on_forever)
