let a:number = 0;
let b: number = 0;
let o: number = 0;
let op: number = 0;
let toggle:number = 0;
input.onButtonPressed(Button.A,function(){
    if(toggle === 0){
        a++;
        basic.showNumber(a);
    }
    else if(toggle === 1){
        b++;
        basic.showNumber(b);
    }
});//done
input.onButtonPressed(Button.AB,function(){
    op++;
    if(op === 1){
        basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `);
    }
    else if (op === 2) {
        basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `);
    }
    else if (op === 3) {
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `);
    }
    else if (op === 4) {
        basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `);
    }
});//done
input.onButtonPressed(Button.B,function(){
    toggle++;
    if(toggle>=2){
        if(op ===1){
            o=a+b;
            basic.showNumber(o)
        }
        else if (op === 2) {
            o = a - b;
            basic.showNumber(o)
        } else if (op === 3) {
            o = a * b;
            basic.showNumber(o)
        } else if (op === 4) {
            o = a / b;
            basic.showNumber(o)
        }
    }
});