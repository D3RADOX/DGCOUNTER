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
  let summary = `<h2>Summary</h2><div class='receipt'>`;

  // Coin roll subtotal
  for (let id in coinRolls) {
    const qty = parseInt(document.getElementById(id).value) || 0;
    const subtotal = qty * coinRolls[id];
    coinTotal += subtotal;
    if (qty > 0) {
      summary += `<p>${idLabel(id)} x ${qty} = $${subtotal.toFixed(2)}</p>`;
    }
  }

  // Bill subtotal
  for (let id in bills) {
    const qty = parseInt(document.getElementById(id).value) || 0;
    const subtotal = qty * bills[id];
    billTotal += subtotal;
    if (qty > 0) {
      summary += `<p>${idLabel(id)} x ${qty} = $${subtotal.toFixed(2)}</p>`;
    }
  }

  const total = coinTotal + billTotal;
  summary += `<hr><p><strong>Total: $${total.toFixed(2)}</strong></p></div>`;

  document.getElementById("summary").innerHTML = summary;
}

function idLabel(id) {
  const map = {
    pennyRolls: "1¢",
    nickelRolls: "5¢",
    dimeRolls: "10¢",
    quarterRolls: "25¢",
    halfRolls: "50¢",
    dollarCoinRolls: "$1",
    oneBills: "$1",
    twoBills: "$2",
    fiveBills: "$5",
    tenBills: "$10",
    twentyBills: "$20",
    fiftyBills: "$50",
    hundredBills: "$100"
  };
  return map[id] || id;
}
