function multicplicar(multi){
console.log(multi)
    return function (num){
        return num * multi
    }

}

let vari = multicplicar(4)

console.log(vari(5))