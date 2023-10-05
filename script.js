/* 1 */

const arr = [
  1,
  2,
  "Hello",
  false,
  true,
  null,
  "World",
  "ifelse",
  null,
  undefined,
  "dinia",
  "kaneki",
  97,
  102,
  "JavaScript"
]

/* 2 */
console.log(arr.length);


/* 3 */
arr.push("last");
arr.push("semilast");
arr.push("finallat");
arr.unshift("first")
console.log(arr);



/* 4 */
const  arrstring = arr.map(String);
const arrnumb = arr.map(Number);
console.log(arrstring);
console.log(arrnumb);





/* 5 */
/* ----
 */




/* 6 */
if (arr.length > 5) {
  console.log("Довгий масив");
} else {
  console.log("Короткий масив");
}




/* 7 */
arr.pop()
arr.shift()
console.log(arr);


/* 8 */
console.log(arr.indexOf(20));



/* 9 */
console.log(arr.includes(false));




/* 10 */
arr.push(21)
arr.push("zima");
arr.push("masiv");




/* 13 */
if (arr[2].length > 4) {
  console.log(true);
}else{
  console.log(false);
}





/* 14 */
/* --- */