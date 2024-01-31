let bag = (15599 -(10/100 * 15599)) - 272;
let jeans = (2499 -(41/100 * 2499)) - 29;

let bag_value = Math.round((jeans + bag + 25 + 20) * 118/100 );

let bag_summary = `Your final price is $${bag_value}`;
console.log(bag_summary);
