// doConversion()


const button=document.getElementById("convertbutton")
button.addEventListener("click", doConversion)
const converter=document.getElementById("convertselect")
converter.addEventListener("change", doConversion)
const textBoxChange=document.getElementById("convertinput")
textBoxChange.addEventListener("keyup",doConversion)

function doConversion() {
  let currency=getCurrency()
  let converted=convert(currency)

  const outputElement=document.getElementById("output")
  console.log(outputElement)
  outputElement.innerText=converted
}

function convert(currency) {
  const amountTextBox=document.getElementById("convertinput")
  const amount=parseFloat(amountTextBox.value) //value inside the text box
  const exchangeRateTHBUSD=32
  const exchangeRateTHBGBP=42
  const exchangeRateTHBEUR=39.9
  let finalAmount = 0

  if(currency=="USD"){
     finalAmount=(amount*exchangeRateTHBUSD)
     console.log(finalAmount)
  }
  if(currency=="GBP"){
     finalAmount=(amount*exchangeRateTHBGBP)
     console.log(finalAmount)
  }
  if(currency=="EUR"){
     finalAmount=(amount*exchangeRateTHBEUR)
     console.log(finalAmount)
  }
  return finalAmount
}

function getCurrency() {
  const converter=document.getElementById("convertselect")
  let currency=converter.value //value inside the text box
  return currency
}
// function getCurrency() {
//   let currencyCodes=["GBP", "USD", "EUR"]
//     let invalid = true
//     let currency = ""
//     while (invalid) {
//         currency=prompt("Do you want GBP or USD or EUR?").toUpperCase()
//         if (currencyCodes.includes(currency)){
//             invalid = false
//         }
//     }
//     return currency
// }
