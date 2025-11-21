const currencySelect = document.getElementById("currency-select")
const currencyToSelect = document.getElementById("currency-to-select")

function convert() {
    const inputvalue = document.getElementById("input-value").value

    const currencySelect = document.getElementById("currency-select").value
    const currencyToSelect = document.getElementById("currency-to-select").value
    // para Celsius
    const fahrenheit = (inputvalue * 9 / 5) + 32
    const kelvin = Number(inputvalue) + 273.15
    // para Celsius
    // para fahrenheit
    const fahrenheitToCelsius = (inputvalue - 32) * 5 / 9
    const fahrenheitToKelvin = (inputvalue - 32) * 5 / 9 + 273.15
    // para fahrenheit
    // para kelvin
    const kelvinToCelsius = inputvalue - 273.15
    const kelvinToFahrenheit = (inputvalue - 273.15) * 9 / 5 + 32
    // para kelvin
    //valor do input
    const valueCelsius = inputvalue
    const valueFahrenheit = inputvalue
    const valueKelvin = inputvalue
    //valor do input

    if (currencySelect == "celsius" && currencyToSelect == "celsius") {
        document.getElementById("value-to-convert").innerHTML = `${valueCelsius} °C`
        document.getElementById("value").innerHTML = `${valueCelsius} °C`
    }
    else if (currencySelect == "fahrenheit" && currencyToSelect == "fahrenheit") {
        document.getElementById("value-to-convert").innerHTML = `${valueFahrenheit} °F`
        document.getElementById("value").innerHTML = `${valueFahrenheit} °F`
    }
    else if (currencySelect == "kelvin" && currencyToSelect == "kelvin") {
        document.getElementById("value-to-convert").innerHTML = `${valueKelvin} K`
        document.getElementById("value").innerHTML = `${valueKelvin} K`
    }
    else if (currencySelect == "celsius" && currencyToSelect == "fahrenheit") {
        document.getElementById("value-to-convert").innerHTML = `${fahrenheit.toFixed(2)} °F`
        document.getElementById("value").innerHTML = `${valueCelsius} °C`
    }
    else if (currencySelect == "celsius" && currencyToSelect == "kelvin") {
        document.getElementById("value-to-convert").innerHTML = `${kelvin.toFixed(2)} K`
        document.getElementById("value").innerHTML = `${valueCelsius} °C`
    }
    else if (currencySelect == "fahrenheit" && currencyToSelect == "celsius") {
        document.getElementById("value-to-convert").innerHTML = `${fahrenheitToCelsius.toFixed(2)} °C`
        document.getElementById("value").innerHTML = `${valueFahrenheit} °F`
    }
    else if (currencySelect == "fahrenheit" && currencyToSelect == "kelvin") {
        document.getElementById("value-to-convert").innerHTML = `${fahrenheitToKelvin.toFixed(3)} K`
        document.getElementById("value").innerHTML = `${valueFahrenheit} °F`
    }
    else if (currencySelect == "kelvin" && currencyToSelect == "celsius") {
        document.getElementById("value-to-convert").innerHTML = `${kelvinToCelsius.toFixed(2)} °C`
        document.getElementById("value").innerHTML = `${valueKelvin} K`
    }
    else if (currencySelect == "kelvin" && currencyToSelect == "fahrenheit") {
        document.getElementById("value-to-convert").innerHTML = `${kelvinToFahrenheit.toFixed(2)} °F`
        document.getElementById("value").innerHTML = `${valueKelvin} K`
    }
}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyToName = document.getElementById("currency-to-name")

    if (currencyToSelect.value == "celsius") {
        currencyToName.innerHTML = "Celsius"
    }
    if (currencyToSelect.value == "fahrenheit") {
        currencyToName.innerHTML = "Fahrenheit"
    }
    if (currencyToSelect.value == "kelvin") {
        currencyToName.innerHTML = "Kelvin"
    }

    if (currencySelect.value == "celsius") {
        currencyName.innerHTML = "Celsius"
    }
    if (currencySelect.value == "fahrenheit") {
        currencyName.innerHTML = "Fahrenheit"
    }
    if (currencySelect.value == "kelvin") {
        currencyName.innerHTML = "Kelvin"
    }
    convert()
}
document.addEventListener("change", changeCurrency)