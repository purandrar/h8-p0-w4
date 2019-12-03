function fpb(angka1, angka2) {
    // you can only write your code here!
  var fpb1=[1, angka1];
  var fpb2=[1, angka2];
  var devider = 2;
  var index = 1;
  while (devider <= angka1){
    if(angka1%devider === 0){
      var container = angka1/devider;
      if(!fpb1.includes(container) && !fpb1.includes(devider)){
        fpb1.splice(index,0,devider,container);
        index++;
        }
      }
        devider++;
  }
  devider = 2;
  index = 1;
  while (devider <= angka2){
    if(angka2%devider === 0){
      var container = angka2/devider;
      if(!fpb2.includes(container) && !fpb2.includes(devider)){
        fpb2.splice(index,0,devider, container);
        index++;
        }
      }
        devider++;
  }
  var fpbMax = 0;
  for(var i = 0; i<fpb1.length; i++){
    for(var j=0; j<fpb2.length; j++){
     if(fpb1[i]===fpb2[j]){
       fpbMax= fpb2[j];
     }
    }
  }
  return fpbMax;
}

  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1