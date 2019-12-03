function highestScore (students) {
    // Code disini
    var container = [];
    for(var i = 0; i< students.length; i++){
        var terbaikDiKelas ={};
        terbaikDiKelas["name"] = students[i]["name"];
        terbaikDiKelas["score"] = students[i]["score"];
        terbaikDiKelas["class"] = students[i]["class"]; 
        for(var j = i+1; j< students.length; j++){
            if(terbaikDiKelas.class === students[j].class){
                if (terbaikDiKelas.score < students[j].score){
                terbaikDiKelas["name"] = students[i]["name"];
                terbaikDiKelas["score"] = students[i]["score"];
                }
            }
        } 
        if(checkKelas(container, terbaikDiKelas["class"])){
            // var x = terbaikDiKelas.class;
            var x = {};
            x.name = terbaikDiKelas.name;
            x.score = terbaikDiKelas.score;
            container.push(x);
        }
    }
    return container;
  }
  function checkKelas(arr,kelas){
      for(var i = 0; i <arr.length; i++){
          if (arr[i].class === kelas){
              return false;
          }
      }
      return true;
  }
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}