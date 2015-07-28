'use strict';

/*
var p = new Promise(function(res,rej){
    var rnd = ~~(Math.random()*100);
    setTimeout(function(){
        if(rnd%2){
            res(rnd);
        }else{
            rej(rnd);
        }
    },1500);
})

p.then(function(v){
    console.log('even:%d!',v);
},
function(v){
    console.log('odd :%d!',v);
})
*/

//promise连接
/*
var p1 = new Promise(function(res,rej){
    setTimeout(function(){
        res();
    },2000);
});
var p2 = new Promise(function(res){
    res(p1);
});

var t=Date.now();
p2.then(function(){
    console.log(Date.now()-t);
},function(){
    console.log('reject!');
});
*/

//链式
/*
var p3 = new Promise(function(res,rej){
    res(123);
});

p3
.then(function(r){
    setTimeout(()=>{
    console.log('1 %s',r);
    return 111;
    });
})
.then(function(r){
    console.log('2 %s',r);
    return new Promise((res)=>{
        setTimeout(()=>{
            res(222)
        },1500);
    });
})
.then(function(r){
    console.log('3 %s',r);
})
*/

/*
//catch
var p = new Promise(function(res,rej){
    res();
});

p.then((r)=>{
    console.log(y)
}).catch((e)=>{
    console.log(e);
});
*/

/*
//all race
var p1 = new Promise(function(res,rej){
    setTimeout(()=>{
        res('p1');
    },1000);
});
var p2 = new Promise(function(res,rej){
    setTimeout(()=>{
        res('p2');
    },1500);
});
var p3 = new Promise(function(res,rej){
    setTimeout(()=>{
        res('p3');
    },2000);
});

var t = Date.now();
var p = Promise.all([p1,p2,p3]);
p.then((r)=>{
    console.log(r,Date.now()-t)
});

var pr = Promise.race([p1,p2,p3]);
pr.then((r)=>{
    console.log('race %s',r,Date.now()-t)
});
*/

