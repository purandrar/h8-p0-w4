function ubahHuruf(kata) {
    // you can only write your code here!
    var container = "";
    for(var i = 0; i<kata.length; i++){
        // var dariHuruf = kata.charCodeAt(i);
        // var dariNomer = String.fromCharCode(dariHuruf+1);
        // container +=dariNomer;
        container += String.fromCharCode(kata.charCodeAt(i)+1);
    }
    return container;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu