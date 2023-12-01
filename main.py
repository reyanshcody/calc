num1: number = 0
num2: number = 0
cmd: str = None
op: number = 0
o: number = 0

def on_button_pressed_a():
    global cmd, num1, num2
    cmd = "A"
    if cmd == 'A':
        num1 += 1
        basic.show_number(num1)
    elif cmd == "A2":
        num2 += 1
        basic.show_number(num2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global cmd, o
    cmd = "AB"
    if cmd == "AB":
        while o < 4:
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
    global cmd
    # pass
    if cmd == "A":
        cmd = "A2"
    elif cmd = "A2":
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)
