export const formatNum = (value) => {
    return Intl.NumberFormat().format(value)
}

export const dollarRate = (value) => {
    const rate = 1000;
    const total = eval(value / rate)
    return total
}