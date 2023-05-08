function playWithAsterik(n) {
  for (let i = 1; i <= n; i++) {
    let spasi = "";
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        spasi += " ";
      } else {
        spasi += "*";
      }
    }
    for (let k = 1; k < i; k++) {
      spasi += "*";
    }
    console.log(spasi);
  }
}
n = 5;
playWithAsterik(n);
