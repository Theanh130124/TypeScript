//optional params -> truyen vao tham so tuy chon 

let sum4 = ( x,y,z) => {
    if(z){
        return x+y+z
    }
    if(y){
        return x+y
    }
    return x 
}
console.log(sum4()) //NaN not a number
console.log(sum4(2))// chi co x