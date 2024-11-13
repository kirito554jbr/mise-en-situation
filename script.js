const names = ["aymen","ahmed","wassim","mouad","abir","ismail"];


function checkTheName(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }
  let choose = document.getElementById("demo").innerHTML = checkTheName(names, "ay");
console.log(choose);


