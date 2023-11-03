function encontrarMin(arr){

    let comparar = arr[0]

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < comparar){
            comparar = arr[i]
        }
    }
    
    console.log(comparar)
    return comparar

}

let array = [56, 4, 9, 54, 85, 4, 41, 5, 5, 4, 8];

console.log(encontrarMin(array))