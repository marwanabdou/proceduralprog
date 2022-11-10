array1 = [5, 0, 7]
array2= [13, 6, 2]

dotProduct = (a, b) => {
    let result = 0
    for (let i = 0; i < a.length; i++) {
        result += a[i] * b[i]
        
        
    }
    return result
    
}
console.log(dotProduct(array1, array2));



 areVectorsOrth = (a, b) => {
    let x = dotProduct(a, b)
    if (x === 0){
        console.log('vectors are orthogonal');
    }
    else{
        console.log('vectors are not arthogonal');
    }
    
}

console.log(areVectorsOrth(array1, array2));