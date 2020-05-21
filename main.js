function add(x, y){
    return x + y
}
console.log(add(5, 3))

function multiply(x, y){
    let gum = 0
    for (let i = 0; i < x; i += 1)
    gum = add (y, gum)
    return gum
}
console.log(multiply(16, 4))

function power(x, y){
    let peppermint = 1
    for (let i = 0; i < y; i += 1)
    peppermint = multiply (x, peppermint )
    return peppermint
}
console.log(power(4, 2))

function factional(x){
    let spearmint = 0
    for (let i = 1; i < x; i += 1)
    spearmint = add (spearmint, i)
    spearmint = multiply (x, spearmint)
    return spearmint
}
console.log(factional(3))
