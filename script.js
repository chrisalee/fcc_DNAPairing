// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let results = [];
  // let characters = str.split('');

  const search = characters => {
    switch (characters) {
      case "A":
        results.push(["A", "T"]);
        break;
      case "T":
        results.push(["T", "A"]);
        break;
      case "G":
        results.push(["G", "C"]);
        break;
      case "C":
        results.push(["C", "G"]);
        break;
    }
  }

  for(let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  console.log(results);
  return results;
}

pairElement("GCG");

//////////////////////////////////////////////////////////////////////
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}
