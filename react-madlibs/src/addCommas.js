function addCommas(num) {
    const [intPart, decimalPart] = Math.abs(num).toString().split(".");
    const intWithCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (num < 0 ? "-" : "") + intWithCommas + (decimalPart ? "." + decimalPart : "");
}

module.exports = addCommas;

