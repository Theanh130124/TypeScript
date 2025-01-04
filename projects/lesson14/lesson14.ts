let sum7 = (x:number,y:number,z=false) => {
    if(z===false)
        return x+y;
    if(z===true){
        return x-y
    }
}
console.log("Day la x - y ",sum7(4,5,true),"Day la x + y ",sum7(5,6,false))