function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var i = 1;
    var devider = angka/i;
    var num = devider.toString().length + i.toString().length;
    while(++i< angka){
      if(angka%i === 0){
        var devider = angka/i;
        var numTemp = devider.toString().length + i.toString().length;
        if(num > numTemp)
          num = numTemp
      }
    }
    return num;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2