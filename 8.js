function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var container ="";
    for(var i=0; i<kalimat.length; i++){
        var dariChar = kalimat.charCodeAt(i);
        if(dariChar>=65 && dariChar<=90){
            // var temp = String.fromCharCode();
            container+=String.fromCharCode(dariChar+32);
        }
        else if(dariChar>=97 && dariChar<=122){ 
            container+=String.fromCharCode(dariChar-32);;
        }
        else{
            container+=String.fromCharCode(dariChar);
        }
    }
    return container;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"