let inputs = document.querySelectorAll("#inp");
let sign = document.querySelector("#sign")



sign.onclick = function (event) {
    
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value.length)
        let valid = false;

        if (inputs[i].value != "" && inputs[i].value.length >= 5) {
            valid = true;
            console.log("good submit");
        };


        
        if (valid === false) {
            event.preventDefault();
            console.log("red")
            inputs[i].style.borderBottomColor = "red"
        };
    }
}