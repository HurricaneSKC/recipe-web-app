// add in function for returning recipe quantities
function getQuantity(recipe) {
  var regex = /^(([1-9]+\d*\s)?((\d+)\/(\d+)\s)?).*$/g;
  var results = regex.exec(recipe);
  console.log(results);
  if (results[2] && results[5]) {
    return {
      number: Number(results[2]),
      fraction: Number(results[4]) / Number(results[5])
    };
  }
  if (results[5]) {
    return {
      fraction: Number(results[4]) / Number(results[5])
    };
  } else {
    return {
      number: Number(results[2])
    };
  }
}