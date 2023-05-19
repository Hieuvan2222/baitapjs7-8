

 var arraySoNguyen= [] ;


function addSN() {
    var inputSN = document.querySelector("#inPutSN").value;

    arraySoNguyen.push(inputSN);
    
    document.querySelector("#txtTS").innerHTML = arraySoNguyen ;
    console.log(arraySoNguyen)
    
}
document.querySelector("#btnTS").onclick = addSN ;


//........................................................

function tongSD() {
    var  sum = 0 ; 
    for (var i = 0; i < arraySoNguyen.length; i++) {
       if (arraySoNguyen[i] > 0 ) {
         sum += Number(arraySoNguyen[i]);
       }
    }
    document.querySelector("#txtTSD").innerHTML = "Tổng " + sum ;
}
document.querySelector("#btnTSD").onclick = tongSD ;
//........................................

function demSoD() {
    var soNguyen = 0 ;
    for (var i = 0; i < arraySoNguyen.length; i++) {
        if( arraySoNguyen[i] > 0) {
            soNguyen++
        }
    }
document.querySelector("#txtDSD").innerHTML = "Có " + soNguyen + " số dương" ;

}
document.getElementById("btnDSD").onclick = demSoD ;

//..........................................
function SoNhoNhat() {
    var min = arraySoNguyen[0];
    for (var i = 1; i < arraySoNguyen.length; i++) {
        if(min > arraySoNguyen[i]){
            min = arraySoNguyen[i];
        }
    }
    document.querySelector("#txtSNN").innerHTML = "số Nhỏ Nhất " +  min  ;
}
document.getElementById("btnSNN").onclick = SoNhoNhat ;

//.........................................
var arraySD= [] 

 function soDuongNN() { 
    for (var i = 0; i < arraySoNguyen.length; i++) {
        if (arraySoNguyen[i] > 0) {
            arraySD.push(arraySoNguyen)
        }  
    }
   
    console.log(arraySD) ;
    console.log("click")

    if(arraySD.length == 0){
        alert (" Không có số dương trong mảng")
    }else {
        var minDuong = arraySD[0]
        for (var i = 1; i < arraySD.length; i++) {
           if (minDuong > arraySD[i]) {
            
            minDuong = arraySD[i]

           }
        }
    }
       
    document.querySelector("#txtSDNN").innerHTML = "Số dương nhỏ nhất: " + minDuong ;
    }
 document.querySelector("#btnSDNN").onclick = soDuongNN ;


//..........................................

// var soChan = "" ;
// function SoChanCC() {
//     for (var i = 0; i < arraySoNguyen.length; i++) {
//          if () {
            
//          } else {
            
//          }
        
//     }
    
// }






