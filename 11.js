function shoppingTime(memberId, money) {
    // you can only write your code here!

    var member=memberId;
    var uang = money;
    if(!memberId){
        return "Mohon maaf, Toko X hanya berlaku untuk member saja";
    }
    else if(money<50000){
        return "Mohon maaf, uang tidak cukup";
    }
    else{
        var container =[];
        var moneyRemaining = money;
        if(moneyRemaining>=1500000){
            moneyRemaining -= 1500000;
            container.push("Sepatu Stacattu");
        }
        if(moneyRemaining >= 500000){
            moneyRemaining -= 500000;
            container.push("Baju Zoro");
        }
        if(moneyRemaining >= 250000){
            moneyRemaining -=250000;
            container.push("Baju H&N")
        }
        if(moneyRemaining>=175000){
            moneyRemaining-=175000;
            container.push("Sweater Uniklooh");
        }
        if(moneyRemaining>=50000){
            moneyRemaining-=50000;
            container.push("Casing Handphone");
        }
        var purchasedID= new Object;
        purchasedID.memberId = memberId;
        purchasedID.money= money;
        purchasedID.listPurchased = container;
        purchasedID.changeMoney = moneyRemaining;
    }
    return purchasedID;
}


  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja