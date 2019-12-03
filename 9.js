function checkAB(num) {
    // you can only write your code here!
    for(var i = 0; i<num.length; i++){
        if(num[i]==="a" || num[i] ==="b"){
            var counter = 1;
            for(var j = i+1; j<num.length; j++){
                if((num[i]==="a"&& num[j]==="b"&&counter===4)||(num[i]==="b" && num[j] ==="a"&&counter===4)||(num[i]==="a" && num[j] ==="a"&&counter===3)||(num[i]==="b" && num[j] ==="b"&&counter===4)){
                    return true;
                }
                else if((num[j] !== "a" )|| (num[j] !=="b")){
                    counter++;
                    if(counter>4)
                        break;
                }   
            }
        }
    }
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false