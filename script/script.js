// 🌟 APP: Tip Calculator

const calculateBill = () => {
  let billInput = Number(document.getElementById('billTotalInput').value);
  let tipInput = Number(document.getElementById('tipInput').value) / 100;
  let numberOfPeople = document.getElementById('numberOfPeople').textContent;
  let perPersonTotal = document.querySelector('#perPersonTotal');

  let totalamount = (((billInput * tipInput) + billInput) / numberOfPeople).toFixed(2);
  perPersonTotal.innerHTML = `<b>₹ ${totalamount}</b>`;
}

const increasePeople = () => {
  let numberOfPeople = document.getElementById('numberOfPeople').textContent;
  numberOfPeople++;
  document.querySelector('#numberOfPeople').textContent = numberOfPeople;
  calculateBill()
}

const decreasePeople = () => {
  let numberOfPeople = document.getElementById('numberOfPeople').textContent;
  if (numberOfPeople > 1) {
    numberOfPeople--;
    document.querySelector('#numberOfPeople').textContent = numberOfPeople;
    calculateBill()
  }
}