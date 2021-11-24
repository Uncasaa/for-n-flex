const generateArray = function (amount) {
    let returnArray = [];
/*
    let amountConverted = parseInt(amount);
    amount = amountConverted;
*/
    amount = parseInt(amount);
    //console.log(amount);
    //console.log(typeof amount);

    //Number.isNaN(amount) !== true
    if (!Number.isNaN(amount)){
        for (let i = 0; i < amount; i++) {
            

            returnArray.push(`${i}`);
            //onsole.log(returnArray);
        }
    } 
       else {
            returnArray.push("error");        
    }

    
    //console.log(returnArray);
    return returnArray;
}

function loadEvent() {
    console.log("the page has loaded");

    //console.log(generateArray("kiskutya"));
    //console.log(generateArray("1 kiskutya"));
    //console.log(generateArray(100));
    //console.log(generateArray("100"));
    //console.log(generateArray([100]));
// string nem mukodik, ures tombot ad vissza. 

    const root = document.getElementById("root");
    const list = generateArray(60);
    console.log(list);

    if (list[0] !== "error") {
        for (const item of list) {
            root.insertAdjacentHTML("beforeend", `<div class="container">${item}</div>`)
        }
    }

};

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function(){
    console.log("the page loaded")
    Ez is egy valid megoldás. 
    
window.addEventListener("load", () => {
    Arrow function, ez is valid.
    _  Ezt használva nem akarunk a zarojelbe parametert bevinni. 

    });
*/