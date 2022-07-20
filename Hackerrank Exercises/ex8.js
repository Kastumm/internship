/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const consonants =[];
  
    for (var i = 0; i < s.length; i++) {
    var tryChar = s.charAt(i);
    if (tryChar === "a"||tryChar === "e"||tryChar === "i"||tryChar === "o"||tryChar === "u") {
      console.log(tryChar);
    }else{
        consonants.push(tryChar);
    }};

    consonants.forEach(element => {
        console.log(element)
    });
  }

vowelsAndConsonants("javascriptloops");
