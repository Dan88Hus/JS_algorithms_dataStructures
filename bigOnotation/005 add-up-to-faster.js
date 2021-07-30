// not loop
//O(1) BECAUSE ITS LIKE O(500)
// O(1) IS FASTER THAN O(n)

function addUpTo(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`) // 6.8888 miliseconds like 0.68 secon something like that 