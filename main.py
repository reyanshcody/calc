num1: number = 0
num2: number = 0
cmd: str = None
op: number = 0
o: number = 0

def on_button_pressed_a():
    global cmd, num1
    cmd = "A"
    if cmd == 'A':
        num1 += 1
    elif cmd == "A2":
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global cmd
    cmd = "AB"
    if cmd == "AB":
        pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)
