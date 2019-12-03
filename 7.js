function urutkanAbjad(str) {
    // you can only write your code here!
    var containerWord = "";
    var arrayFromStr = Array.from(str);
    var index = arrayFromStr.length;
    while(index>0){
        var small = 0;
        for(var j = 0; j<arrayFromStr.length; j++){
            if (arrayFromStr[small] > arrayFromStr[j])
              small = j;
        }
        containerWord+=arrayFromStr[small];
        arrayFromStr.splice(small,1);
        index = arrayFromStr.length;
    }
    return containerWord;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'