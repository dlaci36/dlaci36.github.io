function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
showSumPrice(price,amountNumber,showAmount)
}

function showSumPrice(x, y,showAmount) {
if (y > 10) {
        alert("Maximum 10 db !!");
    }
    else if (y < 1) {
        alert("Minimum 1 db !!");
    }
    else {
        let amount = x * y;
        showAmount.innerHTML = amount;
    }

}

let helpText = document.createElement("small");
helpText.className="form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket";
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

/* let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.addEventListener("click", function() {
    alert("Hello JS!");
}); */

/* window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
}); */
let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.lenght; i++) {
    values.inputs[i][name] = inputs[i].value;
    }
    console.log( values );
    
});
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventhandlerFunction = function(ev) {
    this.parentElement.style.display="none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventhandlerFunction);
};

let toppings = [
    "Szalonna",
    "Hagyma",
    "Extra Sajt"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
};