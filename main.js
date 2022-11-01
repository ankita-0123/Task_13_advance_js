setTimeout(() => console.log('timer expired'), 1000)



function x(y) {

console.log('inside x');

y();

}



x(function y(){

console.log('inside y')

})
//2//
setTimeout(() => console.log('timer1 expired'), 1000)



setTimeout(() => console.log('timer2 expired'), 0)



function x(y) {

console.log('inside x');

y();

}



x(function y(){

console.log('inside y')

})


//3//
setTimeout(() => console.log('timer1 expired'), 1000)



setTimeout(() => console.log('timer2 expired'), 0)



function x(y) {

console.log('inside x');

y();

}



x(function y(){

setTimeout(() => console.log('inside y'), 0)

})


////-----------------------------------------------------
function attachEventListeners(){
    let count = 0;
    document.getElementById('click').addEventListener('click' , function xyz(){
        console.log('button clicked', ++count);
    });
    
}
attachEventListeners();

