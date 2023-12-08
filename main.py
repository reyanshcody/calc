"""

1st number = 0;
2nd number = 0;
operator = 0;
function

"""
a = 0
b = 0
o = 0
op = 0
t = 0

def on_button_pressed_a():
    global a, b
    if t == 0:
        a += 1
        basic.show_number(a)
    elif t == 1:
        b += 1
        basic.show_number(b)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global o
    o += 1
    if o == 1:
        basic.show_leds("""
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            """)
    if o == 2:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
    if o == 3:
        basic.show_leds("""
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            """)
    if o == 4:
        basic.show_leds("""
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global t, o
    t += 1
    if t == 2:
        if o == 1:
            o = a + b
        if o == 2:
            o = a - b
        if o == 1:
            o = a * b
        if o == 1:
            o = a / b
        basic.show_number(o)
input.on_button_pressed(Button.B, on_button_pressed_b)
