//union ~ join type

//optional params -> truyen vao tham so tuy chon 
//Thi phai truyen them ? va co them if (z)

let sum5 = ( x:number,y:number,z?:number) => {
    if(z){
        return x+y+z
    }
    return x+y
}
console.log(sum5(2,3)) 