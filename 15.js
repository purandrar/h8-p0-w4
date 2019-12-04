function highestScore (students) {
    // Code disini
    var container = {};
    for(var i = 0; i< students.length; i++){
        if(container[students[i].class] === undefined){
          //container[students[i].class] = {};
          container[students[i].class] = {
            name : students[i].name,
            score : students[i].score
          };
        }
        else if(container[students[i].class] < students[i].score){
          name : students[i]["name"];
          score : students[i].score;
        }
        // terbaikDiKelas["name"] = students[i]["name"];
        // terbaikDiKelas["score"] = students[i]["score"];
        // terbaikDiKelas["class"] = students[i]["class"]; 
        // for(var j = i+1; j< students.length; j++){
        //     if(terbaikDiKelas.class === students[j].class){
        //         if (terbaikDiKelas.score < students[j].score){
        //         terbaikDiKelas["name"] = students[i]["name"];
        //         terbaikDiKelas["score"] = students[i]["score"];
        //         terbaikDiKelas["class"] = students[i]["class"]; 
        //         }
        //     }
        // } 
        // // // console.log(terbaikDiKelas);
        // // if(checkKelas(container, terbaikDiKelas.class)){
        // //     // var x = terbaikDiKelas.class;
        // //     var x = {};
        // //     x.terbaikDiKelas.class = {
        // //     name = terbaikDiKelas.name,
        // //     score = terbaikDiKelas.score,
        // //     };
        // //     container.push(terbaikDiKelas);
        // // }
        
    }
    
    return container;
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
  
  
  // console.log(highestScore([
  //   {
  //     name: 'Alexander',
  //     score: 100,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Alisa',
  //     score: 76,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Vladimir',
  //     score: 92,
  //     class: 'foxes'
  //   },
  //   {
  //     name: 'Albert',
  //     score: 71,
  //     class: 'wolves'
  //   },
  //   {
  //     name: 'Viktor',
  //     score: 80,
  //     class: 'tigers'
  //   }
  // ]));
  
  // // {
  // //   foxes: { name: 'Alexander', score: 100 },
  // //   wolves: { name: 'Alisa', score: 76 },
  // //   tigers: { name: 'Viktor', score: 80 }
  // // }
  
  
  // console.log(highestScore([])); //{}