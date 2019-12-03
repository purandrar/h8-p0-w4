function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var container = [];
    for(var i = 0; i<arrPenumpang.length; i++){
        var j = 0;
        var temp = new Object();
        temp.penumpang= arrPenumpang[i][j++];
        temp.naikDari = arrPenumpang[i][j++];
        temp.tujuan = arrPenumpang[i][j];
        temp.bayar = Math.abs( (temp.naikDari.charCodeAt(0) - temp.tujuan.charCodeAt(0)))*2000;
        container.push(temp);
    }
    return container;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]