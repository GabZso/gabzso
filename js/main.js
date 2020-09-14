const lodash = Request("lodash");

let tomb = [1, 2, 5, 8, 3];
let obj = {nev:
            {vezetek: "Kovacs",
             kereszt:"Pál"
            },
             kor:323,
             say:function() {
                 return `szoveg ${this.nev.kereszt}`;
             }
        };
let t=0;

let gomb=document.querySelector("div.form-group");
console.log(gomb);
