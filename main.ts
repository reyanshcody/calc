let num1:number = 0;
let num2: number = 0;
let cmd:string = null;
let op:number = 0;
let o:number = 0;
input.onButtonPressed(Button.A, function() {
    cmd="A";
    if(cmd=='A'){
        num1++;
        basic.showNumber(num1);
    }
    else if(cmd=="A2"){
        num2++;
        basic.showNumber(num2);
    }
})
input.onButtonPressed(Button.AB,function(){
    cmd ="AB";
    if(cmd=="AB"){
        while(o<4){
            op++;
            if(op==1){
                
                basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `);
            }
            if (op == 2) {

                basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            }
            if (op == 3) {

                basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            }
            if (op == 4) {

                basic.showLeds(`
                . . # . .
                . . . . .
                # # # # #
                . . . . .
                . . # . .
                `)
            }
        }
    }
});
input.onButtonPressed(Button.B,function(){
    if(cmd=="A"){
        cmd="A2";
    }
    else if(cmd="A2"){
        cmd="B";
    }
    
    basic.showString(cmd);
    if(cmd=="B"){
        if(op==1){
            o=num1+num2;
        }
        if (op == 2) {
            o = num1 - num2;
        }
        if (op == 3) {
            o = num1 * num2;
        }
        if (op == 4) {
            o = num1 / num2;
        }
        basic.showNumber(o);
    }
    
})