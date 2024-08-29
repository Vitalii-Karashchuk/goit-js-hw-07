const takeInput = document.querySelector('#name-input');
const outText = document.querySelector('#name-output');
const inputValue = (event) => {
    outText.textContent = event.target.value.trim();
    if(outText.textContent === " "){
        outText.textContent = "Anonymous";
    };
}; 

takeInput.addEventListener("input", inputValue);

