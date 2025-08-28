var lines = ["3", "1", 20];
// var lines = ["21", "21", "15", "30"];
// var lines = ['3','1',20]

lines = lines.map((val) => parseInt(val));
let x = lines[0];
let z = 0;

for (let i = 0; ; i++) {
  if (lines[i] > x) {
    z = lines[i];
    break;
  }
}

let ans = 0;
let acc = x;

for (;;) {
  ans += 1;
  let next = x + ans;
  acc += next;

  if (acc > z) {
    // console.log("ans:", ans + 1);
    console.log(ans + 1);
    break;
  }
}
