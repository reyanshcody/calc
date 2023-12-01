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
    print("leii")
input.on_button_pressed(Button.AB, on_button_pressed_ab)
