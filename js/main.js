

 var arraySoNguyen= [] ;


function addSN() {
    var inputSN = document.querySelector("#inPutSN").value;

    arraySoNguyen.push(inputSN);
    
    document.querySelector("#txtTS").innerHTML = arraySoNguyen ;
    
}
document.querySelector("#btnTS").onclick = addSN ;


//.............TỔNG SỐ DƯƠNG................

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
//............ĐẾM SỐ DƯƠNG.............

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

//...............SỐ NHỎ NHẤT.................


function SoNhoNhat() {
    var min = arraySoNguyen[0];
    for (var i = 1; i < arraySoNguyen.length; i++) {
        if(min > Number(arraySoNguyen[i])){
            min = arraySoNguyen[i];

        }
    }
    document.querySelector("#txtSNN").innerHTML = "số Nhỏ Nhất " +  min  ;
}
document.getElementById("btnSNN").onclick = SoNhoNhat ;




//.........SỐ DƯƠNG NHỎ NHẤT..........
var arraySD= [];

 function soDuongNN() { 
    for (var i = 0; i < arraySoNguyen.length; i++) {
        if (arraySoNguyen[i] > 0) {
            arraySD.push(arraySoNguyen[i]) ;
        }  
    }
    if(arraySD.length == 0){
        alert (" Không có số dương trong mảng")
    }else {
        var minDuong = arraySD[0]
        for (var i = 1; i < arraySD.length; i++) {
           if (minDuong > arraySD[i]) {
            
            minDuong = arraySD[i]
            return minDuong

           }
        }
    }
       
    document.querySelector("#txtSDNN").innerHTML = "Số dương nhỏ nhất: " + minDuong ;
    }
 document.querySelector("#btnSDNN").onclick = soDuongNN ;


//........SỐ CHẴN CUỐI CÙNG.........
var soChan = [] ;
var soChanCC = "" ;
function soChanCu() {
    for (var i = 0; i < arraySoNguyen.length; i++) {
        if (arraySoNguyen[i] % 2 == 0) {
           soChan.push(arraySoNguyen[i]) ;
    }
    
    if(soChan.length > 0) {
        soChanCC = soChan[soChan.length-1]
      }
      else {
        soChanCC = -1
      }
    console.log(soChanCC)
    document.getElementById("txtSCCC").innerHTML = "Số chẵn cuối cùng: " +  soChanCC ;
}}

document.getElementById("btnSCCC").onclick = soChanCu ;

// ...........HOÁN ĐỔI ..........
  
var giaTri1 ="" ;
var giaTri2 =" ";
var temp = "" ;
function hoanDoi() {
    var giaTri1 = document.getElementById("inPut1").value ;
    var giaTri2 = document.getElementById("inPut2").value ;
       
        temp = arraySoNguyen[giaTri2]
        
        arraySoNguyen[giaTri2] =  arraySoNguyen[giaTri1]
       
        arraySoNguyen[giaTri1] = temp

        document.getElementById("txtHD").innerHTML = arraySoNguyen ;
}
document.getElementById("btnHD").onclick = hoanDoi ;



//..........SẮP XẾP..........


function sapXep() {
    var arraySoNguyenCopy = [] ;
    for (var i = 0; i < arraySoNguyen.length; i++) {
        arraySoNguyenCopy.push(arraySoNguyen[i])
    }
    var result = arraySoNguyenCopy.sort(function(a,b){
        return a - b
    })
    document.getElementById("txtSX").innerHTML = result ;
}
document.getElementById("btnSX").onclick = sapXep ;



//..........SỐ NGUYÊN TỐ.......


var num ="";

    let arraySoNguyenTo = [];
    function soNguyenTo() {
      for (i = 1; i <= arraySoNguyen.length - 1; i++) {
        let count = 0;
        for (j = 1; j <= arraySoNguyen[i]; j++) {
          if (arraySoNguyen[i] % j === 0) {
            count = count + 1 ;
          }
        }
        if ((count === 2)) {
          arraySoNguyenTo.push(arraySoNguyen[i]);
        }
      }
      num = arraySoNguyenTo[0]
     
      document.getElementById("txtSN").innerHTML = " số nguyên tố đầu tiên: "  + num;
    }

document.getElementById("btnSN").onclick = soNguyenTo ;


//.........ĐẾM SỐ NGUYÊN........
var arraySoThuc= [] ;


function addST(){
    var inPutST = document.getElementById("inPutDSN").value;
    
    arraySoThuc.push(inPutST)

    document.getElementById("txtDST").innerHTML = arraySoThuc ;
}

function inteNum(){
    let tongSoNguyen  = 0;
    console.log(arraySoThuc)
    for (i = 0; i <= arraySoThuc.length - 1; i++) {
        console.log(arraySoThuc[i])
      if(Number.isInteger(Number(arraySoThuc[i]))){
        tongSoNguyen = tongSoNguyen + 1;
      }
    }
    console.log('tổng số nguyên', tongSoNguyen);
  
  

   document.getElementById("txtDSN").innerHTML = "Có "+ tongSoNguyen +" số nguyên "
}
document.getElementById("btnDSN").onclick = inteNum;   



//..................SO SÁNH ÂM DƯƠNG..............
function amDuong() {
    let tongSoDuong = 0;
    let tongSoAm = 0;
    for (i = 0; i <= arraySoNguyen.length - 1; i++) {
      console.log(arraySoNguyen[i]);
      if (arraySoNguyen[i] > 0) {
        console.log("dương");
        tongSoDuong = tongSoDuong + 1;
      } else if (arraySoNguyen[i] < 0) {
        console.log("âm");
        tongSoAm = tongSoAm + 1;
      }
    }
    console.log("ton", tongSoDuong);
    if (tongSoDuong > tongSoAm) {
      var result = "số dương > số âm";
    } else if (tongSoDuong < tongSoAm) {
        var result = "số dương < số âm";
    } else {
        var result = "số dương = số âm";
    }
   document.getElementById("txtSS").innerHTML = result ;
  }
  document.getElementById("btnSS").onclick = amDuong 
  



