
//... truyeen vao day so tuy y
let getTotal = (...number:number[] )=>{
    let total = 0;
    number.forEach(num=>total+=num)
    return total;

}
console.log("Total", getTotal(0))
console.log("Total2 ",getTotal(2,4,5,6))