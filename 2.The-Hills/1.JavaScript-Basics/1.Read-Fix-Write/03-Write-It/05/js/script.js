let fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

let extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];

  
//Array.prototype.push.apply(extras, fees);
//console.log(extras);
//doesn't work
//extras = extras.concat(fees);
//console.log(extras);
//doesn't work
//let arr = [...extras.price, ...fees.price];
//console.log(arr);
//doesn't work
/*
for (let i = 0; i < fees.length; i++) {
  let fee = fees[i]['price'];
  console.log(fee);
  for (let j = 0; j < extras.length; j++) {
    let extra = extras[j]['price'];
    fee += extra;
    console.log(fee);
  }
}

for (let i = 0; i < fees.length; i++) {
  let fee = fees[i]['price'];
  console.log(fee);
    let extra = extras['price'];
    fee += extra;
    console.log(fee);
  }
*/


//

// nope can't figure it out, moving on to challenges for now
//trying Kasra's way

let totalPrice = 0;
for (let i = 0; i < extras.length; i++) {
  document.write(`<tr>`);
  document.write(`<th>Supplement: ${extras[i].price}</th>`);
  document.write(`</tr>`);
  for (let j = 0; j < fees.length; j++) {
    document.write(`<tr>`);
    document.write(`<td>Basis tarief: ${fees[j].price}</td>`);
    document.write(`</tr>`);
    totalPrice = extras[i].price + fees[j].price;
    document.write(`<tr>`);
    document.write(`<td>Basis tarief + Supplement = ${totalPrice}</td>`);
    document.write(`</tr>`);
  }
  
}
