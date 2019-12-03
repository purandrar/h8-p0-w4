function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],['Baju Zoro', 500000, 2],['Sweater Uniklooh', 175000, 1]];
    if(shoppers.length ===0)
        return[];
    var container = [];
    for( var i =0;i<listBarang.length;i++){
        var nama = new Object();
        nama.product = listBarang[i][0];
        nama.shoppers = [];
        nama.leftOver = listBarang[i][2];
        nama.totalProfit = 0;
        container.push(nama);
    }
    for(var i = 0; i < shoppers.length; i++){
        for(var j = 0; j < container.length; j++){
            if(shoppers[i].product === container[j].product && container[j].leftOver >= shoppers[i].amount ){
                container[j].shoppers.push(shoppers[i].name);
                container[j].leftOver-=shoppers[i].amount;
                container[j].totalProfit+=listBarang[j][1]*shoppers[i].amount;
            }
        }
    }
    // you can only write your code here!
    return container
}

  // TEST CASES
 console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));


console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log(countProfit([])); //[]