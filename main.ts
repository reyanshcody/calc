let a=0;
let b=0;
let o=0;
let op=0;
let t=0;
input.onButtonPressed(Button.A, function() {
    if(t==0){
        a++;
        basic.showNumber(a);
    }
    else if(t==1){
        b++;
        basic.showNumber(b);
    }
})
input.onButtonPressed(Button.AB,function(){
    o++;
    if(o==1){

        basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `);
    }
    if (o == 2) {

        basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `);
    } if (o == 3) {

        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `);
    } if (o == 4) {

        basic.showLeds(`
        . . # . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `);
    }
})
input.onButtonPressed(Button.B,function(){
    t++;
    if(t==2){
        if (o == 1) {
            o=a+b;
        }
        if (o == 2) {
            o=a-b;
        } if (o == 1) {
            o=a*b;
        } if (o == 1) {
            o=a/b;
        }
        basic.showNumber(o);
    }
})