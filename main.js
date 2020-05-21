function add(x, y){
    return x + y
}
console.log(add(4, 3))

function multipy(x, y){
    let gum = 0
    for (let i = 0; i < x; i += 1)
    gum = add (y, gum)
    return gum
}
console.log(multipy(7, 9))

function power(x, y){
    let peppermint = 1
    for (let i = 0; i < y; i += 1)
    peppermint = multipy (x, peppermint )
    return peppermint
}
console.log(power(4, 3))

function factional(x, y){
    let spearmint= 1
    for (let i = 0; i < x; i += 1)
    spearmint = multipy (add (x, i), spearmint)
    return spearmint
}
console.log(factional(4))
