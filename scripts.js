const convertButton = document.querySelector(".convert-button");

const moeda1 = document.getElementById("moeda-1");
const moeda2 = document.getElementById("moeda-2");

const imgMoeda1 = document.getElementById("img-moeda-1");
const textoMoeda1 = document.getElementById("txt-moeda-1");

const imgMoeda2 = document.getElementById("img-moeda-2");
const textoMoeda2 = document.getElementById("txt-moeda-2");

const moedas = {
    EMPTY: {
        nome: "Selecione",
        imagem: "./empty.png"
    },
    BRL: {
        nome: "Real",
        imagem: "./real.png"
    },
    USD: {
        nome: "Dólar",
        imagem: "./dolar.png"
    },
    EUR: {
        nome: "Euro",
        imagem: "./euro.png"
    },
    BTC: {
        nome: "Bitcoin",
        imagem: "./bitcoin.png"
    },
    JPY: {
        nome: "Iene",
        imagem: "./iene.png"
    }
};

function atualizarOpcoes(selectOrigem, selectDestino) {
    const valorSelecionado = selectOrigem.value;

    for (let option of selectDestino.options) {
        option.disabled = false;
    }

    for (let option of selectDestino.options) {
        if (option.value === valorSelecionado && valorSelecionado !== "") {
            option.disabled = true;
        }
    }

    if (selectDestino.value === valorSelecionado) {
        selectDestino.value = "";
    }
}

function atualizarMoedas() {
    const m1 = moedas[moeda1.value] || moedas.EMPTY;
    const m2 = moedas[moeda2.value] || moedas.EMPTY;

    imgMoeda1.src = m1.imagem;
    textoMoeda1.textContent = m1.nome;

    imgMoeda2.src = m2.imagem;
    textoMoeda2.textContent = m2.nome;
}

function handleChange() {
    atualizarOpcoes(moeda1, moeda2);
    atualizarOpcoes(moeda2, moeda1);
    atualizarMoedas();
}

moeda1.addEventListener("change", handleChange);
moeda2.addEventListener("change", handleChange);

// inicialização
atualizarMoedas();

function convertValues() {
    const inputCurrencyValue = document.querySelector(".currency-value").value
    const brlUsdToday = 4.92
    const brlEurToday = 5.78
    const brlBtcToday = 405521.41
    const brlJpyToday = 0.032
    const usdBrlToday = 0.2022
    const usdEurToday = 1.1754
    const usdBtcToday = 82025.8
    const usdJpyToday = 0.0064
    const eurBrlToday = 0.1724
    const eurUsdToday = 0.85
    const eurBtcToday = 69844.79
    const eurJpyToday = 0.00545
    const btcBrlToday = 0.00000249
    const btcUsdToday = 0.0000125
    const btcEurToday = 0.00001433
    const btcJpyToday = 0.00000008
    const jpyBrlToday = 31.66
    const jpyUsdToday = 156.23
    const jpyEurToday = 164.31
    const jpyBtcToday = 12852097
    const convertedValueBrlUsd = inputCurrencyValue / brlUsdToday
    const convertedValueBrlEur = inputCurrencyValue / brlEurToday
    const convertedValueBrlBtc = inputCurrencyValue / brlBtcToday
    const convertedValueBrlIso = inputCurrencyValue / brlJpyToday
    const convertedValueUsdBrl = inputCurrencyValue / usdBrlToday
    const convertedValueUsdEur = inputCurrencyValue / usdEurToday
    const convertedValueUsdBtc = inputCurrencyValue / usdBtcToday
    const convertedValueUsdJpy = inputCurrencyValue / usdJpyToday
    const convertedValueEurBrl = inputCurrencyValue / eurBrlToday
    const convertedValueEurUsd = inputCurrencyValue / eurUsdToday
    const convertedValueEurBtc = inputCurrencyValue / eurBtcToday
    const convertedValueEurJpy = inputCurrencyValue / eurJpyToday
    const convertedValueBtcBrl = inputCurrencyValue / btcBrlToday
    const convertedValueBtcUsd = inputCurrencyValue / btcUsdToday
    const convertedValueBtcEur = inputCurrencyValue / btcEurToday
    const convertedValueBtcJpy = inputCurrencyValue / btcJpyToday
    const convertedValueJpyBrl = inputCurrencyValue / jpyBrlToday
    const convertedValueJpyUsd = inputCurrencyValue / jpyUsdToday
    const convertedValueJpyEur = inputCurrencyValue / jpyEurToday
    const convertedValueJpyBtc = inputCurrencyValue / jpyBtcToday


    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyResult = document.querySelector(".currency-result")

    if (moeda1.value === "BRL" && moeda2.value === "USD") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValueBrlUsd)
    }
    if (moeda1.value === "BRL" && moeda2.value === "EUR") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValueBrlEur)

    }
    if (moeda1.value === "BRL" && moeda2.value === "BTC") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = "₿ " + convertedValueBrlBtc.toFixed(8)

    }
    if (moeda1.value === "BRL" && moeda2.value === "ISO") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(convertedValueBrlIso)

    }
    if (moeda1.value === "USD" && moeda2.value === "BRL") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValueUsdBrl)

    }
    if (moeda1.value === "USD" && moeda2.value === "EUR") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValueUsdEur)

    }
    if (moeda1.value === "USD" && moeda2.value === "BTC") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValueUsdBtc)

    }
    if (moeda1.value === "USD" && moeda2.value === "JPY") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(convertedValueUsdJpy)

    }
    if (moeda1.value === "EUR" && moeda2.value === "BRL") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValueEurBrl)

    }
    if (moeda1.value === "EUR" && moeda2.value === "USD") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValueEurUsd)

    }
    if (moeda1.value === "EUR" && moeda2.value === "BTC") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValueEurBtc)

    }
    if (moeda1.value === "EUR" && moeda2.value === "JPY") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(convertedValueEurJpy)


    }
    if (moeda1.value === "BTC" && moeda2.value === "BRL") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValueBtcBrl)

    }
    if (moeda1.value === "BTC" && moeda2.value === "USD") {

        ccurrencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValueBtcUsd)

    }
    if (moeda1.value === "BTC" && moeda2.value === "EUR") {

        ccurrencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValueBtcEur)

    }
    if (moeda1.value === "BTC" && moeda2.value === "JPY") {

        ccurrencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(convertedValueBtcJpy)

    }

    if (moeda1.value === "JPY" && moeda2.value === "BRL") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValueJpyBrl)

    }
    if (moeda1.value === "JPY" && moeda2.value === "USD") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValueJpyUsd)

    }
    if (moeda1.value === "JPY" && moeda2.value === "EUR") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValueJpyEur)

    }
    if (moeda1.value === "JPY" && moeda2.value === "BTC") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)

        currencyResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValueJpyBtc)

    }

}

convertButton.addEventListener("click", convertValues)
