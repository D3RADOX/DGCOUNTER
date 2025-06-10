// script.js

function calculateTotal() {
  // Coin roll values (in cents)
  const COIN_VALUES = {
    pennyRolls: 50 * 0.01,
    nickelRolls: 40 * 0.05,
    dimeRolls: 50 * 0.10,
    quarterRolls: 40 * 0.25
  };

  // Bill values
  const BILL_VALUES = {
    oneBills: 1,
    fiveBills: 5,
    tenBills: 10,
    twentyBills: 20
  };

  let coinTotal = 0;
  let billTotal = 0;
  let summaryHTML = "<h2>Summary</h2>";

  // Compute coin totals
  for (let id in COIN_VALUES) {
    const qty = parseInt(document.getElementById(id).value) || 0;
    const subtotal = qty * COIN_VALUES[id];
    coinTotal += subtotal;
    summaryHTML += `<p>${formatLabel(id)}: ${qty} roll(s) = $${subtotal.toFixed(2)}</p>`;
  }

  // Compute bill totals
  for (let id in BILL_VALUES) {
    const qty = parseInt(document.getElementById(id).value) || 0;
    const subtotal = qty * BILL_VALUES[id];
    billTotal += subtotal;
    summaryHTML += `<p>${formatLabel(id)}: ${qty} bill(s) = $${subtotal.toFixed(2)}</p>`;
  }

  const grandTotal = coinTotal + billTotal;
  summaryHTML += `<hr><p><strong>Coin Total: $${coinTotal.toFixed(2)}</strong></p>`;
  summaryHTML += `<p><strong>Bill Total: $${billTotal.toFixed(2)}</strong></p>`;
  summaryHTML += `<p><strong>Grand Total: $${grandTotal.toFixed(2)}</strong></p>`;

  document.getElementById("summary").innerHTML = summaryHTML;
}

function formatLabel(id) {
  return id
    .replace(/([A-Z])/g, ' $1')         // split camelCase
    .replace("Rolls", " Rolls")         // clarity for coins
    .replace("Bills", " Bills")         // clarity for bills
    .replace(/^./, s => s.toUpperCase()); // capitalize
}
