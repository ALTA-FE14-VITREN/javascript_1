function ubahHuruf(sentence) {
  const hurufRahasia = "KLMNOPQRSTUVWXYZABCDEFGHIJ";
  let simpanHuruf = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toUpperCase();
    const index = char.charCodeAt(0) - 65;
    if (index >= 0 && index <= 25) {
      simpanHuruf += hurufRahasia.charAt(index);
    } else {
      simpanHuruf += char;
    }
  }

  return simpanHuruf;
}

console.log(ubahHuruf("SEPULSA OKE")); // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA")); // SXNYXOCSK
console.log(ubahHuruf("GOLANG")); // QYVKXQ
console.log(ubahHuruf("PROGRAMMER")); // ZBYQBKWWOB
