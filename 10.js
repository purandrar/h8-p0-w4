function changeMe(arr) {
    // you can only write your code here!
    if(arr!=[]){
        for(var i =0; i<arr.length; i++){
          var j = 0;
            while(j<arr[i].length){
                // nama += arr[i][0] + arr[i][1];
                console.log(i+1 +" "+arr[i][0] +" "+ arr[i][1] + ":")
                var nama = {
                    firstName : arr[i][j++],
                    lastName : arr[i][j++],
                    gender : arr[i][j++],
                };
                if(2019 > arr[i][j]){
                    nama.age= 2019-arr[i][j++];
                }
                else{
                    nama.age = "Invalid Birth Year";
                }
                console.log(nama);
            }
        }
    }
    else{
        console.log("");
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""