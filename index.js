const lengthEl  = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function(){
        let baseValue = inputEl.value
        lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
        volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} galoons | ${baseValue} galoons = ${(baseValue / literToGallon).toFixed(3)} liters`
        massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`
        console.log(typeof Number(baseValue))
            
        }
    )