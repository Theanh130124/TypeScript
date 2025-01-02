const fullname:String = "Thế Anh"
//const cũng chỉ tồn tại trong khối , nếu có ường minh String cũng được


//Có gợi ý
console.log("Length Full name tsc" , fullname.length)

console.log("ToUpperCase tsc" , fullname.toUpperCase)

//Phân biệt var let và const

function testLet() {
    if (true) {
        let y = 20; // Phạm vi thuộc khối if
        console.log(y); // 20
    }
    // console.log(y); // Lỗi: `y` không tồn tại ngoài khối if
}

testLet();


function testVar() {
    if (true) {
        var x = 10; // Phạm vi thuộc hàm testVar
    }
    console.log(x); // 10 (vì `var` không bị giới hạn bởi khối {})
}

testVar();
