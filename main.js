let card = document.querySelector(".card");
let nav1 = document.querySelector(".navX");
let nav2 = document.querySelector(".navO");

// wins:
// 1 2 3, 4 5 6, 7 8 9, 1 4 7, 2 5 8, 3 6 9, 3 5 7, 1 5 9;

let arr = [];
let gal = "x";
let X = `<div class="x">
<div class="f"></div>
<div class="s"></div>
</div>`;
let O = `<div class="o"></div>`;
let tugadi = false



  
function gg(n1, n2, n3) {
  if (arr[n1].trim() === O) {
    alert("O win");
    for(let i = 1; i <= 9; i++){
      let c = document.getElementById(`card${i}`)
      c.innerHTML = ''
    }

    tugadi = true
  } else {
    alert("X win");
    for(let i = 1; i <= 9; i++){
      let c = document.getElementById(`card${i}`)
      c.innerHTML = ''
    }
    nav1.style.display = "block";
    nav2.style.display = "none";
    gal =  'x'
    tugadi = true
  }
  document.querySelector("#card" + n1);
  document.querySelector("#card" + n2);
  document.querySelector("#card" + n3);
}

function end() {
  for (let i = 1; i <= 9; i++) {
    arr[i] = document.querySelector("#card" + i).innerHTML;
  }
  if (arr[1] == arr[2] && arr[2] == arr[3] && arr[1] != "") {
    gg(1, 2, 3);
  } else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[4] != "") {
    gg(4, 5, 6);
  } else if (arr[7] == arr[8] && arr[7] == arr[9] && arr[7] != "") {
    gg(7, 8, 9);
  } else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[1] != "") {
    gg(1, 4, 7);
  } else if (arr[2] == arr[5] && arr[2] == arr[8] && arr[2] != "") {
    gg(2, 5, 8);
  } else if (arr[3] == arr[6] && arr[3] == arr[9] && arr[3] != "") {
    gg(3, 6, 9);
  } else if (arr[3] == arr[5] && arr[3] == arr[7] && arr[3] != "") {
    gg(3, 5, 7);
  } else if (arr[1] == arr[5] && arr[1] == arr[9] && arr[1] != "") {
    gg(1, 5, 9);
  }
}

function jj(id) {
  let element = document.getElementById(id);
  if (gal === "x" && element.innerHTML == "") {
    let t1 = `<div class="x">
        <div class="f"></div>
        <div class="s"></div>
    </div>`;
    element.innerHTML = t1;
    nav1.style.display = "none";
    nav2.style.display = "block";
    gal = "o";
  } else if (gal === "o" && element.innerHTML == "") {
    let template = `
    <div class="o"></div>`;
    element.innerHTML = template;
    nav1.style.display = "block";
    nav2.style.display = "none";
    gal = "x";
  }
  end();
}


