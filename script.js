// script.js

function calculateTotal() {
  const coinRolls = {
    pennyRolls: 0.50,
    nickelRolls: 2.00,
    dimeRolls: 5.00,
    quarterRolls: 10.00,
    halfRolls: 10.00,
    dollarCoinRolls: 25.00
  };

  const bills = {
    oneBills: 1,
    twoBills: 2,
    fiveBills: 5,
    tenBills: 10,
    twentyBills: 20,
    fiftyBills: 50,
    hundredBills: 100
  };

  let coinTotal = 0;
  let billTotal = 0;
  let summary = `<h2>🧾 Summary</h2>`;

  // Coin roll subtotal
  for (let id in coinRolls) {
    const qty = parseInt(document.getElementById(id).value) || 0;
    const subtotal = qty * coinRolls[id];
    coinTotal += subtotal;
    summary += `<p>${format(id)}: ${qty} rolls = $${subtotal.toFixed(2)}</p>`;
  }

  // Bill subtotal
  for (let id in bills) {
    const qty = parseInt(document.getElementById(id).value) || 0;
    const subtotal = qty * bills[id];
    billTotal += subtotal;
    summary += `<p>${format(id)}: ${qty} bills = $${subtotal.toFixed(2)}</p>`;
  }

  const total = coinTotal + billTotal;
  summary += `<hr><p><strong>Coin Total: $${coinTotal.toFixed(2)}</strong></p>`;
  summary += `<p><strong>Bill Total: $${billTotal.toFixed(2)}</strong></p>`;
  summary += `<p><strong>Grand Total: $${total.toFixed(2)}</strong></p>`;

  document.getElementById("summary").innerHTML = summary;
}

function format(id) {
  return id.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase());
}
