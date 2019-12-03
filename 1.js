function angkaPrima(angka) {
    // you can only write your code here!
    var checker = false;
    var numberOfDivider = 0;
    var divider = 1;
    if(angka === 1 || angka === 0)
        return checker;
    else{
        while(divider <= angka){
            if(angka%divider===0){
              numberOfDivider++;
            }
            if(numberOfDivider>2)
              return checker;
            divider++;
        }
        if(numberOfDivider === 2)
            checker = true;
    }
    return checker;
}
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(38)); // false