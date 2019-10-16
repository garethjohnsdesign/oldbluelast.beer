// 1. Imports
// ----------

import AgeGate from 'agegate';

let options = {
  form: document.querySelector('form[name=agegate]'),
  countries: true,
  expiry: Infinity,
  data: [

    { code: 'UK', name: 'United Kingdom', age: 18 },
    { code: 'US', name: 'United States of America', age: 21 }
  ]
}

document.addEventListener('DOMContentLoaded', function () {
  window.gate = new AgeGate(options, err => {
    if (err) alert("You Have to Leave")
    else alert("Correct Age");
  })
})
