// 🌟 APP: Tip Calculator

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billInput = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tip_input');
let numberOfPeople = document.getElementById('numberOfPeople');
let perPersonTotal = document.getElementById('perPersonTotal');


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let input = Number(document.getElementById('billTotalInput').value);
  
    // get the tip from user & convert it into a percentage (divide by 100)
    let tip = Number(document.getElementById('tip_input').value);
    console.log(tip);
    // get the total tip amount
    
  
    // calculate the total (tip amount + bill)
    
  
    // calculate the per person total (total divided by number of people)
  
  
    // update the perPersonTotal on DOM & show it to user
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }