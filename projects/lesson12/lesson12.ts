enum Confirm_status {
    PENDING , REJECTD , FULFIILED
}

let name2 : any = "Thế anh";

name2 = 25
//-> Có any nó sẽ không check type

//Có thể khai báo type cho method

const sum =(a1:number , a2:number):void => {
    //khỏi ghi void cũng được -> trỏ vào sum để nhìn -> hoặc có thể trả về :number
}

//never -> không trả ra gì cả  dùng cho cảnh báo lỗi -> hoặc vòng lặp 


function handleException(errorMessage:string):never{
    throw Error(errorMessage)
}
//khác với void bình thường có nếu không viết gì sẽ trả ra undifined -> khi gán void cho 1 biến

function test(){

}
let a = test 
console.log(test)