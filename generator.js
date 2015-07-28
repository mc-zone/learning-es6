'use strict';
function* gentor(){
    let i = 0;
    while(true){
        try{
            i = (yield ++i)||0;
        }catch(e){console.log(e)}
    }
}

let gen1 = gentor();
console.log(gen1.next());
console.log(gen1.next(5));
console.log(gen1.next());
gen1.throw(new Error());
console.log(gen1.next(3));
