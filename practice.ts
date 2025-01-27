
function randomNo(size: number){
    // make an array of "size" random numbers between 0 1
    let array = [];
    for(let i = 0; i < size; i++){
        array.push(Math.random());
    }
    console.log(array);
}
randomNo('hello');