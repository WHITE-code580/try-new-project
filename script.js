function showResult(event) {
    event.preventDefault();
    let form = event.target;
    let euros = form.numOfEuros.value;
    let dollars = exchangeEurosToDollars(euros);

    let resultElement = document.getElementById("result");
    resultElement.innerText = `
    ${euros} euros = ${dollars} dollars`;

}

function exchangeEurosToDollars(euros) {
    let dollars = euros * 1.16;
    return dollars;
}
